import { ApolloError } from '@apollo/client';
import { useEffect } from 'react';

// 从系统端点导入用户查询
import {
    SystemGetCurrentUserQuery,
    useGetCurrentUserQuery
} from '../generated/system-graphql';

// 从普通端点导入店铺查询
import {
    GetUserBoutiqueQuery,
    useGetUserBoutiqueQuery
} from '../generated/graphql';

import { systemApolloClient } from '../components/SystemApolloProvider';
import { CurrentUser, useUserBoutiqueStore } from '../store/user-boutique';

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

  // 获取当前用户信息 (系统端点)
  const { 
    data: userData, 
    loading: userLoading, 
    error: userError 
  } = useGetCurrentUserQuery({
    client: systemApolloClient, // 使用系统端点的Apollo Client
    onCompleted: (data: SystemGetCurrentUserQuery) => {
      if (data?.users_me) {
        const user: CurrentUser = {
          id: data.users_me.id,
          email: data.users_me.email || '',
          first_name: data.users_me.first_name || undefined,
          last_name: data.users_me.last_name || undefined,
        };
        setCurrentUser(user);
      }
    },
    onError: (err: ApolloError) => {
      setError(`获取用户信息失败: ${err.message}`);
    }
  });

  // 获取用户店铺信息 (普通端点)
  const { 
    data: boutiqueData, 
    loading: boutiqueLoading, 
    error: boutiqueError 
  } = useGetUserBoutiqueQuery({
    variables: { userId: currentUser?.id || '' },
    skip: !currentUser?.id, // 只有获取到用户ID后才查询店铺信息
    onCompleted: (data: GetUserBoutiqueQuery) => {
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

  // 更新loading状态
  useEffect(() => {
    setLoading(userLoading || boutiqueLoading);
  }, [userLoading, boutiqueLoading, setLoading]);

  // 更新error状态
  useEffect(() => {
    if (userError || boutiqueError) {
      setError(userError?.message || boutiqueError?.message || '未知错误');
    } else {
      setError(null);
    }
  }, [userError, boutiqueError, setError]);

  return {
    currentUser,
    userBoutique,
    loading,
    error,
    // 便利方法
    hasUser: !!currentUser,
    hasBoutique: !!userBoutique,
    isEmpty: !loading && !userBoutique,
  };
};
