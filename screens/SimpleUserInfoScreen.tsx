import React, { useEffect, useState } from 'react';
import {
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * 简化版用户信息页面 - 用于调试
 * 移除所有复杂逻辑，只显示基本信息
 */
const SimpleUserInfoScreen: React.FC = () => {
  console.log('🔥 SimpleUserInfoScreen 开始渲染');
  
  const [debugInfo, setDebugInfo] = useState<string>('初始状态');
  const [errorInfo, setErrorInfo] = useState<string | null>(null);

  useEffect(() => {
    console.log('🔥 SimpleUserInfoScreen useEffect 触发');
    try {
      setDebugInfo('useEffect 执行成功');
      
      // 测试基本的存储功能
      const testKey = 'simple_test';
      const testValue = 'test_success';
      
      if (typeof window !== 'undefined' && window.localStorage) {
        console.log('🔥 localStorage 可用');
        localStorage.setItem(testKey, testValue);
        const retrieved = localStorage.getItem(testKey);
        console.log('🔥 localStorage 测试:', retrieved === testValue ? '成功' : '失败');
      } else {
        console.log('🔥 localStorage 不可用');
      }
      
      // 测试是否能导入WechatAuth（但不调用）
      try {
        const WechatAuth = require('../utils/wechat-auth');
        console.log('🔥 WechatAuth 导入成功:', typeof WechatAuth);
      } catch (wechatError) {
        console.error('🚨 WechatAuth 导入失败:', wechatError);
        setErrorInfo(`WechatAuth 导入错误: ${wechatError instanceof Error ? wechatError.message : String(wechatError)}`);
      }
      
    } catch (error) {
      console.error('🚨 SimpleUserInfoScreen useEffect 错误:', error);
      setErrorInfo(`useEffect 错误: ${error instanceof Error ? error.message : String(error)}`);
    }
  }, []);

  console.log('🔥 SimpleUserInfoScreen 准备返回JSX');

  try {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.title}>简化调试页面</Text>
          </View>
          
          <View style={styles.content}>
            <Text style={styles.label}>页面状态:</Text>
            <Text style={styles.value}>正常渲染</Text>
            
            <Text style={styles.label}>调试信息:</Text>
            <Text style={styles.value}>{debugInfo}</Text>
            
            {errorInfo && (
              <>
                <Text style={styles.label}>错误信息:</Text>
                <Text style={styles.error}>{errorInfo}</Text>
              </>
            )}
            
            <Text style={styles.label}>平台信息:</Text>
            <Text style={styles.value}>{`Platform: ${Platform.OS}`}</Text>
            
            <Text style={styles.label}>环境检测:</Text>
            <Text style={styles.value}>
              {typeof window !== 'undefined' ? 'Web环境' : 'Native环境'}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } catch (renderError) {
    console.error('🚨 SimpleUserInfoScreen 渲染错误:', renderError);
    
    // 返回最基本的错误显示
    return (
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <Text style={{ color: 'red', fontSize: 16 }}>
          渲染错误: {renderError instanceof Error ? renderError.message : String(renderError)}
        </Text>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
  },
});

export default SimpleUserInfoScreen;