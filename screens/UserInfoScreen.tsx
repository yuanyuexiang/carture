import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WechatAuthStatus } from '../components/WechatAuthStatus';
import { WechatUserCard } from '../components/WechatUserCard';
import { useWechatAuth } from '../hooks/useWechatAuth';

/**
 * 用户信息页面
 * 集成微信授权，显示微信用户信息
 */
const UserInfoScreen: React.FC = () => {
  const {
    userInfo,
    loading,
    error,
    isAuthorized,
    isWechatBrowser,
    startAuth,
    forceReauth,
    clearAuth,
  } = useWechatAuth();

  // 重试授权
  const handleRetry = () => {
    if (error) {
      // 如果有错误，先清除然后重新开始
      clearAuth();
      startAuth();
    }
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

        {/* 微信授权状态或用户信息 */}
        <View style={styles.mainContent}>
          {isAuthorized && userInfo ? (
            // 显示微信用户信息
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
            // 显示授权状态
            <WechatAuthStatus
              loading={loading}
              error={error}
              isWechatBrowser={isWechatBrowser}
              isAuthorized={isAuthorized}
              onStartAuth={startAuth}
              onRetry={handleRetry}
            />
          )}
        </View>

        {/* 附加信息 */}
        {isAuthorized && userInfo && (
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

        {/* 调试信息（开发模式） */}
        {__DEV__ && (
          <View style={styles.debugInfo}>
            <Text style={styles.debugTitle}>调试信息</Text>
            <Text style={styles.debugText}>
              微信浏览器: {isWechatBrowser ? '是' : '否'}
            </Text>
            <Text style={styles.debugText}>
              授权状态: {isAuthorized ? '已授权' : '未授权'}
            </Text>
            <Text style={styles.debugText}>
              加载状态: {loading ? '加载中' : '完成'}
            </Text>
            {error && (
              <Text style={styles.debugError}>
                错误: {error}
              </Text>
            )}
            
            {/* 调试按钮 */}
            <View style={styles.debugButtons}>
              <TouchableOpacity 
                style={styles.debugButton} 
                onPress={() => {
                  console.log('直接调用 clearAuth');
                  clearAuth();
                }}
              >
                <Text style={styles.debugButtonText}>直接清除授权</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.debugButton} 
                onPress={() => {
                  console.log('直接调用 forceReauth');
                  forceReauth();
                }}
              >
                <Text style={styles.debugButtonText}>直接重新授权</Text>
              </TouchableOpacity>
            </View>
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
  debugInfo: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginTop: 16,
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  debugText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
    marginBottom: 2,
  },
  debugError: {
    fontSize: 12,
    color: '#e64340',
    lineHeight: 16,
    marginTop: 4,
  },
  debugButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  debugButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    minWidth: 80,
    alignItems: 'center',
  },
  debugButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default UserInfoScreen;
