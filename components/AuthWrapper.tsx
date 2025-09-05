import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useWechatAuth } from '../hooks/useWechatAuth';
import { WechatAuthStatus } from './WechatAuthStatus';

interface AuthWrapperProps {
  children: React.ReactNode;
}

/**
 * 授权包装器组件
 * 在应用启动时检查微信授权，只有授权成功后才显示子组件
 */
export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const {
    userInfo,
    loading,
    error,
    isAuthorized,
    isWechatBrowser,
    startAuth,
    clearAuth,
  } = useWechatAuth();

  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    console.log('=== AuthWrapper 状态检查 ===');
    console.log('isWechatBrowser:', isWechatBrowser);
    console.log('loading:', loading);
    console.log('isAuthorized:', isAuthorized);
    console.log('userInfo:', userInfo);
    
    // 如果不在微信浏览器中，直接显示子组件（主界面）
    if (!isWechatBrowser) {
      console.log('非微信环境，直接进入主界面');
      setInitializing(false);
      return;
    }

    // 在微信浏览器中，等待授权初始化完成
    if (!loading) {
      console.log('授权检查完成，initializing设为false');
      setInitializing(false);
    }
  }, [loading, isWechatBrowser, isAuthorized, userInfo]);

  // 重试授权
  const handleRetry = () => {
    if (error) {
      clearAuth();
      startAuth();
    }
  };

  // 如果还在初始化，显示加载状态
  if (initializing) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ff6b35" />
          <Text style={styles.loadingText}>正在检查授权状态...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // 关键逻辑：只有在微信浏览器中且未授权时才显示授权界面
  // 其他情况（非微信环境 或 已授权）都直接进入主界面
  if (!isWechatBrowser || isAuthorized) {
    console.log('进入主界面 - 微信环境:', isWechatBrowser, '已授权:', isAuthorized);
    return <>{children}</>;
  }

  // 在微信浏览器中但未授权，显示授权界面
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      
      <View style={styles.authContainer}>
        {/* 应用标题 */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>Carture</Text>
          <Text style={styles.appSubtitle}>时尚精品男装</Text>
        </View>

        {/* 授权提示 */}
        <View style={styles.authContent}>
          <Text style={styles.authPrompt}>为了提供个性化服务</Text>
          <Text style={styles.authSubtext}>需要获取您的微信基本信息</Text>
          
          <WechatAuthStatus
            loading={loading}
            error={error}
            isWechatBrowser={isWechatBrowser}
            isAuthorized={isAuthorized}
            onStartAuth={startAuth}
            onRetry={handleRetry}
          />
        </View>

        {/* 底部说明 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            点击"开始微信授权"按钮即表示您同意我们获取您的基本信息用于个性化服务
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginTop: 60,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6b35',
    marginBottom: 8,
  },
  appSubtitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  authContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authPrompt: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  authSubtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
  },
});
