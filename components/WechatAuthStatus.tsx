import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface WechatAuthStatusProps {
  /** 是否正在加载 */
  loading: boolean;
  /** 错误信息 */
  error: string | null;
  /** 是否在微信浏览器中 */
  isWechatBrowser: boolean;
  /** 是否已授权 */
  isAuthorized: boolean;
  /** 开始授权 */
  onStartAuth: () => void;
  /** 重试 */
  onRetry?: () => void;
}

/**
 * 微信授权状态组件
 * 显示不同授权状态下的UI
 */
export const WechatAuthStatus: React.FC<WechatAuthStatusProps> = ({
  loading,
  error,
  isWechatBrowser,
  isAuthorized,
  onStartAuth,
  onRetry,
}) => {
  // 加载状态
  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingSection}>
          <ActivityIndicator size="large" color="#1aad19" />
          <Text style={styles.loadingText}>正在检查授权状态...</Text>
        </View>
      </View>
    );
  }

  // 错误状态
  if (error) {
    return (
      <View style={styles.container}>
        <View style={styles.errorSection}>
          <Text style={styles.errorIcon}>⚠️</Text>
          <Text style={styles.errorTitle}>授权失败</Text>
          <Text style={styles.errorMessage}>{error}</Text>
          {onRetry && (
            <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
              <Text style={styles.retryButtonText}>重试</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }

  // 非微信浏览器
  if (!isWechatBrowser) {
    return (
      <View style={styles.container}>
        <View style={styles.warningSection}>
          <Text style={styles.warningIcon}>📱</Text>
          <Text style={styles.warningTitle}>请在微信中打开</Text>
          <Text style={styles.warningMessage}>
            该功能需要在微信浏览器中使用，请在微信中打开此页面
          </Text>
        </View>
      </View>
    );
  }

  // 未授权状态
  if (!isAuthorized) {
    return (
      <View style={styles.container}>
        <View style={styles.authSection}>
          <Text style={styles.authIcon}>🔐</Text>
          <Text style={styles.authTitle}>微信授权登录</Text>
          <Text style={styles.authMessage}>
            需要获取您的微信用户信息以提供个性化服务
          </Text>
          <TouchableOpacity style={styles.authButton} onPress={onStartAuth}>
            <Text style={styles.authButtonText}>开始微信授权</Text>
          </TouchableOpacity>
          
          <View style={styles.authTips}>
            <Text style={styles.tipsTitle}>授权说明：</Text>
            <Text style={styles.tipsText}>• 获取您的微信昵称和头像</Text>
            <Text style={styles.tipsText}>• 用于个人资料显示</Text>
            <Text style={styles.tipsText}>• 我们不会存储您的敏感信息</Text>
          </View>
        </View>
      </View>
    );
  }

  // 已授权状态（这个组件通常不会显示这个状态，因为会显示用户信息）
  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loadingSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  errorIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e64340',
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#e64340',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 6,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  warningSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  warningIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fa9d3b',
    marginBottom: 8,
  },
  warningMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  authSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  authIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  authTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  authMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  authButton: {
    backgroundColor: '#1aad19',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 24,
  },
  authButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  authTips: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 8,
    width: '100%',
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  tipsText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
    marginBottom: 4,
  },
});
