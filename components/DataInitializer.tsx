import React, { useEffect } from 'react';
// import { useUserBoutique } from '../hooks/useUserBoutique';

/**
 * 数据初始化组件
 * 现在采用直接 URL 参数查询模式，不再需要用户认证初始化
 */
const DataInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 临时禁用旧的用户店铺数据获取逻辑
  // 现在采用直接通过 URL 参数 boutique_id 查询的方式
  // const { currentUser, userBoutique, loading, error } = useUserBoutique();

  useEffect(() => {
    console.log('🔄 数据初始化组件已加载 - 使用直接URL参数查询模式');
    
    // 旧的初始化逻辑已被新的直接查询方式替代
    // if (currentUser) {
    //   console.log('✅ 用户信息已加载:', currentUser.email);
    // }
    // 
    // if (userBoutique) {
    //   console.log('🏪 店铺信息已加载:', userBoutique.name);
    // }
    // 
    // if (error) {
    //   console.error('❌ 数据加载错误:', error);
    // }
  }, []);

  // 直接渲染子组件，不再依赖用户认证状态
  return <>{children}</>;
};

export default DataInitializer;
