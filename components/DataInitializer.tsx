import React, { useEffect } from 'react';
import { useUserBoutique } from '../hooks/useUserBoutique';

/**
 * 数据初始化组件
 * 在应用启动时自动获取用户和店铺信息
 */
const DataInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 调用useUserBoutique hook来初始化数据获取
  const { currentUser, userBoutique, loading, error } = useUserBoutique();

  useEffect(() => {
    if (currentUser) {
      console.log('✅ 用户信息已加载:', currentUser.email);
    }
    
    if (userBoutique) {
      console.log('🏪 店铺信息已加载:', userBoutique.name);
    }
    
    if (error) {
      console.error('❌ 数据加载错误:', error);
    }
  }, [currentUser, userBoutique, error]);

  // 无论数据加载状态如何，都渲染子组件
  // loading和error状态由各个使用数据的组件自行处理
  return <>{children}</>;
};

export default DataInitializer;
