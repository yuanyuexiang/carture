import { ApolloError, gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';

// 从普通端点导入店铺查询
import { useGetUserBoutiqueQuery } from '../generated/business-graphql';
// 从系统端点导入用户信息查询
import { useSystemApolloClient } from '../components/SystemApolloProvider';

import { useUserBoutiqueStore } from '../store/user-boutique';

// 系统端点查询：获取当前用户信息
const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    users_me {
      id
      email
      first_name
      last_name
    }
  }
`;

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

  // 获取系统 Apollo 客户端
  const systemClient = useSystemApolloClient();

  // 从系统端点获取当前用户信息
  const { 
    data: userData, 
    loading: userLoading, 
    error: userError 
  } = useQuery(GET_CURRENT_USER, {
    client: systemClient,
    onCompleted: (data: any) => {
      if (data?.users_me) {
        setCurrentUser({
          id: data.users_me.id,
          email: data.users_me.email,
          first_name: data.users_me.first_name,
          last_name: data.users_me.last_name
        });
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

  // 更新全局 loading 状态 (包括用户和店铺加载状态)
  useEffect(() => {
    setLoading(userLoading || boutiqueLoading);
  }, [userLoading, boutiqueLoading, setLoading]);

  // 更新全局 error 状态
  useEffect(() => {
    if (userError) {
      setError(userError.message);
    } else if (boutiqueError) {
      setError(boutiqueError.message);
    }
  }, [userError, boutiqueError, setError]);

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
