import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCustomerOrders } from '../hooks/useSimpleOrder';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

/**
 * 简化的OrderManager - 用于调试
 * 修正了无限重新渲染的问题
 */
export const MinimalOrderManager: React.FC = () => {
  console.log('🔍 MinimalOrderManager 开始渲染');
  
  const [userInfo, setUserInfo] = useState<WechatUserInfo | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('初始化中...');
  const [hookStatus, setHookStatus] = useState<string>('未调用');
  const [errorDetails, setErrorDetails] = useState<string>('无错误');

  // 获取用户信息
  useEffect(() => {
    try {
      console.log('🔍 MinimalOrderManager: 尝试获取用户信息');
      const wechatUserInfo = WechatAuth.getUserInfo();
      console.log('🔍 MinimalOrderManager: 获取到的用户信息:', wechatUserInfo);
      
      setUserInfo(wechatUserInfo);
      setDebugInfo(`用户信息获取${wechatUserInfo ? '成功' : '失败'}`);
    } catch (error) {
      console.error('🚨 MinimalOrderManager: 获取用户信息错误:', error);
      setDebugInfo(`获取用户信息错误: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, []);

  // GraphQL hook调用 - 这里不能在条件语句中调用
  const hookResult = useCustomerOrders(userInfo?.openid || null);
  const { orders, loading, error } = hookResult;

  // 处理hook结果 - 在useEffect中更新状态，避免无限重新渲染
  useEffect(() => {
    console.log('🔍 MinimalOrderManager: hook结果更新:', {
      orders: orders?.length || 0,
      loading,
      error: error?.message || 'no error'
    });
    
    try {
      setHookStatus('修正字段后调用成功');
      
      if (error) {
        console.error('🚨 MinimalOrderManager: GraphQL错误:', error);
        let errorMsg = `GraphQL错误: ${error.message}`;
        
        // 如果有网络错误
        if (error.networkError) {
          console.error('🚨 网络错误详情:', error.networkError);
          errorMsg += ` | 网络错误: ${error.networkError.message}`;
        }
        
        // 如果有GraphQL错误
        if (error.graphQLErrors?.length > 0) {
          console.error('🚨 GraphQL错误详情:', error.graphQLErrors);
          const gqlErrors = error.graphQLErrors.map(e => e.message).join(', ');
          errorMsg += ` | GQL错误: ${gqlErrors}`;
        }
        
        setErrorDetails(errorMsg);
      } else {
        setErrorDetails('无错误');
      }
    } catch (hookError) {
      console.error('🚨 MinimalOrderManager: hook处理异常:', hookError);
      const errorMsg = hookError instanceof Error ? hookError.message : String(hookError);
      setHookStatus(`修正字段后处理失败: ${errorMsg}`);
      setErrorDetails(`Hook处理异常: ${errorMsg}`);
    }
  }, [orders, loading, error]); // 只依赖hook的返回值

  try {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>订单管理 (步骤5: 修正无限渲染)</Text>
        <Text style={styles.message}>这是简化版本的订单管理组件</Text>
        <Text style={styles.debug}>调试: {debugInfo}</Text>
        <Text style={styles.debug}>Hook状态: {hookStatus}</Text>
        <Text style={styles.debug}>OpenID: {userInfo?.openid || '未获取到'}</Text>
        <Text style={styles.debug}>订单数量: {orders?.length || '未获取'}</Text>
        <Text style={styles.debug}>加载中: {String(loading)}</Text>
        <Text style={styles.debug}>错误详情: {errorDetails}</Text>
        <Text style={styles.debug}>如果看到这个，说明组件渲染正常</Text>
      </View>
    );
  } catch (renderError) {
    console.error('🚨 MinimalOrderManager 渲染错误:', renderError);
    return (
      <View style={styles.container}>
        <Text style={styles.error}>订单管理渲染错误: {String(renderError)}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  debug: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  error: {
    fontSize: 14,
    color: 'red',
  },
});

export default MinimalOrderManager;