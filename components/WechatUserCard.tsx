import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WechatUserInfo } from '../utils/wechat-auth';

interface WechatUserCardProps {
  userInfo: WechatUserInfo;
  onForceReauth?: () => void;
  onClearAuth?: () => void;
}

/**
 * 微信用户信息卡片组件
 */
export const WechatUserCard: React.FC<WechatUserCardProps> = ({
  userInfo,
  onForceReauth,
  onClearAuth,
}) => {
  // 控制开发者按钮显示/隐藏的状态
  const [showDevButtons, setShowDevButtons] = useState(false);
  
  // 双击计数器和定时器
  const [tapCount, setTapCount] = useState(0);
  const [tapTimer, setTapTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  // 处理登录时间的双击事件
  const handleLoginTimeTap = () => {
    console.log('登录时间被点击，当前tapCount:', tapCount);
    
    // 清除之前的定时器
    if (tapTimer) {
      clearTimeout(tapTimer);
      setTapTimer(null);
    }
    
    const newTapCount = tapCount + 1;
    setTapCount(newTapCount);
    
    if (newTapCount === 2) {
      // 双击检测到，切换开发者按钮显示状态
      setShowDevButtons(!showDevButtons);
      console.log('双击检测到，开发者按钮显示状态:', !showDevButtons);
      setTapCount(0); // 重置计数器
    } else {
      // 设置定时器，300ms后重置计数器
      const timer = setTimeout(() => {
        setTapCount(0);
      }, 300);
      setTapTimer(timer);
    }
  };

  // 性别转换
  const getSexText = (sex: number): string => {
    switch (sex) {
      case 1: return '男';
      case 2: return '女';
      default: return '未知';
    }
  };

  // 格式化登录时间
  const formatLoginTime = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('zh-CN');
  };

  // 处理头像加载错误
  const handleImageError = () => {
    console.warn('微信头像加载失败');
  };

  // 确认重新授权
  const handleForceReauth = () => {
    // 在Web环境中使用window.confirm，在原生环境中使用Alert.alert
    if (typeof window !== 'undefined') {
      // Web环境
      const confirmed = window.confirm('确定要重新获取微信授权吗？');
      if (confirmed && onForceReauth) {
        console.log('用户确认重新授权');
        onForceReauth();
      }
    } else {
      // 原生环境
      Alert.alert(
        '重新授权',
        '确定要重新获取微信授权吗？',
        [
          { text: '取消', style: 'cancel' },
          { text: '确定', onPress: onForceReauth },
        ]
      );
    }
  };

  // 确认清除授权
  const handleClearAuth = () => {
    // 在Web环境中使用window.confirm，在原生环境中使用Alert.alert
    if (typeof window !== 'undefined') {
      // Web环境
      const confirmed = window.confirm('确定要清除微信授权信息吗？');
      if (confirmed && onClearAuth) {
        console.log('用户确认清除授权');
        onClearAuth();
      }
    } else {
      // 原生环境
      Alert.alert(
        '清除授权',
        '确定要清除微信授权信息吗？',
        [
          { text: '取消', style: 'cancel' },
          { text: '确定', onPress: onClearAuth },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* 用户基本信息 */}
      <View style={styles.userSection}>
        <Image
          source={{ uri: userInfo.headimgurl }}
          style={styles.avatar}
          onError={handleImageError}
        />
        <View style={styles.userDetails}>
          <Text style={styles.nickname}>{userInfo.nickname}</Text>
          <Text style={styles.info}>性别：{getSexText(userInfo.sex)}</Text>
          {userInfo.province && userInfo.city && (
            <Text style={styles.info}>
              地区：{userInfo.province} {userInfo.city}
            </Text>
          )}
        </View>
      </View>

      {/* 详细信息 */}
      <View style={styles.detailsSection}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>OpenID:</Text>
          <Text style={styles.detailValue} numberOfLines={1}>
            {userInfo.openid}
          </Text>
        </View>
        
        <TouchableOpacity style={styles.detailRow} onPress={handleLoginTimeTap}>
          <Text style={styles.detailLabel}>登录时间:</Text>
          <Text style={styles.detailValue}>
            {formatLoginTime(userInfo.login_time)}
          </Text>
        </TouchableOpacity>

        {userInfo.expires_at && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>过期时间:</Text>
            <Text style={styles.detailValue}>
              {formatLoginTime(userInfo.expires_at)}
            </Text>
          </View>
        )}

        {userInfo.language && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>语言:</Text>
            <Text style={styles.detailValue}>{userInfo.language}</Text>
          </View>
        )}

        {userInfo.country && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>国家:</Text>
            <Text style={styles.detailValue}>{userInfo.country}</Text>
          </View>
        )}
      </View>

      {/* 开发者操作按钮 - 只在双击登录时间后显示 */}
      {showDevButtons && (
        <View style={styles.actionsSection}>
          <Text style={styles.devModeText}>🔧 开发者模式</Text>
          <View style={styles.actionButtonsRow}>
            {onForceReauth && (
              <TouchableOpacity 
                style={[styles.actionButton, styles.reauthButton]}
                onPress={() => {
                  console.log('重新授权按钮被点击');
                  handleForceReauth();
                }}
                activeOpacity={0.7}
              >
                <Text style={styles.reauthButtonText}>重新授权</Text>
              </TouchableOpacity>
            )}

            {onClearAuth && (
              <TouchableOpacity 
                style={[styles.actionButton, styles.clearButton]}
                onPress={() => {
                  console.log('清除授权按钮被点击');
                  handleClearAuth();
                }}
                activeOpacity={0.7}
              >
                <Text style={styles.clearButtonText}>清除授权</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
    backgroundColor: '#f0f0f0',
  },
  userDetails: {
    flex: 1,
  },
  nickname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  detailsSection: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 16,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    minWidth: 80,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  actionsSection: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 16,
  },
  devModeText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 12,
    fontStyle: 'italic',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    minWidth: 100,
    alignItems: 'center',
  },
  reauthButton: {
    backgroundColor: '#1aad19',
  },
  reauthButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  clearButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e64340',
  },
  clearButtonText: {
    color: '#e64340',
    fontSize: 14,
    fontWeight: '500',
  },
});
