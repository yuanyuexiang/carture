import { useCallback, useState } from 'react';
import {
  BusinessCreate_Order_Items_Input,
  BusinessCreate_Orders_Input,
  useCreateOrderItemMutation,
  useCreateOrderMutation,
  useGetOrderItemsQuery,
  useGetUserOrdersQuery
} from '../generated/business-graphql';
import { WechatAuth } from '../utils/wechat-auth';

export interface SimpleOrderData {
  productId: string;
  productName: string;
  productPrice: number;
  quantity?: number;
  boutiqueId?: string;
}

/**
 * 简化的订单管理Hook - 仿照 useProductViewRecorder 的简单逻辑
 * 1. 获取微信用户信息
 * 2. 创建订单时让后台自动处理 customer 查询/创建
 * 3. 创建订单记录
 */
export const useSimpleOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // GraphQL Mutations
  const [createOrderMutation] = useCreateOrderMutation();
  const [createOrderItemMutation] = useCreateOrderItemMutation();

  /**
   * 创建简单订单（仿照 recordProductView 的逻辑）
   */
  const createSimpleOrder = useCallback(async (orderData: SimpleOrderData) => {
    setLoading(true);
    setError(null);

    try {
      console.log('=== 开始创建简单订单 ===');
      console.log('订单数据:', orderData);

      // 1. 获取微信用户信息（就像 visit view 一样简单）
      const wechatUserInfo = WechatAuth.getUserInfo();
      console.log('微信用户信息:', wechatUserInfo);
      
      if (!wechatUserInfo?.openid) {
        throw new Error('请先进行微信登录');
      }

      const quantity = orderData.quantity || 1;
      const totalPrice = orderData.productPrice * quantity;

      // 2. 构建订单数据（仿照 viewData 的结构，让后台自动处理客户信息）
      const orderInput: BusinessCreate_Orders_Input = {
        total_price: totalPrice,
        status: 'pending',
        customers_id: {
          open_id: wechatUserInfo.openid,
          nick_name: wechatUserInfo.nickname || '微信用户',
          avatar: wechatUserInfo.headimgurl || null,
          type: 'wechat',
          status: 'active'
        },
        ...(orderData.boutiqueId && {
          boutique_id: {
            id: orderData.boutiqueId
          }
        })
      };

      console.log('发送订单创建请求:', orderInput);

      // 3. 创建订单（后台会自动查询/创建 customer）
      const orderResult = await createOrderMutation({
        variables: { orderData: orderInput }
      });

      const order = orderResult.data?.create_orders_item;
      if (!order?.id) {
        throw new Error('创建订单失败');
      }

      console.log('✅ 订单创建成功:', order);

      // 4. 创建订单项
      const orderItemInput: BusinessCreate_Order_Items_Input = {
        quantity,
        price: orderData.productPrice,
        order_id: {
          id: order.id
        },
        product_id: {
          id: orderData.productId,
          name: orderData.productName,
          price: orderData.productPrice
        }
      };

      const itemResult = await createOrderItemMutation({
        variables: { orderItemData: orderItemInput }
      });

      console.log('✅ 订单项创建成功:', itemResult.data?.create_order_items_item);

      return {
        success: true,
        orderId: order.id,
        orderData: order,
        message: '下单成功！'
      };

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '下单失败';
      console.error('❌ 下单失败:', errorMessage, err);
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage,
        message: errorMessage
      };
    } finally {
      setLoading(false);
    }
  }, [createOrderMutation, createOrderItemMutation]);

  return {
    loading,
    error,
    createSimpleOrder,
    clearError: () => setError(null)
  };
};

/**
 * 获取客户订单列表的Hook
 */
export const useCustomerOrders = (openId: string | null) => {
  const { data, loading, error, refetch } = useGetUserOrdersQuery({
    variables: { openId: openId || '' },
    skip: !openId || openId.trim() === ''
  });

  return {
    orders: data?.orders || [],
    loading,
    error,
    refetch
  };
};

/**
 * 获取订单商品项的Hook
 */
export const useOrderItems = (orderId: string | null) => {
  const { data, loading, error } = useGetOrderItemsQuery({
    variables: { orderId: orderId || '' },
    skip: !orderId
  });

  return {
    items: data?.order_items || [],
    loading,
    error
  };
};