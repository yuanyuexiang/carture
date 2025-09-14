import { useCallback, useState } from 'react';
import {
    useCreateCustomerWithBoutiqueMutation,
    useGetCustomerByOpenIdAndBoutiqueLazyQuery
} from '../generated/business-graphql';
import { WechatAuth } from '../utils/wechat-auth';
import { useVisitManager } from './useVisitManager';

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

export interface UseBoutiqueCustomerResult {
  loading: boolean;
  error: string | null;
  customerInfo: CustomerInfo | null;
  enterBoutique: (boutiqueId: string) => Promise<CustomerInfo | null>;
  clearError: () => void;
}

/**
 * 店铺客户管理Hook
 * 
 * 专门处理进入店铺的场景：
 * 1. 获取微信用户信息
 * 2. 基于 openId + boutiqueId 查询客户记录
 * 3. 没有客户记录就创建一个
 * 4. 本地保存客户信息
 * 5. 记录一次 visit 访问记录
 */
export const useBoutiqueCustomer = (): UseBoutiqueCustomerResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  // GraphQL 查询和变更
  const [getCustomerByOpenIdAndBoutique] = useGetCustomerByOpenIdAndBoutiqueLazyQuery();
  const [createCustomerWithBoutique] = useCreateCustomerWithBoutiqueMutation();
  
  // 访问记录管理
  const { recordVisit } = useVisitManager();

  /**
   * 进入店铺的完整流程
   * @param boutiqueId 店铺ID
   * @returns 客户信息
   */
  const enterBoutique = useCallback(async (boutiqueId: string): Promise<CustomerInfo | null> => {
    setLoading(true);
    setError(null);

    try {
      // 1. 获取微信用户信息（这就是客户信息的来源）
      const wechatUserInfo = WechatAuth.getUserInfo();
      if (!wechatUserInfo?.openid) {
        throw new Error('未找到微信用户信息，请先登录');
      }

      console.log('🏪 进入店铺流程开始:', {
        openId: wechatUserInfo.openid,
        nickname: wechatUserInfo.nickname,
        boutiqueId
      });

      // 2. 基于 openId + boutiqueId 查询这家店铺的客户记录
      console.log('🔍 查询店铺客户记录...');
      const { data } = await getCustomerByOpenIdAndBoutique({
        variables: {
          open_id: wechatUserInfo.openid,
          boutique_id: boutiqueId
        }
      });

      let customer: CustomerInfo | null = null;

      if (data?.customers && data.customers.length > 0) {
        // 3a. 找到了客户记录，本地保存
        customer = data.customers[0] as CustomerInfo;
        console.log('✅ 找到现有客户记录:', customer.id);
        
        // 本地保存客户信息
        setCustomerInfo(customer);
        
        // 可以考虑保存到 localStorage 以便其他组件使用
        localStorage.setItem('current_customer', JSON.stringify(customer));
        
      } else {
        // 3b. 没有找到客户记录，创建一个新的
        console.log('📝 创建新的客户记录...');
        
        const { data: createData } = await createCustomerWithBoutique({
          variables: {
            open_id: wechatUserInfo.openid,
            nick_name: wechatUserInfo.nickname || null,
            avatar: wechatUserInfo.headimgurl || null,
            sex: wechatUserInfo.sex || null,
            boutiqueId: boutiqueId
          }
        });

        if (!createData?.create_customers_item) {
          throw new Error('创建客户记录失败');
        }

        customer = createData.create_customers_item as CustomerInfo;
        console.log('✅ 客户记录创建成功:', customer.id);
        
        // 本地保存客户信息
        setCustomerInfo(customer);
        localStorage.setItem('current_customer', JSON.stringify(customer));
      }

      // 4. 记录一次 visit 访问记录
      console.log('📊 记录店铺访问...');
      const visitResult = await recordVisit(wechatUserInfo, boutiqueId);

      if (visitResult.success) {
        console.log('✅ 访问记录创建成功');
      } else {
        console.warn('⚠️ 访问记录创建失败，但不影响客户流程');
      }

      console.log('🎉 进入店铺流程完成:', {
        customerId: customer.id,
        customerOpenId: customer.open_id,
        boutiqueId
      });

      return customer;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '进入店铺失败';
      console.error('❌ 进入店铺流程失败:', errorMessage, err);
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, [getCustomerByOpenIdAndBoutique, createCustomerWithBoutique, recordVisit]);

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
    enterBoutique,
    clearError
  };
};