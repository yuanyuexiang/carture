import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useUserBoutique } from '../hooks/useUserBoutique';

const BrandHeader: React.FC = () => {
  const { userBoutique, loading, error, isEmpty } = useUserBoutique();

  // Loading状态
  if (loading) {
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
  if (error) {
    return (
      <View style={styles.brandSection}>
        <View style={styles.brandLogo}>
          <Text style={styles.logoText}>衣橱</Text>
        </View>
        <View style={styles.brandInfo}>
          <Text style={styles.brandName}>加载店铺信息失败</Text>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </View>
    );
  }

  // Empty状态 - 没有店铺信息
  if (isEmpty || !userBoutique) {
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
                <Ionicons key={star} name="star" size={12} color="#e0e0e0" />
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
        <Ionicons 
          key={i} 
          name="star" 
          size={12} 
          color={i <= rating ? "#ff6b35" : "#e0e0e0"} 
        />
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
          {userBoutique.name || '我的精品店'}
        </Text>
        <View style={styles.ratingSection}>
          <View style={styles.stars}>
            {renderStars(userBoutique.stars || 0)}
          </View>
          <Text style={styles.ratingText}>
            {userBoutique.stars ? `${userBoutique.stars}.0高分` : '暂无评分'}
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
