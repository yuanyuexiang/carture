import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { OrderManager } from '../components/OrderManager';
import { WechatUserCard } from '../components/WechatUserCard';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

/**
 * 用户信息页面
 * 显示已授权的微信用户信息和操作选项
 */
const UserInfoScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState<WechatUserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const isWechatBrowser = WechatAuth.isWechatBrowser();

  // 直接从localStorage读取用户信息
  useEffect(() => {
    const loadUserInfo = () => {
      console.log('=== 直接从localStorage读取用户信息 ===');
      const localUserInfo = WechatAuth.getUserInfo();
      console.log('读取到的用户信息:', localUserInfo);
      
      setUserInfo(localUserInfo);
      setLoading(false);
    };

    loadUserInfo();

    // 监听localStorage变化
    const handleStorageChange = () => {
      console.log('监听到localStorage变化，重新读取');
      loadUserInfo();
    };

    // 监听自定义事件
    window.addEventListener('wechatAuthUpdated', handleStorageChange);
    
    return () => {
      window.removeEventListener('wechatAuthUpdated', handleStorageChange);
    };
  }, []);

  // 强制重新授权
  const forceReauth = () => {
    console.log('强制重新授权');
    WechatAuth.clearUserInfo();
    setUserInfo(null);
    if (isWechatBrowser) {
      WechatAuth.startAuth();
    }
  };

  // 清除授权信息
  const clearAuth = () => {
    console.log('清除授权信息');
    WechatAuth.clearUserInfo();
    setUserInfo(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 页面标题 */}
        <View style={styles.header}>
          <Text style={styles.title}>我的</Text>
          <Text style={styles.subtitle}>个人信息与设置</Text>
        </View>

        {/* 用户信息 */}
        <View style={styles.mainContent}>
          {/* 简化逻辑：直接根据userInfo显示 */}
          {userInfo ? (
            <WechatUserCard
              userInfo={userInfo}
              onForceReauth={() => {
                console.log('UserInfoScreen: forceReauth 被调用');
                forceReauth();
              }}
              onClearAuth={() => {
                console.log('UserInfoScreen: clearAuth 被调用');
                clearAuth();
              }}
            />
          ) : (
            <View style={styles.fallbackContainer}>
              <Text style={styles.fallbackTitle}>用户信息</Text>
              <Text style={styles.fallbackText}>
                {!isWechatBrowser 
                  ? '请在微信中打开以获取完整功能' 
                  : loading ? '用户信息加载中...' : '请完成微信授权以查看用户信息'}
              </Text>
              {!userInfo && isWechatBrowser && !loading && (
                <Text style={styles.debugInfo}>
                  调试信息：userInfo={userInfo ? 'exist' : 'null'}, loading={String(loading)}
                </Text>
              )}
            </View>
          )}
        </View>

        {/* 订单管理 */}
        {userInfo && (
          <View style={styles.orderSection}>
            <OrderManager />
          </View>
        )}

        {/* 附加信息 */}
        {userInfo && (
          <View style={styles.additionalInfo}>
            <Text style={styles.infoTitle}>关于微信授权</Text>
            <Text style={styles.infoText}>
              • 授权信息有效期为24小时
            </Text>
            <Text style={styles.infoText}>
              • 过期后需要重新授权
            </Text>
            <Text style={styles.infoText}>
              • 我们仅获取基本信息用于显示
            </Text>
            <Text style={styles.infoText}>
              • 您可以随时清除授权信息
            </Text>
          </View>
        )}

        {/* 其他功能选项 */}
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsTitle}>其他功能</Text>
          
          <View style={styles.optionItem}>
            <Text style={styles.optionLabel}>设置</Text>
            <Text style={styles.optionValue}>应用设置和偏好</Text>
          </View>
          
          <View style={styles.optionItem}>
            <Text style={styles.optionLabel}>帮助</Text>
            <Text style={styles.optionValue}>常见问题和支持</Text>
          </View>
          
          <View style={styles.optionItem}>
            <Text style={styles.optionLabel}>关于</Text>
            <Text style={styles.optionValue}>版本信息和条款</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  orderSection: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fallbackContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fallbackTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  fallbackText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  additionalInfo: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 4,
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    padding: 16,
    paddingBottom: 8,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  optionLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  optionValue: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    textAlign: 'right',
    marginLeft: 16,
  },
  debugInfo: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default UserInfoScreen;
