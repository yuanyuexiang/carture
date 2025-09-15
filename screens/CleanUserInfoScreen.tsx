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
  console.log('🔍 UserInfoScreen 组件开始渲染');
  
  const [userInfo, setUserInfo] = useState<WechatUserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const isWechatBrowser = WechatAuth.isWechatBrowser();
  console.log('🔍 isWechatBrowser:', isWechatBrowser);

  // 直接从localStorage读取用户信息
  useEffect(() => {
    try {
      console.log('🔍 UserInfoScreen: 开始加载用户信息');
      const localUserInfo = WechatAuth.getUserInfo();
      console.log('🔍 UserInfoScreen: 读取到的用户信息:', localUserInfo);
      
      setUserInfo(localUserInfo);
      setLoading(false);
    } catch (error) {
      console.error('🚨 UserInfoScreen: 加载用户信息错误:', error);
      setLoading(false);
    }
  }, []);

  console.log('🔍 UserInfoScreen 准备渲染，状态:', { 
    userInfo: userInfo ? '有用户信息' : '无用户信息', 
    loading, 
    isWechatBrowser 
  });

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
          <Text style={styles.headerTitle}>我的</Text>
        </View>

        {/* 用户信息 */}
        <View style={styles.mainContent}>
          {userInfo ? (
            <WechatUserCard
              userInfo={userInfo}
              onForceReauth={() => {
                console.log('CleanUserInfoScreen: forceReauth 被调用');
                // forceReauth();
              }}
              onClearAuth={() => {
                console.log('CleanUserInfoScreen: clearAuth 被调用');
                // clearAuth();
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
            <Text style={styles.sectionTitle}>我的订单</Text>
            <OrderManager />
          </View>
        )}
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  userCard: {
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
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  userInfo: {
    fontSize: 14,
    color: '#666',
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
  debugInfo: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
    textAlign: 'center',
    fontStyle: 'italic',
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
});

export default UserInfoScreen;