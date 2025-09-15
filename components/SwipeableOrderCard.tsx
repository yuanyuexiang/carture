import React, { useState } from 'react';
import {
    Alert,
    Animated,
    Dimensions,
    PanResponder,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SWIPE_THRESHOLD = -100; // 左滑多少像素显示删除按钮
const DELETE_BUTTON_WIDTH = 80;

interface OrderData {
  id: string;
  total_price: number;
  status?: string;
  date_created?: string;
  // 其他订单字段...
}

interface SwipeableOrderCardProps {
  order: OrderData;
  onDelete: (orderId: string) => void;
  deleting?: boolean;
}

export const SwipeableOrderCard: React.FC<SwipeableOrderCardProps> = ({
  order,
  onDelete,
  deleting = false
}) => {
  const colorScheme = useColorScheme();
  const [translateX] = useState(new Animated.Value(0));
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  // 创建滑动手势处理器
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      // 只有水平滑动才响应
      return Math.abs(gestureState.dx) > Math.abs(gestureState.dy) && Math.abs(gestureState.dx) > 10;
    },
    onPanResponderMove: (_, gestureState) => {
      // 只允许左滑（负值），限制滑动距离
      const newTranslateX = Math.max(Math.min(gestureState.dx, 0), -DELETE_BUTTON_WIDTH);
      translateX.setValue(newTranslateX);
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < SWIPE_THRESHOLD) {
        // 滑动距离超过阈值，显示删除按钮
        Animated.spring(translateX, {
          toValue: -DELETE_BUTTON_WIDTH,
          useNativeDriver: true,
        }).start();
        setShowDeleteButton(true);
      } else {
        // 滑动距离不够，回弹到原位
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
        setShowDeleteButton(false);
      }
    },
  });

  // 处理删除确认
  const handleDeletePress = () => {
    Alert.alert(
      '确认删除',
      '确定要删除这个订单吗？',
      [
        {
          text: '取消',
          style: 'cancel',
          onPress: () => {
            // 收回删除按钮
            Animated.spring(translateX, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
            setShowDeleteButton(false);
          }
        },
        {
          text: '删除',
          style: 'destructive',
          onPress: () => {
            onDelete(order.id);
            // 删除动画
            Animated.timing(translateX, {
              toValue: -SCREEN_WIDTH,
              duration: 300,
              useNativeDriver: true,
            }).start();
          }
        }
      ]
    );
  };

  // 格式化价格显示
  const formatPrice = (price: number) => {
    return `¥${price.toFixed(2)}`;
  };

  // 格式化状态显示
  const formatStatus = (status?: string) => {
    const statusMap: Record<string, string> = {
      pending: '待处理',
      confirmed: '已确认', 
      shipped: '已发货',
      delivered: '已送达',
      cancelled: '已取消'
    };
    return statusMap[status || 'pending'] || '未知状态';
  };

  // 格式化日期显示
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <View style={styles.container}>
      {/* 删除按钮背景 */}
      {showDeleteButton && (
        <View style={[styles.deleteBackground, { backgroundColor: '#ff4444' }]}>
          <TouchableOpacity 
            style={styles.deleteButton}
            onPress={handleDeletePress}
            disabled={deleting}
          >
            <Text style={styles.deleteText}>
              {deleting ? '删除中...' : '删除'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 主卡片内容 */}
      <Animated.View
        style={[
          styles.card,
          { transform: [{ translateX }] }
        ]}
        {...panResponder.panHandlers}
      >
        <ThemedView style={[
          styles.cardContent,
          { backgroundColor: Colors[colorScheme ?? 'light'].background }
        ]}>
          <View style={styles.orderHeader}>
            <ThemedText style={styles.orderTitle}>
              订单 #{order.id.substring(0, 8)}
            </ThemedText>
            <ThemedText style={styles.orderPrice}>
              {formatPrice(order.total_price)}
            </ThemedText>
          </View>
          
          <View style={styles.orderDetails}>
            <ThemedText style={styles.orderStatus}>
              状态: {formatStatus(order.status)}
            </ThemedText>
            {order.date_created && (
              <ThemedText style={styles.orderDate}>
                {formatDate(order.date_created)}
              </ThemedText>
            )}
          </View>
        </ThemedView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: 4,
    marginHorizontal: 16,
  },
  deleteBackground: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: DELETE_BUTTON_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  deleteButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'transparent',
  },
  cardContent: {
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  orderPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6b35',
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderStatus: {
    fontSize: 14,
    opacity: 0.7,
  },
  orderDate: {
    fontSize: 12,
    opacity: 0.5,
  },
});