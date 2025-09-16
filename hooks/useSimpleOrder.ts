import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useBoutiqueCustomer } from '../contexts/BoutiqueContext';
import { CREATE_ORDER, DELETE_ORDER, GET_USER_ORDERS } from '../graphql/business/orders.graphql';
import { WechatAuth } from '../utils/wechat-auth';

export const useSimpleOrder = () => {
  const [createOrderMutation] = useMutation(CREATE_ORDER);
  const [deleteOrderMutation] = useMutation(DELETE_ORDER);
  const [loading, setLoading] = useState(false);
  
  // 使用BoutiqueContext中的客户信息
  const { customerInfo, customerError } = useBoutiqueCustomer();

  const createSimpleOrder = async (
    productId: string, 
    productInfo: { name: string, price: number }, // 改为必需参数
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

      // 2. 检查客户信息是否存在（来自Context）
      if (!customerInfo) {
        console.error('❌ 未找到当前店铺的客户信息，请确保已正确进入店铺');
        return;
      }

      if (customerError) {
        console.error('❌ 客户信息存在错误:', customerError);
        return;
      }

      console.log('✅ 使用客户信息:', {
        customerId: customerInfo.id,
        nickname: customerInfo.nick_name
      });

      // 3. 准备订单数据
      const orderData: any = {
        customer: {
          id: customerInfo.id,
          open_id: customerInfo.open_id,
          nick_name: customerInfo.nick_name || '',
          avatar: customerInfo.avatar || '',
          sex: customerInfo.sex || 0,
          status: customerInfo.status || 'active'
        },
        product: {
          id: productId,
          name: productInfo.name,    // 去掉可选链，因为现在是必需参数
          price: productInfo.price   // 去掉可选链，因为现在是必需参数
        },
        total_price: productInfo.price, // 去掉可选链
        status: 'pending'
      };

      // 如果有店铺ID，添加店铺信息
      if (boutiqueId) {
        orderData.boutique = {
          id: boutiqueId
        };
      }

      console.log('📝 订单数据准备完成:', orderData);

      // 4. 创建订单
      const response = await createOrderMutation({
        variables: { data: orderData }  // 修正为data，匹配GraphQL schema
      });

      console.log('✅ 订单创建成功:', response.data);
      return response.data?.create_orders_item;

    } catch (error: any) {
      console.error('❌ 创建订单失败:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId: string) => {
    setLoading(true);
    try {
      console.log('🗑️ 删除订单:', orderId);

      const response = await deleteOrderMutation({
        variables: { id: orderId }  // 恢复为id，匹配GraphQL定义
      });

      console.log('✅ 订单删除成功:', response.data);
      return response.data;

    } catch (error: any) {
      console.error('❌ 删除订单失败:', error);
      throw error;
    } finally {
      setLoading(false);
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
    }
    // 移除了无效的 onLoading 选项，Apollo Client 会自动管理 loading 状态
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
