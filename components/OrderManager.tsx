import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useCustomerOrders, useSimpleOrder } from '../hooks/useSimpleOrder';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';
import { SwipeableOrderCard } from './SwipeableOrderCard';

interface OrderManagerProps {
  customerId?: string;
}

export const OrderManager: React.FC<OrderManagerProps> = () => {
  const [wechatUserInfo, setWechatUserInfo] = useState<WechatUserInfo | null>(null);
  const [deletingOrders, setDeletingOrders] = useState<Set<string>>(new Set());

  // 获取删除订单的hook
  const { deleteOrder } = useSimpleOrder();

  useEffect(() => {
    const userInfo = WechatAuth.getUserInfo();
    if (userInfo) {
      setWechatUserInfo(userInfo);
    }
  }, []);

  const { orders, loading, error, refetch } = useCustomerOrders(
    wechatUserInfo?.openid || null
  );

  // 处理删除订单
  const handleDeleteOrder = async (orderId: string) => {
    console.log('🗑️ OrderManager: 删除订单', orderId);
    console.log('🗑️ OrderManager: 订单ID类型:', typeof orderId);
    
    // 标记这个订单正在删除中
    setDeletingOrders(prev => new Set(prev).add(orderId));

    try {
      console.log('🗑️ OrderManager: 调用 deleteOrder hook');
      const result = await deleteOrder(orderId);
      console.log('🗑️ OrderManager: deleteOrder 返回结果:', result);
      
      if (result.success) {
        // 删除成功，刷新订单列表
        console.log('✅ 订单删除成功，刷新列表');
        refetch();
        
        // Web 环境使用 alert，移动端使用 Alert.alert
        if (typeof window !== 'undefined') {
          alert('订单删除成功');
        } else {
          Alert.alert('成功', '订单删除成功');
        }
      } else {
        console.error('❌ 删除失败:', result.message);
        if (typeof window !== 'undefined') {
          alert('删除失败: ' + (result.message || '删除订单时发生错误'));
        } else {
          Alert.alert('删除失败', result.message || '删除订单时发生错误');
        }
      }
    } catch (err) {
      console.error('❌ 删除订单异常:', err);
      // 打印更详细的错误信息
      if (err instanceof Error) {
        console.error('错误消息:', err.message);
        console.error('错误堆栈:', err.stack);
      }
      
      if (typeof window !== 'undefined') {
        alert('删除失败: 删除订单时发生错误');
      } else {
        Alert.alert('删除失败', '删除订单时发生错误');
      }
    } finally {
      // 移除删除中状态
      setDeletingOrders(prev => {
        const newSet = new Set(prev);
        newSet.delete(orderId);
        return newSet;
      });
    }
  };

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
          <SwipeableOrderCard
            key={order.id}
            order={order}
            onDelete={handleDeleteOrder}
            deleting={deletingOrders.has(order.id)}
          />
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
});

export default OrderManager;
