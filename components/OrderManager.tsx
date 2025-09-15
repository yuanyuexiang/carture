import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useCustomerOrders } from '../hooks/useSimpleOrder';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

interface OrderManagerProps {
  customerId?: string;
}

export const OrderManager: React.FC<OrderManagerProps> = () => {
  const [wechatUserInfo, setWechatUserInfo] = useState<WechatUserInfo | null>(null);

  useEffect(() => {
    const userInfo = WechatAuth.getUserInfo();
    if (userInfo) {
      setWechatUserInfo(userInfo);
    }
  }, []);

  const { orders, loading, error } = useCustomerOrders(
    wechatUserInfo?.openid || null
  );

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
        <Text style={styles.errorText}>订单加载失败</Text>
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
        orders.map((order: any) => (
          <View key={order.id} style={styles.orderCard}>
            <Text style={styles.orderId}>订单号: {order.id}</Text>
            <Text style={styles.totalPrice}>
              总价: ¥{(order.total_price || 0).toFixed(2)}
            </Text>
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
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },
  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 4,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
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
});

export default OrderManager;
