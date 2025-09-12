import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DebugInfo from '../../components/DebugInfo';
import { useGetAllProductsWithBoutiqueQuery } from '../../generated/business-graphql';
import ProductListScreen from '../../screens/ProductListScreen';

export default function HomeScreen() {
  const [showDebugInfo, setShowDebugInfo] = useState(false);
  
  // 测试查询 - 查看所有商品的店铺关联信息
  const { data: testData, loading: testLoading, error: testError } = useGetAllProductsWithBoutiqueQuery({
    variables: { limit: 10 }
  });

  return (
    <View style={styles.container}>
      <ProductListScreen />
      
      {/* 调试信息切换按钮 */}
      {__DEV__ && (
        <TouchableOpacity
          style={styles.debugToggle}
          onPress={() => setShowDebugInfo(!showDebugInfo)}
        >
          <Text style={styles.debugToggleText}>
            {showDebugInfo ? '🙈' : '👁️'}
          </Text>
        </TouchableOpacity>
      )}
      
      {/* 调试信息面板 */}
      {showDebugInfo && <DebugInfo />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  debugToggle: {
    position: 'absolute',
    top: 50,
    right: 80,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1001,
  },
  debugToggleText: {
    fontSize: 20,
  },
});
