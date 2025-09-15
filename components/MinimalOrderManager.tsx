import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

/**
 * 简化的OrderManager - 用于调试
 * 不使用任何GraphQL查询，只显示基本信息
 */
export const MinimalOrderManager: React.FC = () => {
  console.log('🔍 MinimalOrderManager 开始渲染');
  
  const [userInfo, setUserInfo] = useState<WechatUserInfo | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>('初始化中...');

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
        <Text style={styles.title}>订单管理 (步骤1: 用户信息)</Text>
        <Text style={styles.message}>这是简化版本的订单管理组件</Text>
        <Text style={styles.debug}>调试: {debugInfo}</Text>
        <Text style={styles.debug}>OpenID: {userInfo?.openid || '未获取到'}</Text>
        <Text style={styles.debug}>如果你看到这个，说明基础渲染没问题</Text>
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