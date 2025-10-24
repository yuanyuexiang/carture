import { useCallback, useEffect, useState } from 'react';
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

export interface BoutiqueCustomerState {
  /** 当前店铺的客户信息 */
  customerInfo: CustomerInfo | null;
  /** 是否正在处理客户信息 */
  loading: boolean;
  /** 错误信息 */
  error: string | null;
}

export interface UseBoutiqueCustomerManagerResult extends BoutiqueCustomerState {
  /** 切换到新店铺时调用，自动处理客户信息 */
  switchToBoutique: (boutiqueId: string | null) => Promise<void>;
  /** 清除错误 */
  clearError: () => void;
  /** 手动刷新当前店铺的客户信息 */
  refreshCustomerInfo: () => Promise<void>;
}

/**
 * 店铺客户管理Hook
 * 
 * 核心功能：
 * 1. 当用户切换店铺时，自动查询该店铺的客户记录
 * 2. 如果不存在客户记录，自动创建一个
 * 3. 将客户信息保存在本地状态中，供其他业务使用
 * 4. 支持手动刷新客户信息
 */
export const useBoutiqueCustomerManager = (): UseBoutiqueCustomerManagerResult => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentBoutiqueId, setCurrentBoutiqueId] = useState<string | null>(null);

  // GraphQL hooks
  const [getCustomerByOpenIdAndBoutique] = useGetCustomerByOpenIdAndBoutiqueLazyQuery();
  const [createCustomerWithBoutique] = useCreateCustomerWithBoutiqueMutation();
  
  // 访问记录管理
  const { recordVisit } = useVisitManager();

  /**
   * 处理店铺客户信息的核心逻辑
   * 简单直接：查询 → 没有就创建,有就返回 → 创建访问记录
   */
  const processBoutiqueCustomer = useCallback(async (boutiqueId: string): Promise<CustomerInfo | null> => {
    console.log('🔍 开始处理店铺客户信息:', boutiqueId);

    // 1. 获取微信用户信息
    const wechatUserInfo = WechatAuth.getUserInfo();
    if (!wechatUserInfo?.openid) {
      throw new Error('未找到微信用户信息,请先进行微信授权登录');
    }

    console.log('👤 微信用户信息:', {
      openId: wechatUserInfo.openid,
      nickname: wechatUserInfo.nickname
    });

    // 2. 查询该店铺下的客户记录
    console.log('🔍 查询店铺客户记录...');
    const { data } = await getCustomerByOpenIdAndBoutique({
      variables: {
        open_id: wechatUserInfo.openid,
        boutique_id: boutiqueId
      }
    });

    let customer: CustomerInfo | null = null;

    // 3. 如果找到客户记录,直接使用
    if (data?.customers && data.customers.length > 0) {
      customer = data.customers[0] as CustomerInfo;
      console.log('✅ 找到现有客户记录:', {
        customerId: customer.id,
        nickname: customer.nick_name
      });
    } else {
      // 4. 没有找到客户记录,创建新的
      console.log('❌ 未找到客户记录,创建新客户...');
      const createResult = await createCustomerWithBoutique({
        variables: {
          open_id: wechatUserInfo.openid,
          nick_name: wechatUserInfo.nickname || null,
          avatar: wechatUserInfo.headimgurl || null,
          sex: wechatUserInfo.sex || null,
          boutiqueId: boutiqueId
        }
      });

      if (!createResult.data?.create_customers_item) {
        throw new Error('创建客户记录失败');
      }

      customer = createResult.data.create_customers_item as CustomerInfo;
      console.log('✅ 成功创建新客户记录:', {
        customerId: customer.id,
        nickname: customer.nick_name
      });
    }

    // 5. 创建访问记录
    console.log('📊 记录店铺访问...');
    try {
      const visitResult = await recordVisit(wechatUserInfo, boutiqueId);
      if (visitResult.success) {
        console.log('✅ 访问记录创建成功');
      } else {
        console.warn('⚠️ 访问记录创建失败，但不影响客户流程:', visitResult.message);
      }
    } catch (visitError) {
      console.warn('⚠️ 访问记录创建异常，但不影响客户流程:', visitError);
    }

    return customer;
  }, [getCustomerByOpenIdAndBoutique, createCustomerWithBoutique, recordVisit]);

  /**
   * 切换到新店铺
   */
  const switchToBoutique = useCallback(async (boutiqueId: string | null): Promise<void> => {
    console.log('🏪 切换店铺:', { from: currentBoutiqueId, to: boutiqueId });

    // 清除之前的状态
    setError(null);

    if (!boutiqueId) {
      // 如果boutiqueId为null，清除客户信息
      setCustomerInfo(null);
      setCurrentBoutiqueId(null);
      console.log('🏪 清除店铺状态');
      return;
    }

    // 如果是同一个店铺，不需要重新处理
    if (currentBoutiqueId === boutiqueId && customerInfo) {
      console.log('🏪 同一店铺，无需重新处理客户信息');
      return;
    }

    setLoading(true);

    try {
      const customer = await processBoutiqueCustomer(boutiqueId);
      setCustomerInfo(customer);
      setCurrentBoutiqueId(boutiqueId);
      
      console.log('🏪 店铺切换完成:', {
        boutiqueId,
        customerId: customer?.id
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '处理客户信息失败';
      setError(errorMessage);
      console.error('❌ 店铺切换失败:', errorMessage);
    } finally {
      setLoading(false);
    }
  }, [currentBoutiqueId, customerInfo, processBoutiqueCustomer]);

  /**
   * 手动刷新当前店铺的客户信息
   */
  const refreshCustomerInfo = useCallback(async (): Promise<void> => {
    if (!currentBoutiqueId) {
      console.log('🔄 没有当前店铺ID，无法刷新客户信息');
      return;
    }

    console.log('🔄 手动刷新客户信息:', currentBoutiqueId);
    await switchToBoutique(currentBoutiqueId);
  }, [currentBoutiqueId, switchToBoutique]);

  /**
   * 清除错误
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // 本地存储客户信息（可选）
  useEffect(() => {
    if (customerInfo && currentBoutiqueId) {
      const storageKey = `customer_${currentBoutiqueId}`;
      try {
        localStorage.setItem(storageKey, JSON.stringify({
          customerInfo,
          timestamp: Date.now()
        }));
        console.log('💾 客户信息已保存到本地存储');
      } catch (err) {
        console.warn('⚠️ 本地存储客户信息失败:', err);
      }
    }
  }, [customerInfo, currentBoutiqueId]);

  return {
    customerInfo,
    loading,
    error,
    switchToBoutique,
    clearError,
    refreshCustomerInfo
  };
};