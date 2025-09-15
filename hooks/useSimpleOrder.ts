import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import {
  useGetCustomerByOpenIdAndBoutiqueLazyQuery
} from '../generated/business-graphql';
import { CREATE_ORDER, DELETE_ORDER, GET_USER_ORDERS } from '../graphql/business/orders.graphql';
import { WechatAuth } from '../utils/wechat-auth';

export const useSimpleOrder = () => {
  const [createOrderMutation] = useMutation(CREATE_ORDER);
  const [deleteOrderMutation] = useMutation(DELETE_ORDER);
  const [getCustomerByOpenIdAndBoutique] = useGetCustomerByOpenIdAndBoutiqueLazyQuery();
  const [loading, setLoading] = useState(false);

  const createSimpleOrder = async (
    productId: string, 
    productInfo?: { name: string, price: number },
    boutiqueId?: string
  ) => {
    setLoading(true);
    try {
      console.log('🚀 开始创建订单，参数:', { productId, productInfo, boutiqueId });

      // 1. 获取微信用户信息
      const wechatUserInfo = WechatAuth.getUserInfo();
      if (!wechatUserInfo?.openid) {
        console.error('❌ 未找到微信用户信息，请先登录');
        return;
      }

      // 2. 查找已存在的客户记录（不创建新的）
      let customer = null;
      if (boutiqueId) {
        // 查询指定店铺的客户记录
        const { data } = await getCustomerByOpenIdAndBoutique({
          variables: {
            open_id: wechatUserInfo.openid,
            boutique_id: boutiqueId
          }
        });
        
        if (data?.customers && data.customers.length > 0) {
          customer = data.customers[0];
          console.log('✅ 找到店铺客户记录:', customer.id);
        } else {
          console.error('❌ 用户还不是该店铺的客户，请先进入店铺');
          return;
        }
      } else {
        console.error('❌ 缺少店铺ID，无法创建订单');
        return;
      }

      // 3. 使用现有customer信息创建订单
      const orderData: any = {
        customer: {
          id: customer.id,
          open_id: customer.open_id,
          nick_name: customer.nick_name || '',
          avatar: customer.avatar || '',
          sex: customer.sex || 0,
        },
        product: {
          id: productId,
          name: productInfo?.name || '商品',
          price: productInfo?.price || 0
        },
        status: 'pending',
        date_created: new Date().toISOString(),
      };

      // 如果有boutiqueId，添加boutique信息
      if (boutiqueId) {
        orderData.boutique = {
          id: boutiqueId
        };
      }

      const response = await createOrderMutation({
        variables: {
          orderData
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
    } finally {
      setLoading(false);
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
    loading,
  };
};

export const useCustomerOrders = (openid: string | null) => {
  console.log('🔍 useCustomerOrders: 开始执行, openid:', openid);
  
  const { data, loading, error, refetch } = useQuery(GET_USER_ORDERS, {
    variables: {
      openId: openid || ''
    },
    skip: !openid,
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
    onError: (error) => {
      console.error('🚨 useCustomerOrders: GraphQL查询错误:', error);
      console.error('🚨 错误消息:', error.message);
      if (error.networkError) {
        console.error('🚨 网络错误:', error.networkError);
      }
      if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        console.error('🚨 GraphQL错误详情:', error.graphQLErrors);
        error.graphQLErrors.forEach((err, index) => {
          console.error(`🚨 GraphQL错误 ${index + 1}:`, err.message);
          console.error(`🚨 错误位置:`, err.locations);
          console.error(`🚨 错误路径:`, err.path);
        });
      }
    },
    onCompleted: (data) => {
      console.log('✅ useCustomerOrders: 查询成功, 数据:', data);
      console.log('✅ 订单数量:', data?.orders?.length || 0);
    },
    onLoading: () => {
      console.log('⏳ useCustomerOrders: 查询中...');
    }
  });

  const orders = data?.orders || [];
  
  console.log('🔍 useCustomerOrders: 返回状态:', {
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
