import React, { createContext, useContext, useEffect, useState } from 'react';
import { getBoutiqueIdFromUrl, updateUrlParam } from '../utils/url-params';

interface BoutiqueContextValue {
  /** 当前店铺ID */
  boutiqueId: string | null;
  /** 设置店铺ID */
  setBoutiqueId: (id: string | null) => void;
  /** 是否正在加载店铺信息 */
  loading: boolean;
}

const BoutiqueContext = createContext<BoutiqueContextValue | null>(null);

/**
 * 店铺上下文提供者组件
 * 管理当前选中的店铺状态
 */
export const BoutiqueProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [boutiqueId, setBoutiqueIdState] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 从URL初始化店铺ID
  useEffect(() => {
    console.log('🏪 BoutiqueProvider 初始化...');
    
    const urlBoutiqueId = getBoutiqueIdFromUrl();
    if (urlBoutiqueId) {
      setBoutiqueIdState(urlBoutiqueId);
      console.log('🏪 从URL设置店铺ID:', urlBoutiqueId);
    } else {
      console.log('🏪 未指定店铺ID，将使用默认逻辑');
    }
    
    setLoading(false);
  }, []);

  // 设置店铺ID并更新URL
  const setBoutiqueId = (id: string | null) => {
    console.log('🏪 切换店铺ID:', id);
    setBoutiqueIdState(id);
    
    if (id) {
      updateUrlParam('boutique_id', id);
    } else {
      // 如果ID为null，不更新URL（保持当前状态）
      console.log('🏪 店铺ID设置为null，保持当前URL状态');
    }
  };

  const contextValue: BoutiqueContextValue = {
    boutiqueId,
    setBoutiqueId,
    loading,
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