import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * 简化的OrderManager - 用于调试
 * 不使用任何GraphQL查询，只显示基本信息
 */
export const MinimalOrderManager: React.FC = () => {
  console.log('🔍 MinimalOrderManager 开始渲染');
  
  try {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>订单管理</Text>
        <Text style={styles.message}>这是简化版本的订单管理组件</Text>
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