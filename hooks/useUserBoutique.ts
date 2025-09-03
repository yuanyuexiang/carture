import { ApolloError } from '@apollo/client';
import { useEffect } from 'react';

// 从普通端点导入店铺查询
import { useGetUserBoutiqueQuery } from '../generated/business-graphql';

import { useUserBoutiqueStore } from '../store/user-boutique';

export const useUserBoutique = () => {
  const {
    currentUser,
    userBoutique,
    loading,
    error,
    setCurrentUser,
    setUserBoutique,
    setLoading,
    setError,
  } = useUserBoutiqueStore();

  // 暂时硬编码一个用户ID，用于测试
  // TODO: 从真实的用户认证系统获取
  useEffect(() => {
    if (!currentUser) {
      setCurrentUser({
        id: '1', // 硬编码用户ID
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User'
      });
    }
  }, [currentUser, setCurrentUser]);

  // 获取用户店铺信息 (普通端点)
  const { 
    data: boutiqueData, 
    loading: boutiqueLoading, 
    error: boutiqueError 
  } = useGetUserBoutiqueQuery({
    variables: { userId: currentUser?.id || '' },
    skip: !currentUser?.id,
    onCompleted: (data: any) => {
      if (data?.boutiques && data.boutiques.length > 0) {
        setUserBoutique(data.boutiques[0]);
      } else {
        setUserBoutique(null);
      }
    },
    onError: (err: ApolloError) => {
      setError(`获取店铺信息失败: ${err.message}`);
    }
  });

  // 更新全局 loading 状态
  useEffect(() => {
    setLoading(boutiqueLoading);
  }, [boutiqueLoading, setLoading]);

  // 更新全局 error 状态
  useEffect(() => {
    if (boutiqueError) {
      setError(boutiqueError.message);
    }
  }, [boutiqueError, setError]);

  // 添加一些便利属性
  const hasUser = !!currentUser;
  const hasBoutique = !!userBoutique;
  const isEmpty = hasUser && !hasBoutique && !loading;

  return {
    currentUser,
    userBoutique,
    loading,
    error,
    hasUser,
    hasBoutique,
    isEmpty,
    refetch: () => {
      // 可以添加重新获取数据的逻辑
    }
  };
};
