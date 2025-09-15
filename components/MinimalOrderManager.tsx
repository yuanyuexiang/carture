import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

// 步骤2: 添加GraphQL相关导入 - 测试这是否导致崩溃
try {
  console.log('🔍 MinimalOrderManager: 尝试导入GraphQL相关模块');
  // import { useCustomerOrders } from '../hooks/useSimpleOrder';
  console.log('🔍 MinimalOrderManager: GraphQL导入成功(仅测试)');
} catch (error) {
  console.error('🚨 MinimalOrderManager: GraphQL导入失败:', error);
}

// 步骤2.5: 使用安全版本的GraphQL hook进行测试
import { useCustomerOrdersSafe } from '../hooks/useCustomerOrdersSafe';

/**
 * 简化的OrderManager - 用于调试
 * 不使用任何GraphQL查询，只显示基本信息
 */
export const MinimalOrderManager: React.FC = () => {
  console.log('🔍 MinimalOrderManager 开始渲染');
  
  const [userInfo, setUserInfo] = useState<WechatUserInfo | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('初始化中...');
  const [hookStatus, setHookStatus] = useState<string>('未调用');

  // 步骤4: 使用安全版本的hook测试GraphQL查询问题
  let orders, loading, error;
  try {
    console.log('🔍 MinimalOrderManager: 准备调用useCustomerOrdersSafe hook');
    const hookResult = useCustomerOrdersSafe(userInfo?.openid || null);
    orders = hookResult.orders;
    loading = hookResult.loading;
    error = hookResult.error;
    console.log('🔍 MinimalOrderManager: useCustomerOrdersSafe调用成功');
    setHookStatus('安全版本调用成功');
  } catch (hookError) {
    console.error('🚨 MinimalOrderManager: useCustomerOrdersSafe调用失败:', hookError);
    setHookStatus(`安全版本调用失败: ${hookError instanceof Error ? hookError.message : String(hookError)}`);
  }

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
  
  try {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>订单管理 (步骤4: 安全Hook测试)</Text>
        <Text style={styles.message}>这是简化版本的订单管理组件</Text>
        <Text style={styles.debug}>调试: {debugInfo}</Text>
        <Text style={styles.debug}>Hook状态: {hookStatus}</Text>
        <Text style={styles.debug}>OpenID: {userInfo?.openid || '未获取到'}</Text>
        <Text style={styles.debug}>订单数量: {orders?.length || '未获取'}</Text>
        <Text style={styles.debug}>加载中: {String(loading)}</Text>
        <Text style={styles.debug}>如果看到这个，说明Hook调用没问题</Text>
      </View>
    );
  } catch (error) {
    console.error('🚨 MinimalOrderManager 渲染错误:', error);
    return (
      <View style={styles.container}>
        <Text style={styles.error}>订单管理渲染错误: {String(error)}</Text>
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