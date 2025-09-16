import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCustomerOrders, useSimpleOrder } from '../hooks/useSimpleOrder';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';
// import { SwipeableOrderCard } from './SwipeableOrderCard'; // 暂时注释掉，这个组件可能有问题

interface OrderManagerProps {
  customerId?: string;
}

export const OrderManager: React.FC<OrderManagerProps> = () => {
  console.log('🔍 OrderManager 组件开始渲染');
  
  const [wechatUserInfo, setWechatUserInfo] = useState<WechatUserInfo | null>(null);
  const [deletingOrders, setDeletingOrders] = useState<Set<string>>(new Set());

  // 获取删除订单的hook
  const { deleteOrder } = useSimpleOrder();

  useEffect(() => {
    try {
      console.log('🔍 OrderManager: 获取用户信息');
      const userInfo = WechatAuth.getUserInfo();
      console.log('🔍 OrderManager: 用户信息:', userInfo);
      if (userInfo) {
        setWechatUserInfo(userInfo);
      }
    } catch (error) {
      console.error('🚨 OrderManager: 获取用户信息出错:', error);
    }
  }, []);

  console.log('🔍 OrderManager: 调用 useCustomerOrders, openid:', wechatUserInfo?.openid);
  
  const { orders, loading, error, refetch } = useCustomerOrders(
    wechatUserInfo?.openid || null
  );
  
  console.log('🔍 OrderManager: useCustomerOrders 返回:', { 
    ordersCount: orders?.length || 0, 
    loading, 
    hasError: !!error 
  });
  
  if (error) {
    console.error('🚨 OrderManager: GraphQL 查询错误:', error);
  }

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
        // 删除成功不再显示弹窗提示，用户通过订单消失就能知道删除成功
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
      {orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>暂无订单</Text>
        </View>
      ) : (
        orders.map((order: any, index: number) => (
          <View key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderTitle}>订单 #{index + 1}</Text>
              <TouchableOpacity 
                style={styles.deleteButton}
                onPress={() => handleDeleteOrder(order.id)}
                disabled={deletingOrders.has(order.id)}
              >
                <Text style={styles.deleteButtonText}>
                  {deletingOrders.has(order.id) ? '删除中...' : '删除'}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.orderInfo}>订单ID: {order.id}</Text>
            <Text style={styles.orderInfo}>价格: ¥{order.total_price || 0}</Text>
            <Text style={styles.orderInfo}>状态: {order.status || '未知'}</Text>
            <Text style={styles.orderInfo}>创建时间: {order.date_created || '未知'}</Text>
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
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  orderInfo: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 4,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default OrderManager;
