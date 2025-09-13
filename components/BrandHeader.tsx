import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useDirectBoutiqueData } from '../hooks/useDirectBoutiqueData';

const BrandHeader: React.FC = () => {
  const { boutique, boutiqueLoading, boutiqueError, boutiqueNotFound } = useDirectBoutiqueData();

  // 如果店铺不存在，不渲染任何内容
  if (boutiqueNotFound) {
    return null;
  }

  // Loading状态
  if (boutiqueLoading) {
    return (
      <View style={styles.brandSection}>
        <View style={styles.brandLogo}>
          <Text style={styles.logoText}>衣橱</Text>
        </View>
        <View style={styles.brandInfo}>
          <ActivityIndicator size="small" color="#ff6b35" />
          <Text style={styles.brandName}>加载中...</Text>
        </View>
      </View>
    );
  }

  // Error状态
  if (boutiqueError) {
    return (
      <View style={styles.brandSection}>
        <View style={styles.brandLogo}>
          <Text style={styles.logoText}>衣橱</Text>
        </View>
        <View style={styles.brandInfo}>
          <Text style={styles.brandName}>加载店铺信息失败</Text>
          <Text style={styles.errorText}>{boutiqueError.message || '未知错误'}</Text>
        </View>
      </View>
    );
  }

  // Empty状态 - 没有店铺信息
  if (!boutique) {
    return (
      <View style={styles.brandSection}>
        <View style={styles.brandLogo}>
          <Text style={styles.logoText}>衣橱</Text>
        </View>
        <View style={styles.brandInfo}>
          <Text style={styles.brandName}>默认服装店</Text>
          <View style={styles.ratingSection}>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Text key={star} style={styles.starText}>☆</Text>
              ))}
            </View>
            <Text style={styles.ratingText}>暂无评分</Text>
          </View>
        </View>
      </View>
    );
  }

  // 正常状态 - 显示店铺信息
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text 
          key={i} 
          style={[styles.starText, { color: i <= rating ? "#ff6b35" : "#e0e0e0" }]}
        >
          ★
        </Text>
      );
    }
    return stars;
  };

  return (
    <View style={styles.brandSection}>
      <View style={styles.brandLogo}>
        <Text style={styles.logoText}>衣橱</Text>
      </View>
      <View style={styles.brandInfo}>
        <Text style={styles.brandName}>
          {boutique.name || '我的精品店'}
        </Text>
        <View style={styles.ratingSection}>
          <View style={styles.stars}>
            {renderStars(boutique.stars || 0)}
          </View>
          <Text style={styles.ratingText}>
            {boutique.stars ? `${boutique.stars}.0高分` : '暂无评分'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  brandSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  brandLogo: {
    width: 48,
    height: 48,
    backgroundColor: '#ff6b35',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  brandInfo: {
    flex: 1,
  },
  brandName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  starText: {
    fontSize: 12,
    marginRight: 1,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
  },
  errorText: {
    fontSize: 11,
    color: '#ff4444',
    marginTop: 2,
  },
});

export default BrandHeader;
