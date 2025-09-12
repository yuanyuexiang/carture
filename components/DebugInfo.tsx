import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useBoutiqueContext } from '../contexts/BoutiqueContext';
import { useGetAllProductsWithBoutiqueQuery, useGetProductsQuery } from '../generated/business-graphql';
import { useDirectBoutiqueData } from '../hooks/useDirectBoutiqueData';
import { getBoutiqueIdFromUrl, getUrlParams } from '../utils/url-params';

export const DebugInfo: React.FC = () => {
  const { boutiqueId } = useBoutiqueContext();
  const urlParams = getUrlParams();
  const urlBoutiqueId = getBoutiqueIdFromUrl();
  
  // 使用新的直接查询方式
  const { 
    boutique, 
    categories, 
    loading: directLoading, 
    error: directError,
    boutiqueNotFound,
    debug: directDebug 
  } = useDirectBoutiqueData();
  
  // 获取当前筛选的商品
  const { data: currentProducts, loading: currentLoading, error: currentError } = useGetProductsQuery({
    variables: boutiqueId ? {
      filter: {
        boutique_id: { id: { _eq: parseInt(boutiqueId) } }
      }
    } : {}
  });
  
  // 获取所有商品及其店铺信息进行对比
  const { data: allProducts, loading: allLoading, error: allError } = useGetAllProductsWithBoutiqueQuery({
    variables: { limit: 50 }
  });

  const queryVariables = boutiqueId ? {
    filter: {
      boutique_id: { id: { _eq: parseInt(boutiqueId) } }
    }
  } : {};

  return (
    <View style={styles.debugOverlay}>
      <ScrollView style={styles.debugContent}>
        <Text style={styles.debugTitle}>🔍 调试信息</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>新的直接查询方式</Text>
          <Text style={styles.debugText}>直接查询加载中: {directLoading.toString()}</Text>
          {directError && <Text style={styles.errorText}>直接查询错误: {directError.message}</Text>}
          {boutiqueNotFound && <Text style={styles.errorText}>⚠️ 店铺不存在</Text>}
          <Text style={styles.debugText}>
            店铺信息: {boutique ? `${boutique.name} (ID: ${boutique.id})` : '无'}
          </Text>
          <Text style={styles.debugText}>
            分类数量: {categories.length}
          </Text>
          {categories.map((cat: any, index: number) => (
            <Text key={index} style={styles.highlightText}>
              分类 {index + 1}: {cat.name} (ID: {cat.id})
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>直接查询调试详情</Text>
          <Text style={styles.debugText}>Debug Info: {JSON.stringify(directDebug, null, 2)}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>URL 参数</Text>
          <Text style={styles.debugText}>完整参数: {JSON.stringify(urlParams, null, 2)}</Text>
          <Text style={styles.debugText}>URL 中 boutique_id: {urlBoutiqueId || '无'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Context 状态</Text>
          <Text style={styles.debugText}>Context boutique_id: {boutiqueId || '无'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>GraphQL 查询变量</Text>
          <Text style={styles.debugText}>{JSON.stringify(queryVariables, null, 2)}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>当前商品查询结果</Text>
          <Text style={styles.debugText}>加载中: {currentLoading.toString()}</Text>
          {currentError && <Text style={styles.errorText}>错误: {currentError.message}</Text>}
          <Text style={styles.debugText}>
            商品数量: {currentProducts?.products?.length || 0}
          </Text>
          {currentProducts?.products?.slice(0, 3).map((product: any, index: number) => (
            <Text key={index} style={styles.debugText}>
              商品 {index + 1}: {product.name} (店铺ID: {product.boutique_id?.id || '无'})
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>所有商品与店铺关联 (前10个)</Text>
          <Text style={styles.debugText}>加载中: {allLoading.toString()}</Text>
          {allError && <Text style={styles.errorText}>错误: {allError.message}</Text>}
          <Text style={styles.debugText}>
            总商品数量: {allProducts?.products?.length || 0}
          </Text>
          {allProducts?.products?.slice(0, 10).map((product: any, index: number) => (
            <Text key={index} style={styles.debugText}>
              {product.name} → 店铺ID: {product.boutique_id?.id || '无'} ({product.boutique_id?.name || '无名称'})
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>boutique_id=1 的商品</Text>
          {allProducts?.products?.filter((p: any) => p.boutique_id?.id === 1).map((product: any, index: number) => (
            <Text key={index} style={styles.highlightText}>
              ✅ {product.name} (店铺: {product.boutique_id?.name})
            </Text>
          )) || <Text style={styles.debugText}>没有找到 boutique_id=1 的商品</Text>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  debugOverlay: {
    position: 'absolute',
    top: 100,
    right: 10,
    width: 350,
    maxHeight: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 8,
    padding: 10,
    zIndex: 9999,
  },
  debugContent: {
    flex: 1,
  },
  debugTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  sectionTitle: {
    color: '#00ff00',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  debugText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 2,
  },
  errorText: {
    color: '#ff6666',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 2,
  },
  highlightText: {
    color: '#00ff88',
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 2,
    fontWeight: 'bold',
  },
});

export default DebugInfo;