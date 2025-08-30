import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useGetProductDetailQuery } from '../generated/graphql';
import { getDirectusThumbnailUrl } from '../utils/directus';

const ProductDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, loading, error } = useGetProductDetailQuery({ variables: { id: id as string } });
  const product = data?.products_by_id;

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>加载失败: {error.message}</Text>;
  if (!product) return <Text>未找到商品</Text>;

  // 主图转为 Directus 图片 URL
  const mainImageUrl = product.main_image ? getDirectusThumbnailUrl(product.main_image, 400) : null;
  // 轮播图转为 Directus 图片 URL 数组
  const imagesArr = Array.isArray(product.images) ? product.images : [];
  const imagesUrls = imagesArr.map((imgId: string) => getDirectusThumbnailUrl(imgId, 300));

  return (
    <ScrollView style={styles.container}>
      {mainImageUrl && (
        <View style={styles.imageWrap}>
          <Image source={{ uri: mainImageUrl }} style={styles.image} />
        </View>
      )}
      <Text style={styles.name}>{product.name}</Text>
      {product.subtitle && <Text style={styles.desc}>{product.subtitle}</Text>}
      <Text style={styles.price}>￥{product.price}
        {product.market_price && (
          <Text style={styles.marketPrice}>  原价￥{product.market_price}</Text>
        )}
      </Text>
      {product.stock !== undefined && (
        <Text style={styles.stock}>库存：{product.stock}</Text>
      )}
      {product.brand && (
        <Text style={styles.brand}>品牌：{product.brand}</Text>
      )}
      {product.category_id && (
        <Text style={styles.category}>分类：{product.category_id.name}</Text>
      )}
      {product.description && <Text style={styles.desc}>{product.description}</Text>}
      {/* 商品图片轮播 */}
      {imagesUrls.length > 0 && (
        <View style={styles.imagesWrap}>
          <Text style={styles.sectionTitle}>商品图片</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imagesScroll}>
            {imagesUrls.map((imgUrl: string, idx: number) => (
              <Image key={idx} source={{ uri: imgUrl }} style={styles.imagesItem} />
            ))}
          </ScrollView>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imagesWrap: {
    marginTop: 24,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  imagesScroll: {
    flexDirection: 'row',
  },
  imagesItem: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#eee',
  },
  marketPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  stock: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    textAlign: 'left',
  },
  brand: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    textAlign: 'left',
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    textAlign: 'left',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  imageWrap: {
    alignItems: 'stretch',
    marginBottom: 16,
    width: '100%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: '#eee',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'left',
  },
  price: {
    fontSize: 18,
    color: '#e91e63',
    marginBottom: 8,
    textAlign: 'left',
  },
  desc: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    marginBottom: 4,
  },
});

export default ProductDetailScreen;
