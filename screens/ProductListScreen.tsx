import React, { useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Platform, RefreshControl, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import BrandHeader from '../components/BrandHeader';
import ProductCard from '../components/ProductCard';
import Tab from '../components/Tab';
import { useBoutiqueContext } from '../contexts/BoutiqueContext';
import { useGetProductsQuery } from '../generated/business-graphql';
import { useDirectBoutiqueData } from '../hooks/useDirectBoutiqueData';

// 计算卡片宽度 - 与ProductCard中的计算保持一致
const { width: screenWidth } = Dimensions.get('window');
const HORIZONTAL_PADDING = 32; // 左右各16px padding
const ITEM_SEPARATOR = 12; // 卡片间距
const VISIBLE_CARDS = 2.2; // 显示2.2个卡片，创造滑动效果
const cardWidth = (screenWidth - HORIZONTAL_PADDING - ITEM_SEPARATOR * (VISIBLE_CARDS - 1)) / VISIBLE_CARDS;

// 计算底部安全距离，避开底部选项卡
const TAB_BAR_HEIGHT = Platform.select({
  ios: 83, // iOS底部选项卡高度 + 安全区域
  android: 70, // Android底部选项卡高度
  default: 70,
});
const BOTTOM_PADDING = TAB_BAR_HEIGHT + 16; // 选项卡高度 + 额外间距

const ProductListScreen: React.FC = () => {
  const { boutiqueId } = useBoutiqueContext();
  const [selectedCategory, setSelectedCategory] = useState<string | null>("recommended");
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  
  // 使用新的直接查询方式获取店铺和分类数据
  const {
    boutique,
    categories,
    loading: boutiqueDataLoading,
    error: boutiqueDataError,
    hasBoutique,
    hasCategories,
    boutiqueNotFound,
    debug
  } = useDirectBoutiqueData();
  
  // 构建查询变量
  const buildQueryVariables = () => {
    const variables: any = {};
    
    // 构建动态 filter 对象
    const filters: any[] = [];
    
    // 添加店铺过滤器（如果有选择的店铺）
    if (boutiqueId) {
      filters.push({
        boutique_id: { 
          id: { _eq: parseInt(boutiqueId) } 
        }
      });
    }
    
    // 处理推荐商品分类（获取最新上架的5个商品）
    if (selectedCategory === "recommended") {
      variables.limit = 5;
      variables.sort = ["-created_at"]; // 按创建时间倒序排列
    } else {
      // 普通分类显示所有商品
      variables.limit = 1000; // 设置一个足够大的数字来获取所有商品
      
      // 添加分类过滤器
      if (selectedCategory) {
        filters.push({
          category_id: { id: { _eq: parseInt(selectedCategory) } }
        });
      }
    }
    
    // 添加搜索过滤器
    if (search && search.trim()) {
      filters.push({
        _or: [
          { name: { _contains: search.trim() } },
          { subtitle: { _contains: search.trim() } },
          { description: { _contains: search.trim() } }
        ]
      });
    }
    
    // 如果有过滤条件，使用 _and 组合
    if (filters.length > 0) {
      if (filters.length === 1) {
        variables.filter = filters[0];
      } else {
        variables.filter = { _and: filters };
      }
    }
    
    return variables;
  };
  
  const { data: productData, loading: productLoading, error: productError, refetch } = useGetProductsQuery({
    variables: buildQueryVariables(),
  });

  // 调试信息
  React.useEffect(() => {
    console.log('🏪 ProductListScreen 调试信息:');
    console.log('  - boutiqueId:', boutiqueId);
    console.log('  - boutiqueDataLoading:', boutiqueDataLoading);
    console.log('  - selectedCategory:', selectedCategory);
    console.log('  - 查询变量:', buildQueryVariables());
    console.log('  - 店铺信息:', boutique);
    console.log('  - 分类信息:', categories);
    
    if (boutiqueDataError) {
      console.log('  - 数据加载错误:', boutiqueDataError);
    }
    if (productError) {
      console.log('  - 商品加载错误:', productError);
    }
    
    if (productData?.products) {
      console.log('  - 商品数量:', productData.products.length);
      console.log('  - 商品列表:', productData.products.map(p => ({ id: p.id, name: p.name })));
    }
  }, [boutiqueId, boutiqueDataLoading, selectedCategory, boutiqueDataError, productError, productData, boutique, categories]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setCurrentIndex(0);
    const refreshVariables = buildQueryVariables();
    await refetch(refreshVariables);
    setRefreshing(false);
  };

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const itemWidth = cardWidth + ITEM_SEPARATOR; // 使用动态计算的卡片宽度
    const index = Math.round(contentOffset / itemWidth);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 店铺不存在提示 */}
      {boutiqueNotFound && (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundTitle}>店铺不存在</Text>
          <Text style={styles.notFoundMessage}>
            {boutiqueId 
              ? `找不到 ID 为 ${boutiqueId} 的店铺，请检查链接是否正确。`
              : '请在链接中提供有效的店铺 ID，例如：?boutique_id=1'
            }
          </Text>
        </View>
      )}
      
      {/* 只有在店铺存在时才显示正常内容 */}
      {!boutiqueNotFound && (
        <>
          {/* 顶部品牌区域 */}
          <View style={styles.header}>
            <BrandHeader />
            <View style={styles.headerRight}>
          
          {/* <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.couponButton}>
            <Text style={styles.couponText}>轮播</Text>
          </TouchableOpacity> */}
          
        </View>
      </View>

      {/* 主体区域：左侧分类，右侧商品 */}
      <View style={styles.mainSection}>
        {/* 左侧分类导航 */}
        <View style={styles.leftCategory}>
          {boutiqueDataLoading ? (
            <ActivityIndicator size="small" color="#ff6b35" />
          ) : (
            <FlatList
              data={hasBoutique ? [
                { id: "recommended", name: "热卖爆款" },
                ...(categories || [])
              ] : []}
              keyExtractor={(cat) => cat.id}
              renderItem={({ item: cat }) => (
                <Tab
                  label={cat.name}
                  selected={selectedCategory === cat.id}
                  onPress={() => {
                    setSelectedCategory(cat.id);
                    setCurrentIndex(0);
                  }}
                  vertical // Tab组件需支持竖直样式
                />
              )}
              style={styles.verticalTabBar}
              contentContainerStyle={styles.verticalTabContainer}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
        {/* 右侧商品列表 */}
        <View style={styles.rightProduct}>
          <FlatList
            ref={flatListRef}
            data={productData?.products || []}
            keyExtractor={(prod) => prod.id}
            renderItem={({ item }) => <ProductCard product={item} vertical />}
            style={styles.productList}
            contentContainerStyle={styles.productContainer}
            ListEmptyComponent={productLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ff6b35" />
              </View>
            ) : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>暂无商品</Text>
              </View>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            }
            horizontal={false}
            showsVerticalScrollIndicator={true}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
  },
  leftCategory: {
    width: 110,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
    paddingTop: 8,
  },
  verticalTabBar: {
    flex: 1,
  },
  verticalTabContainer: {
    paddingVertical: 8,
  },
  rightProduct: {
    flex: 1,
    paddingLeft: 8,
    backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // 顶部品牌区域
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 8,
    marginRight: 8,
  },
  couponButton: {
    backgroundColor: '#ff6b35',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  couponText: {
    color: '#fff',
    fontSize: 13, // 增加优惠券按钮文字大小
    fontWeight: 'bold',
  },
  // 分类导航区域
  categorySection: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tabBar: {
    paddingVertical: 12,
  },
  tabContainer: {
    paddingHorizontal: 16,
  },
  // 商品列表区域
  productSection: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  productList: {
    flex: 1,
    paddingVertical: 8, // 添加上下内边距
  },
  productContainer: {
    paddingHorizontal: 16,
    paddingBottom: BOTTOM_PADDING, // 使用动态计算的底部内边距
    alignItems: 'stretch', // 允许项目填充可用高度
    minHeight: '100%', // 确保容器充满可用空间
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  emptyText: {
    fontSize: 17, // 增加空状态文字大小
    color: '#999',
  },
  itemSeparator: {
    width: 12,
  },
  // 店铺不存在样式
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#f8f8f8',
  },
  notFoundTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  notFoundMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default ProductListScreen;
