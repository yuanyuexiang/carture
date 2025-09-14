import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useGetProductByIdQuery } from '../generated/business-graphql';
import { useProductViewRecorder } from '../hooks/useProductViewRecorder';
import { getDirectusThumbnailUrl } from '../utils/directus';

const ProductDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  // 添加商品浏览记录功能
  useProductViewRecorder(id);
  const router = useRouter();
  const { data, loading, error } = useGetProductByIdQuery({ variables: { id: id as string } });
  const product = data?.products_by_id;
  
  // 图片预览状态
  const [previewVisible, setPreviewVisible] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 滑动手势状态
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

  // 主图转为 Directus 图片 URL
  const mainImageUrl = product?.main_image ? getDirectusThumbnailUrl(product.main_image, 400) : null;
  // 轮播图转为 Directus 图片 URL 数组
  const imagesArr = Array.isArray(product?.images) ? product.images : [];
  const imagesUrls = imagesArr.map((imgId: string) => getDirectusThumbnailUrl(imgId, 300));
  
  // 调试信息
  console.log('商品图片信息:', {
    mainImage: product?.main_image,
    imagesArray: product?.images,
    imagesArrLength: imagesArr.length,
    imagesUrlsLength: imagesUrls.length,
    imagesUrls
  });
  
  // 合并所有图片URL (主图 + 轮播图)
  const allImages = mainImageUrl ? [mainImageUrl, ...imagesUrls] : imagesUrls;
  
  // 打开图片预览
  const openImagePreview = (imageUrl: string, index: number) => {
    setCurrentImageUrl(imageUrl);
    setCurrentImageIndex(index);
    setPreviewVisible(true);
  };
  
  // 关闭图片预览
  const closeImagePreview = () => {
    setPreviewVisible(false);
  };
  
  // 上一张图片
  const goToPrevImage = () => {
    if (currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setCurrentImageUrl(allImages[prevIndex]);
    }
  };
  
  // 下一张图片
  const goToNextImage = () => {
    if (currentImageIndex < allImages.length - 1) {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
      setCurrentImageUrl(allImages[nextIndex]);
    }
  };
  
  // 键盘和触摸事件处理
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!previewVisible) return;
      
      if (event.key === 'ArrowLeft') {
        if (currentImageIndex > 0) {
          const prevIndex = currentImageIndex - 1;
          setCurrentImageIndex(prevIndex);
          setCurrentImageUrl(allImages[prevIndex]);
        }
      } else if (event.key === 'ArrowRight') {
        if (currentImageIndex < allImages.length - 1) {
          const nextIndex = currentImageIndex + 1;
          setCurrentImageIndex(nextIndex);
          setCurrentImageUrl(allImages[nextIndex]);
        }
      } else if (event.key === 'Escape') {
        setPreviewVisible(false);
      }
    };

    // 触摸事件处理
    let startX = 0;
    
    const handleTouchStartNative = (event: TouchEvent) => {
      if (!previewVisible) return;
      startX = event.touches[0].clientX;
      console.log('原生触摸开始:', startX);
    };
    
    const handleTouchEndNative = (event: TouchEvent) => {
      if (!previewVisible || !startX) return;
      const endX = event.changedTouches[0].clientX;
      const distance = startX - endX;
      const minSwipeDistance = 50;
      
      console.log('原生触摸结束:', endX, '距离:', distance);
      
      if (Math.abs(distance) < minSwipeDistance) return;
      
      if (distance > 0) {
        // 向左滑动，显示下一张
        console.log('原生向左滑动，下一张');
        if (currentImageIndex < allImages.length - 1) {
          const nextIndex = currentImageIndex + 1;
          setCurrentImageIndex(nextIndex);
          setCurrentImageUrl(allImages[nextIndex]);
        }
      } else {
        // 向右滑动，显示上一张
        console.log('原生向右滑动，上一张');
        if (currentImageIndex > 0) {
          const prevIndex = currentImageIndex - 1;
          setCurrentImageIndex(prevIndex);
          setCurrentImageUrl(allImages[prevIndex]);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyPress);
      window.addEventListener('touchstart', handleTouchStartNative);
      window.addEventListener('touchend', handleTouchEndNative);
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
        window.removeEventListener('touchstart', handleTouchStartNative);
        window.removeEventListener('touchend', handleTouchEndNative);
      };
    }
  }, [previewVisible, currentImageIndex, allImages]);

  // 在所有 Hooks 调用之后再进行条件检查
  if (loading) return <ActivityIndicator />;
  if (error) return <Text>加载失败: {error.message}</Text>;
  if (!product) return <Text>未找到商品</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {mainImageUrl && (
          <View style={styles.imageWrap}>
            <TouchableOpacity onPress={() => openImagePreview(mainImageUrl, 0)}>
              <Image source={{ uri: mainImageUrl }} style={styles.image} />
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.name}>{product.name}</Text>
        {product.subtitle && <Text style={styles.desc}>{product.subtitle}</Text>}
        <Text style={styles.price}>￥{product.price}</Text>
        {product.category_id && (
          <Text style={styles.category}>分类：{product.category_id.name}</Text>
        )}
        {product.description && <Text style={styles.desc}>{product.description}</Text>}
        {/* 商品图片轮播 */}
        {imagesUrls.length > 0 && (
          <View style={styles.imagesWrap}>
            <Text style={styles.sectionTitle}>商品图片 ({imagesUrls.length}张)</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false} 
              style={styles.imagesScroll}
              contentContainerStyle={styles.imagesScrollContent}
            >
              {imagesUrls.map((imgUrl: string, idx: number) => (
                <TouchableOpacity 
                  key={idx} 
                  onPress={() => openImagePreview(imgUrl, mainImageUrl ? idx + 1 : idx)}
                >
                  <Image source={{ uri: imgUrl }} style={styles.imagesItem} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </ScrollView>
      
      {/* 图片预览模态框 */}
      <Modal
        visible={previewVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeImagePreview}
      >
        <StatusBar backgroundColor="rgba(0,0,0,0.9)" barStyle="light-content" />
        <SafeAreaView style={styles.modalContainer}>
          <TouchableOpacity 
            style={styles.modalOverlay} 
            activeOpacity={1}
            onPress={closeImagePreview}
          >
            <View style={styles.imagePreviewContainer}>
              <Image 
                source={{ uri: currentImageUrl }} 
                style={styles.previewImage}
                resizeMode="contain"
              />
              
              {/* 图片指示器 */}
              <View style={styles.imageIndicator}>
                <Text style={styles.indicatorText}>
                  {currentImageIndex + 1} / {allImages.length}
                </Text>
              </View>
              
              {/* 关闭按钮 */}
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={closeImagePreview}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              
              {/* 简化的滑动提示 */}
              {allImages.length > 1 && (
                <View style={styles.swipeHint}>
                  <Text style={styles.swipeHintText}>左右滑动切换图片</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // 图片预览相关样式
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreviewContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  previewImage: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height - 200,
    borderRadius: 8,
  },
  imageIndicator: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  indicatorText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  // 滑动提示样式
  swipeHint: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  swipeHintText: {
    color: 'white',
    fontSize: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    opacity: 0.8,
  },
  // 原有样式
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
    minHeight: 100, // 最小高度，适应不同屏幕
  },
  imagesScrollContent: {
    flexDirection: 'row',
    paddingHorizontal: 16, // 左右间距
    gap: 12, // 图片间距使用gap属性
    alignItems: 'center',
  },
  imagesItem: {
    flex: 0, // 不自动伸缩
    width: 100, // 稍微减小宽度，适应移动端
    height: 100,
    borderRadius: 8,
    backgroundColor: '#eee',
    objectFit: 'cover',
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
    objectFit: 'contain',
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
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
    paddingTop: 20,
  },
});

export default ProductDetailScreen;
