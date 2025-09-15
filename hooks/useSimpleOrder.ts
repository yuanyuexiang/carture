import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { Alert, Platform } from 'react-native';
import { CREATE_ORDER, DELETE_ORDER, GET_USER_ORDERS } from '../graphql/business/orders.graphql';
import { GET_CUSTOMER_BY_OPENID } from '../graphql/business/visits.graphql';

export const useSimpleOrder = () => {
  const [createOrderMutation] = useMutation(CREATE_ORDER);
  const [deleteOrderMutation] = useMutation(DELETE_ORDER);
  const apolloClient = useApolloClient();

  const createSimpleOrder = async (productId: string, userOpenId: string) => {
    try {
      if (!userOpenId) {
        const message = '请先登录';
        if (Platform.OS === 'web') {
          alert(message);
        } else {
          Alert.alert('提示', message);
        }
        return;
      }

      console.log('🚀 开始创建订单，参数:', { productId, userOpenId });

      // 1. 先根据openid获取customer ID
      const { data: customerData } = await apolloClient.query({
        query: GET_CUSTOMER_BY_OPENID,
        variables: { open_id: userOpenId }
      });

      const customer = customerData?.customers?.[0];
      if (!customer?.id) {
        console.error('❌ 找不到用户客户记录');
        return;
      }

      console.log('✅ 找到客户记录:', customer);

      // 2. 使用customer ID创建订单
      const response = await createOrderMutation({
        variables: {
          orderData: {
            customers_id: customer.id,  // 使用真实的customer ID
            product: {
              id: productId
            },
            status: 'pending',
            date_created: new Date().toISOString(),
          }
        }
      });

      console.log('🔥 GraphQL 响应:', response);

      if (response.data?.create_orders_item) {
        console.log('✅ 订单创建成功:', response.data.create_orders_item);
        return response.data.create_orders_item;
      } else {
        console.error('❌ 订单创建失败: response.data?.create_orders_item 为空');
        console.log('完整响应:', JSON.stringify(response, null, 2));
      }
    } catch (error: any) {
      console.error('❌ 创建订单异常:', error);
      if (error.networkError) {
        console.error('网络错误:', error.networkError);
      }
      if (error.graphQLErrors) {
        console.error('GraphQL错误:', error.graphQLErrors);
      }
    }
  };

  const deleteOrder = async (orderId: string) => {
    try {
      const response = await deleteOrderMutation({
        variables: {
          orderId: orderId
        }
      });

      if (response.data?.delete_orders_item) {
        return { success: true, message: '订单删除成功！' };
      } else {
        return { success: false, message: '删除失败' };
      }
    } catch (error) {
      console.error('删除订单失败:', error);
      return { success: false, message: '删除订单失败，请重试' };
    }
  };

  return {
    createSimpleOrder,
    deleteOrder,
  };
};

export const useCustomerOrders = (openid: string | null) => {
  const { data, loading, error, refetch } = useQuery(GET_USER_ORDERS, {
    variables: {
      openId: openid || ''
    },
    skip: !openid,
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  });

  const orders = data?.orders || [];

  return {
    orders,
    loading,
    error,
    refetch,
  };
};
