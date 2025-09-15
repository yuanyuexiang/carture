/**
 * 测试订单创建功能
 * 用于验证GraphQL mutation修复是否正确
 */

import { useSimpleOrder } from '../hooks/useSimpleOrder';

// 测试数据
const testOrderData = {
  productId: "9",
  productName: "测试商品",
  productPrice: 99.99,
  quantity: 1,
  boutiqueId: "test-boutique-id"
};

export const testOrderCreation = async () => {
  const { createSimpleOrder } = useSimpleOrder();
  
  try {
    console.log('🧪 开始测试订单创建...');
    console.log('测试数据:', testOrderData);
    
    const result = await createSimpleOrder(testOrderData);
    
    if (result.success) {
      console.log('✅ 订单创建成功!');
      console.log('订单ID:', result.orderId);
      console.log('客户信息:', result.customerInfo);
    } else {
      console.error('❌ 订单创建失败:', result.error);
    }
    
    return result;
    
  } catch (error) {
    console.error('❌ 测试过程中发生错误:', error);
    throw error;
  }
};

// 使用方法：
// 在React组件中调用 testOrderCreation() 来测试订单创建功能