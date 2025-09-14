import { useCallback, useState } from 'react';
import {
    useCreateCustomerSimpleMutation,
    useCreateCustomerWithBoutiqueMutation,
    useGetCustomerByOpenIdAndBoutiqueLazyQuery,
    useGetCustomerByOpenIdLazyQuery,
    useUpdateCustomerMutation
} from '../generated/business-graphql';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

export interface CustomerInfo {
  id: string;
  open_id: string;
  nick_name?: string | null;
  avatar?: string | null;
  sex?: number | null;
  status?: string | null;
  boutique?: {
    id: string;
    name?: string | null;
  } | null;
  date_created?: any;
}

export interface UseCustomerManagerResult {
  loading: boolean;
  error: string | null;
  customerInfo: CustomerInfo | null;
  ensureCustomer: (boutiqueId?: string) => Promise<CustomerInfo | null>;
  updateCustomerFromWechat: (customerId: string) => Promise<CustomerInfo | null>;
  clearError: () => void;
}

/**
 * 客户管理Hook
 * 
 * 功能：
 * 1. 将微信用户信息转换为客户信息
 * 2. 检查/创建客户记录
 * 3. 更新客户信息
 * 4. 管理客户与店铺的关联
 */
export const useCustomerManager = (): UseCustomerManagerResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  // GraphQL查询和变更
  const [getCustomerByOpenIdAndBoutique] = useGetCustomerByOpenIdAndBoutiqueLazyQuery();
  const [getCustomerByOpenId] = useGetCustomerByOpenIdLazyQuery();
  const [createCustomerWithBoutique] = useCreateCustomerWithBoutiqueMutation();
  const [createCustomerSimple] = useCreateCustomerSimpleMutation();
  const [updateCustomer] = useUpdateCustomerMutation();

  /**
   * 检查客户信息是否需要更新
   */
  const shouldUpdateCustomer = useCallback((customer: CustomerInfo, wechatUserInfo: WechatUserInfo): boolean => {
    return (
      customer.nick_name !== wechatUserInfo.nickname ||
      customer.avatar !== wechatUserInfo.headimgurl ||
      customer.sex !== wechatUserInfo.sex
    );
  }, []);

  /**
   * 确保客户记录存在
   * @param boutiqueId 店铺ID（可选）
   * @returns 客户信息
   */
  const ensureCustomer = useCallback(async (boutiqueId?: string): Promise<CustomerInfo | null> => {
    setLoading(true);
    setError(null);

    try {
      // 1. 获取微信用户信息
      const wechatUserInfo = WechatAuth.getUserInfo();
      if (!wechatUserInfo?.openid) {
        throw new Error('未找到微信用户信息，请先登录');
      }

      console.log('🔍 开始检查客户记录:', {
        openId: wechatUserInfo.openid,
        nickname: wechatUserInfo.nickname,
        boutiqueId
      });

      let customer: CustomerInfo | null = null;

      // 2. 如果有店铺ID，先查询该店铺下的客户记录
      if (boutiqueId) {
        console.log('查询店铺关联的客户记录...');
        const { data: boutiqueCustomerData } = await getCustomerByOpenIdAndBoutique({
          variables: {
            open_id: wechatUserInfo.openid,
            boutique_id: boutiqueId
          }
        });

        if (boutiqueCustomerData?.customers && boutiqueCustomerData.customers.length > 0) {
          customer = boutiqueCustomerData.customers[0] as CustomerInfo;
          console.log('✅ 找到店铺关联的客户记录:', customer.id);

          // 检查是否需要更新客户信息
          if (shouldUpdateCustomer(customer, wechatUserInfo)) {
            console.log('客户信息有更新，执行更新操作...');
            const updatedCustomer = await updateCustomerFromWechat(customer.id);
            if (updatedCustomer) {
              customer = updatedCustomer;
            }
          }
        } else {
          console.log('该店铺下未找到客户记录，检查全局客户记录...');
          
          // 3. 查询全局客户记录
          const { data: globalCustomerData } = await getCustomerByOpenId({
            variables: {
              open_id: wechatUserInfo.openid
            }
          });

          if (globalCustomerData?.customers && globalCustomerData.customers.length > 0) {
            // 找到已有的客户记录，但不在当前店铺，创建店铺关联的新记录
            console.log('找到全局客户记录，为当前店铺创建新的客户记录...');
            customer = await createCustomerWithBoutiqueRelation(wechatUserInfo, boutiqueId);
          } else {
            // 完全新的客户，创建店铺关联的记录
            console.log('完全新的客户，创建店铺关联的客户记录...');
            customer = await createCustomerWithBoutiqueRelation(wechatUserInfo, boutiqueId);
          }
        }
      } else {
        // 4. 没有店铺ID，查询全局客户记录
        console.log('查询全局客户记录...');
        const { data: globalCustomerData } = await getCustomerByOpenId({
          variables: {
            open_id: wechatUserInfo.openid
          }
        });

        if (globalCustomerData?.customers && globalCustomerData.customers.length > 0) {
          customer = globalCustomerData.customers[0] as CustomerInfo;
          console.log('✅ 找到全局客户记录:', customer.id);

          // 检查是否需要更新客户信息
          if (shouldUpdateCustomer(customer, wechatUserInfo)) {
            console.log('客户信息有更新，执行更新操作...');
            const updatedCustomer = await updateCustomerFromWechat(customer.id);
            if (updatedCustomer) {
              customer = updatedCustomer;
            }
          }
        } else {
          // 创建简单的客户记录（不关联店铺）
          console.log('创建简单的客户记录...');
          customer = await createSimpleCustomer(wechatUserInfo);
        }
      }

      setCustomerInfo(customer);
      return customer;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '客户记录处理失败';
      console.error('❌ 客户记录处理失败:', errorMessage);
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, [getCustomerByOpenIdAndBoutique, getCustomerByOpenId, shouldUpdateCustomer]);

  /**
   * 创建带店铺关联的客户记录
   */
  const createCustomerWithBoutiqueRelation = useCallback(async (
    wechatUserInfo: WechatUserInfo,
    boutiqueId: string
  ): Promise<CustomerInfo | null> => {
    console.log('创建店铺关联的客户记录...');

    const { data } = await createCustomerWithBoutique({
      variables: {
        open_id: wechatUserInfo.openid,
        nick_name: wechatUserInfo.nickname || null,
        avatar: wechatUserInfo.headimgurl || null,
        sex: wechatUserInfo.sex || null,
        boutiqueId: boutiqueId
      }
    });

    if (!data?.create_customers_item) {
      throw new Error('创建店铺关联客户记录失败');
    }

    console.log('✅ 店铺关联客户记录创建成功:', data.create_customers_item.id);
    return data.create_customers_item as CustomerInfo;
  }, [createCustomerWithBoutique]);

  /**
   * 创建简单客户记录（不关联店铺）
   */
  const createSimpleCustomer = useCallback(async (
    wechatUserInfo: WechatUserInfo
  ): Promise<CustomerInfo | null> => {
    console.log('创建简单客户记录...');

    const { data } = await createCustomerSimple({
      variables: {
        open_id: wechatUserInfo.openid,
        nick_name: wechatUserInfo.nickname || null,
        avatar: wechatUserInfo.headimgurl || null,
        sex: wechatUserInfo.sex || null
      }
    });

    if (!data?.create_customers_item) {
      throw new Error('创建简单客户记录失败');
    }

    console.log('✅ 简单客户记录创建成功:', data.create_customers_item.id);
    return data.create_customers_item as CustomerInfo;
  }, [createCustomerSimple]);

  /**
   * 根据微信信息更新客户记录
   */
  const updateCustomerFromWechat = useCallback(async (customerId: string): Promise<CustomerInfo | null> => {
    const wechatUserInfo = WechatAuth.getUserInfo();
    if (!wechatUserInfo) {
      throw new Error('未找到微信用户信息');
    }

    console.log('更新客户信息:', customerId);

    const { data } = await updateCustomer({
      variables: {
        id: customerId,
        nick_name: wechatUserInfo.nickname || null,
        avatar: wechatUserInfo.headimgurl || null,
        sex: wechatUserInfo.sex || null
      }
    });

    if (!data?.update_customers_item) {
      throw new Error('更新客户信息失败');
    }

    console.log('✅ 客户信息更新成功');
    
    // 重新查询完整的客户信息
    const { data: updatedData } = await getCustomerByOpenId({
      variables: {
        open_id: wechatUserInfo.openid
      }
    });

    return updatedData?.customers?.[0] as CustomerInfo || null;
  }, [updateCustomer, getCustomerByOpenId]);

  /**
   * 清除错误信息
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loading,
    error,
    customerInfo,
    ensureCustomer,
    updateCustomerFromWechat,
    clearError
  };
};