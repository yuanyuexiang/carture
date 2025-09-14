import { useState } from 'react';
import {
    BusinessCreate_Order_Items_Input,
    BusinessCreate_Orders_Input,
    useCreateOrderItemMutation,
    useCreateOrderMutation,
    useGetOrderItemsQuery,
    useGetUserOrdersQuery
} from '../generated/business-graphql';

export interface SimpleOrderData {
  productId: string;
  productName: string;
  productPrice: number;
  quantity?: number;
  customerId: string;
  boutiqueId?: number;
}

/**
 * 简化的订单管理Hook
 * 专注于核心功能：创建订单、查看订单列表
 */
export const useSimpleOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // GraphQL Mutations
  const [createOrderMutation] = useCreateOrderMutation();
  const [createOrderItemMutation] = useCreateOrderItemMutation();

  /**
   * 创建简单订单（单个商品）
   */
  const createSimpleOrder = async (orderData: SimpleOrderData) => {
    setLoading(true);
    setError(null);

    try {
      const quantity = orderData.quantity || 1;
      const totalPrice = orderData.productPrice * quantity;

      console.log('开始创建订单:', {
        customerId: orderData.customerId,
        productId: orderData.productId,
        quantity,
        totalPrice
      });

      // 先创建基础订单数据（简化版本，只包含必需字段）
      const orderInput: BusinessCreate_Orders_Input = {
        total_price: totalPrice,
        status: 'pending'
      };

      // 创建订单
      const orderResult = await createOrderMutation({
        variables: { orderData: orderInput }
      });

      const order = orderResult.data?.create_orders_item;
      if (!order?.id) {
        throw new Error('创建订单失败');
      }

      console.log('订单创建成功:', order);

      // 创建订单项
      const orderItemInput: BusinessCreate_Order_Items_Input = {
        quantity,
        price: orderData.productPrice
      };

      const itemResult = await createOrderItemMutation({
        variables: { orderItemData: orderItemInput }
      });

      console.log('订单项创建结果:', itemResult.data?.create_order_items_item);

      return {
        success: true,
        orderId: order.id,
        orderData: order,
        message: '下单成功！'
      };

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '下单失败';
      setError(errorMessage);
      console.error('创建订单失败:', err);
      
      return {
        success: false,
        error: errorMessage,
        message: `下单失败：${errorMessage}`
      };
    } finally {
      setLoading(false);
    }
  };

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
export const useCustomerOrders = (customerId: string | null) => {
  const { data, loading, error, refetch } = useGetUserOrdersQuery({
    variables: { customerId: customerId || '' },
    skip: !customerId
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
    orderItems: data?.order_items || [],
    loading,
    error
  };
};