import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WardrobeApolloProvider from '../../components/WardrobeApolloProvider';
import { WechatAuth } from '../../utils/wechat-auth';

export default function DebugScreen() {
  const handleStopAPICalls = () => {
    Alert.alert(
      '⚠️ 紧急停止',
      '确定要停止所有微信API调用吗？',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '立即停止',
          style: 'destructive',
          onPress: () => {
            WechatAuth.forceStop();
            Alert.alert('✅ 已停止', '所有微信API调用已强制停止');
          }
        }
      ]
    );
  };

  const handleClearCache = () => {
    Alert.alert(
      '清理缓存',
      '确定要清理所有微信授权缓存吗？',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '清理',
          onPress: () => {
            WechatAuth.clearUserInfo();
            WechatAuth.forceStop();
            Alert.alert('✅ 已清理', '微信授权缓存已清理完成');
          }
        }
      ]
    );
  };

  return (
    <WardrobeApolloProvider>
      <View style={styles.container}>
        <View style={styles.emergencyControls}>
          <TouchableOpacity style={styles.stopButton} onPress={handleStopAPICalls}>
            <Text style={styles.stopButtonText}>🛑 紧急停止API调用</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.clearButton} onPress={handleClearCache}>
            <Text style={styles.clearButtonText}>🗑️ 清理微信缓存</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.placeholder}>
          <Text>网络测试功能已移除以优化性能</Text>
        </View>
      </View>
    </WardrobeApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emergencyControls: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff3cd',
    borderBottomWidth: 1,
    borderBottomColor: '#ffeaa7',
  },
  stopButton: {
    flex: 1,
    backgroundColor: '#dc3545',
    padding: 12,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  stopButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#6c757d',
    padding: 12,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  placeholder: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    margin: 16,
    borderRadius: 8,
  },
});
