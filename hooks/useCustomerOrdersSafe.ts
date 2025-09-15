import { useQuery } from '@apollo/client';
import { GET_USER_ORDERS_MINIMAL } from '../graphql/business/orders-safe.graphql';

// 安全版本的订单查询hook - 用于调试
export const useCustomerOrdersSafe = (openid: string | null) => {
  console.log('🔍 useCustomerOrdersSafe: 开始查询, openid:', openid);
  
  const { data, loading, error, refetch } = useQuery(GET_USER_ORDERS_MINIMAL, {
    variables: {
      openId: openid || ''
    },
    skip: !openid,
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
    onError: (error) => {
      console.error('🚨 useCustomerOrdersSafe: GraphQL查询错误:', error);
      console.error('🚨 错误详情:', error.message);
      console.error('🚨 网络错误:', error.networkError);
      console.error('🚨 GraphQL错误:', error.graphQLErrors);
    },
    onCompleted: (data) => {
      console.log('✅ useCustomerOrdersSafe: 查询成功:', data);
    }
  });

  const orders = data?.orders || [];

  console.log('🔍 useCustomerOrdersSafe: 返回结果:', { 
    ordersCount: orders.length, 
    loading, 
    hasError: !!error,
    errorMessage: error?.message 
  });

  return {
    orders,
    loading,
    error,
    refetch,
  };
};