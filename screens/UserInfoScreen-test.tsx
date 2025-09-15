import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';

/**
 * 用户信息页面 - 简化测试版本
 */
const UserInfoScreen: React.FC = () => {
  console.log('🔥🔥🔥 UserInfoScreen 组件开始渲染 🔥🔥🔥');
  
  // 最简化测试 - 直接返回一个简单视图
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, color: 'red'}}>🔥 测试页面 🔥</Text>
        <Text style={{fontSize: 16, marginTop: 10}}>如果你看到这个，说明组件正常加载了</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserInfoScreen;