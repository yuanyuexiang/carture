import { useMutation, useQuery } from '@apollo/client';
import { Alert, Platform } from 'react-native';
import { CREATE_ORDER, DELETE_ORDER, GET_USER_ORDERS } from '../graphql/business/orders.graphql';

export const useSimpleOrder = () => {
  const [createOrderMutation] = useMutation(CREATE_ORDER);
  const [deleteOrderMutation] = useMutation(DELETE_ORDER);

  const createSimpleOrder = async (productId: string, userId: string) => {
    try {
      if (!userId) {
        const message = '请先登录';
        if (Platform.OS === 'web') {
          alert(message);
        } else {
          Alert.alert('提示', message);
        }
        return;
      }

      const response = await createOrderMutation({
        variables: {
          orderData: {
            user: userId,
            product: productId,
            status: 'pending',
            date_created: new Date().toISOString(),
          }
        }
      });

      if (response.data?.create_orders_item) {
        const message = '订单创建成功！';
        if (Platform.OS === 'web') {
          alert(message);
        } else {
          Alert.alert('成功', message);
        }
        return response.data.create_orders_item;
      }
    } catch (error) {
      console.error('创建订单失败:', error);
      const message = '创建订单失败，请重试';
      if (Platform.OS === 'web') {
        alert(message);
      } else {
        Alert.alert('错误', message);
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
