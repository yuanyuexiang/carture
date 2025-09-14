import React, { useState } from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useCustomerOrders, useOrderItems } from '../hooks/useSimpleOrder';
import { WechatAuth } from '../utils/wechat-auth';
interface OrderItemProps {
  order: {
    id: string;
    total_price?: number | null;
    status?: string | null;
    date_created?: string | null;
    boutique_id?: {
      id: string;
      name?: string | null;
    } | null;
  };
  onPress: () => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ order, onPress }) => {
  const getStatusText = (status: string | null | undefined) => {
    switch (status) {
      case 'pending': return '待支付';
      case 'paid': return '已支付';
      case 'shipped': return '已发货';
      case 'delivered': return '已送达';
      case 'cancelled': return '已取消';
      default: return '未知';
    }
  };

  const getStatusColor = (status: string | null | undefined) => {
    switch (status) {
      case 'pending': return '#ff9800';
      case 'paid': return '#4caf50';
      case 'shipped': return '#2196f3';
      case 'delivered': return '#4caf50';
      case 'cancelled': return '#f44336';
      default: return '#666';
    }
  };

  return (
    <TouchableOpacity style={styles.orderItem} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>订单号: {order.id.slice(-8)}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
          <Text style={styles.statusText}>{getStatusText(order.status)}</Text>
        </View>
      </View>
      
      <View style={styles.orderInfo}>
        {order.boutique_id?.name && (
          <Text style={styles.boutiqueName}>店铺: {order.boutique_id.name}</Text>
        )}
        <Text style={styles.orderPrice}>金额: ￥{order.total_price || 0}</Text>
        {order.date_created && (
          <Text style={styles.orderDate}>
            下单时间: {new Date(order.date_created).toLocaleDateString('zh-CN')}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

interface OrderManagerProps {
  userInfo: any; // WechatUserInfo类型
}

export const OrderManager: React.FC<OrderManagerProps> = ({ userInfo }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const {
    orders,
    loading: ordersLoading,
    error: ordersError,
    refetch
  } = useCustomerOrders(userInfo?.openid);

  const {
    orderItems,
    loading: itemsLoading
  } = useOrderItems(selectedOrderId);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (err) {
      console.error('刷新订单列表失败:', err);
    } finally {
      setRefreshing(false);
    }
  };

  const handleOrderPress = (orderId: string) => {
    setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
  };

  // 详细的用户状态检查
  if (!userInfo || !userInfo.openid) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.notLoggedInTitle}>需要登录</Text>
          <Text style={styles.notLoggedInSubtitle}>
            请先完成微信授权登录以查看您的订单
          </Text>
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => {
              if (WechatAuth.isWechatBrowser()) {
                WechatAuth.startAuth();
              } else {
                alert('请在微信中打开');
              }
            }}
          >
            <Text style={styles.loginButtonText}>立即登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // 检查授权是否过期
  if (WechatAuth.isAuthExpired(userInfo)) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyContainer}>
          <Text style={styles.notLoggedInTitle}>登录已过期</Text>
          <Text style={styles.notLoggedInSubtitle}>
            您的登录状态已过期，请重新登录
          </Text>
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => {
              WechatAuth.clearUserInfo();
              WechatAuth.startAuth();
            }}
          >
            <Text style={styles.loginButtonText}>重新登录</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>我的订单</Text>
        <Text style={styles.subtitle}>共 {orders.length} 个订单</Text>
      </View>

      {ordersLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ff6b35" />
          <Text style={styles.loadingText}>正在加载订单...</Text>
        </View>
      ) : ordersError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>加载失败: {ordersError.message}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={handleRefresh}>
            <Text style={styles.retryButtonText}>重试</Text>
          </TouchableOpacity>
        </View>
      ) : orders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>暂无订单</Text>
          <Text style={styles.emptySubtitle}>快去挑选心仪的商品吧～</Text>
        </View>
      ) : (
        <ScrollView
          style={styles.ordersList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          {orders.map((order) => (
            <View key={order.id}>
              <OrderItem
                order={order}
                onPress={() => handleOrderPress(order.id)}
              />
              
              {/* 订单详情展开区域 */}
              {selectedOrderId === order.id && (
                <View style={styles.orderDetails}>
                  <Text style={styles.detailsTitle}>订单详情</Text>
                  {itemsLoading ? (
                    <ActivityIndicator size="small" color="#ff6b35" />
                  ) : (
                    <View style={styles.itemsList}>
                      {orderItems.length === 0 ? (
                        <Text style={styles.noItemsText}>暂无商品信息</Text>
                      ) : (
                        orderItems.map((item, index) => (
                          <View key={index} style={styles.orderItemDetail}>
                            <Text style={styles.itemName}>
                              {item.product_id?.name || '未知商品'}
                            </Text>
                            <Text style={styles.itemInfo}>
                              数量: {item.quantity} × ￥{item.price}
                            </Text>
                          </View>
                        ))
                      )}
                    </View>
                  )}
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 14,
    color: '#f44336',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#ff6b35',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#666',
  },
  ordersList: {
    flex: 1,
  },
  orderItem: {
    backgroundColor: 'white',
    margin: 12,
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  orderId: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  orderInfo: {
    gap: 4,
  },
  boutiqueName: {
    fontSize: 12,
    color: '#666',
  },
  orderPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff6b35',
  },
  orderDate: {
    fontSize: 12,
    color: '#999',
  },
  orderDetails: {
    backgroundColor: '#f8f8f8',
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
    padding: 16,
  },
  detailsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  itemsList: {
    gap: 8,
  },
  noItemsText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    padding: 16,
  },
  orderItemDetail: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  itemInfo: {
    fontSize: 12,
    color: '#666',
  },
  notLoggedIn: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    margin: 32,
  },
  notLoggedInTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  notLoggedInSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  loginButton: {
    backgroundColor: '#ff6b35',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});