import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useCustomerOrders } from '../hooks/useSimpleOrder';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

/**
 * 简化的OrderManager - 去掉SwipeableOrderCard依赖
 */
export const SimpleOrderManager: React.FC = () => {
  console.log('🔍 SimpleOrderManager 组件开始渲染');
  
  const [wechatUserInfo, setWechatUserInfo] = useState<WechatUserInfo | null>(null);

  useEffect(() => {
    try {
      console.log('🔍 SimpleOrderManager: 获取用户信息');
      const userInfo = WechatAuth.getUserInfo();
      console.log('🔍 SimpleOrderManager: 用户信息:', userInfo);
      if (userInfo) {
        setWechatUserInfo(userInfo);
      }
    } catch (error) {
      console.error('🚨 SimpleOrderManager: 获取用户信息出错:', error);
    }
  }, []);

  console.log('🔍 SimpleOrderManager: 调用 useCustomerOrders, openid:', wechatUserInfo?.openid);
  
  const { orders, loading, error, refetch } = useCustomerOrders(
    wechatUserInfo?.openid || null
  );
  
  console.log('🔍 SimpleOrderManager: useCustomerOrders 返回:', { 
    ordersCount: orders?.length || 0, 
    loading, 
    hasError: !!error 
  });
  
  if (error) {
    console.error('🚨 SimpleOrderManager: GraphQL 查询错误:', error);
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>加载订单中...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>订单加载失败: {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>我的订单</Text>
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>暂无订单</Text>
        </View>
      ) : (
        orders.map((order: any, index: number) => (
          <View key={order.id} style={styles.orderCard}>
            <Text style={styles.orderTitle}>
              {order.product?.name ? `${order.product.name}` : `订单 #${index + 1}`}
            </Text>
            <Text style={styles.orderInfo}>商品: {order.product?.name || '未知商品'}</Text>
            <Text style={styles.orderInfo}>店铺: {order.product?.boutique_id?.name || '未知店铺'}</Text>
            <Text style={styles.orderInfo}>价格: ¥{order.total_price || 0}</Text>
            <Text style={styles.orderInfo}>创建时间: {order.date_created ? new Date(order.date_created).toLocaleDateString() : '未知'}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#6c757d',
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6c757d',
    padding: 20,
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#e74c3c',
    padding: 20,
  },
  orderCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8,
  },
  orderInfo: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 4,
  },
});

export default SimpleOrderManager;