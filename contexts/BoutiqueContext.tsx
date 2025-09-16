import React, { createContext, useContext, useEffect, useState } from 'react';
import { CustomerInfo, useBoutiqueCustomerManager } from '../hooks/useBoutiqueCustomerManager';
import { getBoutiqueIdFromUrl, updateUrlParam } from '../utils/url-params';

interface BoutiqueContextValue {
  /** 当前店铺ID */
  boutiqueId: string | null;
  /** 设置店铺ID（异步，会自动处理客户信息） */
  setBoutiqueId: (id: string | null) => Promise<void>;
  /** 是否正在加载店铺信息 */
  loading: boolean;
  /** 当前店铺的客户信息 */
  customerInfo: CustomerInfo | null;
  /** 客户信息是否正在加载 */
  customerLoading: boolean;
  /** 客户信息错误 */
  customerError: string | null;
  /** 手动刷新客户信息 */
  refreshCustomerInfo: () => Promise<void>;
  /** 清除客户错误 */
  clearCustomerError: () => void;
}

const BoutiqueContext = createContext<BoutiqueContextValue | null>(null);

/**
 * 店铺上下文提供者组件
 * 管理当前选中的店铺状态
 */
export const BoutiqueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [boutiqueId, setBoutiqueIdState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 使用客户管理Hook
  const {
    customerInfo,
    loading: customerLoading,
    error: customerError,
    switchToBoutique,
    clearError: clearCustomerError,
    refreshCustomerInfo
  } = useBoutiqueCustomerManager();

  // 从URL初始化店铺ID并处理客户信息
  useEffect(() => {
    const initializeBoutique = async () => {
      console.log('🏪 BoutiqueProvider 初始化...');
      
      const urlBoutiqueId = getBoutiqueIdFromUrl();
      if (urlBoutiqueId) {
        setBoutiqueIdState(urlBoutiqueId);
        console.log('🏪 从URL设置店铺ID:', urlBoutiqueId);
        
        // 初始化时也需要处理客户信息
        await switchToBoutique(urlBoutiqueId);
      } else {
        console.log('🏪 未指定店铺ID，将使用默认逻辑');
      }
      
      setLoading(false);
    };

    initializeBoutique();
  }, [switchToBoutique]);

  // 设置店铺ID并更新URL，同时处理客户信息
  const setBoutiqueId = async (id: string | null) => {
    console.log('🏪 切换店铺ID:', id);
    setBoutiqueIdState(id);
    
    if (id) {
      updateUrlParam('boutique_id', id);
    } else {
      console.log('🏪 店铺ID设置为null，保持当前URL状态');
    }

    // 切换店铺时自动处理客户信息
    await switchToBoutique(id);
  };

  const contextValue: BoutiqueContextValue = {
    boutiqueId,
    setBoutiqueId,
    loading,
    customerInfo,
    customerLoading,
    customerError,
    refreshCustomerInfo,
    clearCustomerError,
  };

  return (
    <BoutiqueContext.Provider value={contextValue}>
      {children}
    </BoutiqueContext.Provider>
  );
};

/**
 * 使用店铺上下文的Hook
 * @returns BoutiqueContextValue
 */
export const useBoutiqueContext = (): BoutiqueContextValue => {
  const context = useContext(BoutiqueContext);
  if (!context) {
    throw new Error('useBoutiqueContext must be used within a BoutiqueProvider');
  }
  return context;
};

/**
 * 获取当前店铺ID的Hook
 * @returns 当前店铺ID
 */
export const useBoutiqueId = (): string | null => {
  const { boutiqueId } = useBoutiqueContext();
  return boutiqueId;
};

/**
 * 获取当前店铺客户信息的Hook
 * @returns 客户信息相关状态
 */
export const useBoutiqueCustomer = () => {
  const { 
    customerInfo, 
    customerLoading, 
    customerError, 
    refreshCustomerInfo, 
    clearCustomerError 
  } = useBoutiqueContext();
  
  return {
    customerInfo,
    customerLoading,
    customerError,
    refreshCustomerInfo,
    clearCustomerError
  };
};