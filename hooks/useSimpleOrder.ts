import { useState } from 'react';
import {
    BusinessCreate_Order_Items_Input,
    BusinessCreate_Orders_Input,
    useCreateOrderItemMutation,
    useCreateOrderMutation,
    useGetOrderItemsQuery,
    useGetUserOrdersQuery
} from '../generated/business-graphql';
import { WechatAuth } from '../utils/wechat-auth';
import { useBoutiqueCustomer } from './useBoutiqueCustomer';

export interface SimpleOrderData {
  productId: string;
  productName: string;
  productPrice: number;
  quantity?: number;
  boutiqueId?: string; // 可选的字符串类型
}

/**
 * 简化的订单管理Hook
 * 专注于核心功能：创建订单、查看订单列表
 * 自动处理客户信息管理
 */
export const useSimpleOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // 店铺客户管理 - 使用新的逻辑
  const { enterBoutique, customerInfo } = useBoutiqueCustomer();

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
      // 1. 检查微信用户登录状态
      const wechatUserInfo = WechatAuth.getUserInfo();
      if (!wechatUserInfo?.openid) {
        throw new Error('请先进行微信登录');
      }

      // 2. 如果有店铺ID，确保客户记录存在（这里会自动处理进入店铺的完整流程）
      let customer = customerInfo;
      if (orderData.boutiqueId && !customer) {
        console.log('进入店铺并确保客户记录存在...');
        customer = await enterBoutique(orderData.boutiqueId);
        if (!customer) {
          throw new Error('无法获取或创建客户信息');
        }
      }

      // 如果没有店铺ID，从localStorage获取当前客户信息
      if (!customer) {
        const savedCustomer = localStorage.getItem('current_customer');
        if (savedCustomer) {
          customer = JSON.parse(savedCustomer);
        } else {
          throw new Error('未找到客户信息，请先进入店铺');
        }
      }

      // 最终验证customer信息
      if (!customer) {
        throw new Error('客户信息获取失败');
      }

      const quantity = orderData.quantity || 1;
      const totalPrice = orderData.productPrice * quantity;

      console.log('开始创建订单:', {
        customerId: customer.id,
        customerOpenId: customer.open_id,
        productId: orderData.productId,
        quantity,
        totalPrice,
        boutiqueId: orderData.boutiqueId
      });

      // 3. 创建订单，关联客户信息
      const orderInput: BusinessCreate_Orders_Input = {
        total_price: totalPrice,
        status: 'pending',
        // 注意：这里不能直接关联，需要传递完整的客户对象
        // customers_id: {
        //   id: customerInfo.id
        // },
        ...(orderData.boutiqueId && {
          boutique_id: {
            id: orderData.boutiqueId
          }
        })
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

      // 4. 创建订单项，关联商品和订单
      const orderItemInput: BusinessCreate_Order_Items_Input = {
        quantity,
        price: orderData.productPrice,
        // 注意：这里也不能直接关联，需要传递完整的对象
        // orders_id: {
        //   id: order.id
        // },
        // product_id: {
        //   id: orderData.productId
        // }
      };

      const itemResult = await createOrderItemMutation({
        variables: { orderItemData: orderItemInput }
      });

      console.log('订单项创建结果:', itemResult.data?.create_order_items_item);

      return {
        success: true,
        orderId: order.id,
        orderData: order,
        customerInfo: customer,
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