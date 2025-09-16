import React, { useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useBoutiqueContext, useBoutiqueCustomer } from '../contexts/BoutiqueContext';

/**
 * 店铺客户信息测试组件
 * 用于展示和测试新的客户管理功能
 */
export const BoutiqueCustomerTest: React.FC = () => {
  const { boutiqueId, setBoutiqueId, loading } = useBoutiqueContext();
  const { 
    customerInfo, 
    customerLoading, 
    customerError, 
    refreshCustomerInfo, 
    clearCustomerError 
  } = useBoutiqueCustomer();

  useEffect(() => {
    console.log('🧪 BoutiqueCustomerTest: 组件加载');
    console.log('🏪 当前店铺ID:', boutiqueId);
    console.log('👤 客户信息:', customerInfo);
  }, [boutiqueId, customerInfo]);

  const handleSwitchBoutique = async (testBoutiqueId: string) => {
    try {
      console.log('🧪 测试切换到店铺:', testBoutiqueId);
      await setBoutiqueId(testBoutiqueId);
    } catch (error) {
      console.error('❌ 切换店铺失败:', error);
      Alert.alert('错误', '切换店铺失败');
    }
  };

  const handleRefreshCustomer = async () => {
    try {
      console.log('🧪 测试刷新客户信息');
      await refreshCustomerInfo();
    } catch (error) {
      console.error('❌ 刷新客户信息失败:', error);
      Alert.alert('错误', '刷新客户信息失败');
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>客户管理测试</Text>
        <Text style={styles.loading}>正在初始化...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>客户管理测试</Text>
      
      {/* 店铺信息 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>店铺信息</Text>
        <Text>当前店铺ID: {boutiqueId || '未设置'}</Text>
      </View>

      {/* 客户信息 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>客户信息</Text>
        {customerLoading ? (
          <Text style={styles.loading}>加载客户信息中...</Text>
        ) : customerError ? (
          <View>
            <Text style={styles.error}>错误: {customerError}</Text>
            <TouchableOpacity style={styles.button} onPress={clearCustomerError}>
              <Text style={styles.buttonText}>清除错误</Text>
            </TouchableOpacity>
          </View>
        ) : customerInfo ? (
          <View>
            <Text>客户ID: {customerInfo.id}</Text>
            <Text>OpenID: {customerInfo.open_id}</Text>
            <Text>昵称: {customerInfo.nick_name || '未设置'}</Text>
            <Text>状态: {customerInfo.status || '未知'}</Text>
            <Text>店铺: {customerInfo.boutique?.name || '未关联'}</Text>
          </View>
        ) : (
          <Text>无客户信息</Text>
        )}
      </View>

      {/* 操作按钮 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>测试操作</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handleSwitchBoutique('1')}
        >
          <Text style={styles.buttonText}>切换到店铺1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handleSwitchBoutique('2')}
        >
          <Text style={styles.buttonText}>切换到店铺2</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleRefreshCustomer}
          disabled={!boutiqueId}
        >
          <Text style={[styles.buttonText, !boutiqueId && styles.disabled]}>
            刷新客户信息
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.clearButton]} 
          onPress={() => setBoutiqueId(null)}
        >
          <Text style={styles.buttonText}>清除店铺</Text>
        </TouchableOpacity>
      </View>

      {/* 调试信息 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>调试信息</Text>
        <Text style={styles.debug}>
          店铺加载: {loading ? '是' : '否'}
        </Text>
        <Text style={styles.debug}>
          客户加载: {customerLoading ? '是' : '否'}
        </Text>
        <Text style={styles.debug}>
          错误状态: {customerError ? '有错误' : '无错误'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  button: {
    backgroundColor: '#ff6b35',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
  loading: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  error: {
    fontSize: 16,
    color: '#dc3545',
    marginBottom: 12,
  },
  debug: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
});

export default BoutiqueCustomerTest;