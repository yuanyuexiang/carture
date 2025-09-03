import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useUserBoutique } from '@/hooks/useUserBoutique';
import { getDirectusImageUrl, getDirectusThumbnailUrl } from '@/utils/directus';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
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

const { width } = Dimensions.get('window');

export default function BoutiqueScreen() {
  const colorScheme = useColorScheme();
  
  // 图片预览状态
  const [previewVisible, setPreviewVisible] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 使用真实的数据hook
  const { 
    currentUser, 
    userBoutique, 
    loading, 
    error, 
    hasUser, 
    hasBoutique, 
    isEmpty 
  } = useUserBoutique();

  // 获取所有图片URL (用于预览)
  const getAllImages = () => {
    const images: string[] = [];
    
    // 添加主图片 (高质量预览)
    if (userBoutique?.main_image) {
      images.push(getDirectusImageUrl(userBoutique.main_image, 1200, 800, 95));
    }
    
    // 添加其他图片 (高质量预览)
    if (userBoutique?.images) {
      let imageArray = [];
      if (typeof userBoutique.images === 'string') {
        try {
          imageArray = JSON.parse(userBoutique.images);
        } catch {
          imageArray = [];
        }
      } else if (Array.isArray(userBoutique.images)) {
        imageArray = userBoutique.images;
      }
      
      imageArray.forEach((imageId: string) => {
        images.push(getDirectusImageUrl(imageId, 1200, 800, 95));
      });
    }
    
    return images;
  };

  // 打开图片预览
  const openImagePreview = (imageUrl: string, index: number) => {
    console.log('Opening image preview:', { imageUrl, index });
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
    const allImages = getAllImages();
    console.log('Going to prev image:', { currentImageIndex, totalImages: allImages.length });
    if (currentImageIndex > 0) {
      const prevIndex = currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setCurrentImageUrl(allImages[prevIndex]);
      console.log('Prev image URL:', allImages[prevIndex]);
    }
  };
  
  // 下一张图片
  const goToNextImage = () => {
    const allImages = getAllImages();
    console.log('Going to next image:', { currentImageIndex, totalImages: allImages.length });
    if (currentImageIndex < allImages.length - 1) {
      const nextIndex = currentImageIndex + 1;
      setCurrentImageIndex(nextIndex);
      setCurrentImageUrl(allImages[nextIndex]);
      console.log('Next image URL:', allImages[nextIndex]);
    }
  };

  // 键盘事件处理 (仅在Web平台)
  React.useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (!previewVisible) return;
      
      if (event.key === 'ArrowLeft') {
        goToPrevImage();
      } else if (event.key === 'ArrowRight') {
        goToNextImage();
      } else if (event.key === 'Escape') {
        setPreviewVisible(false);
      }
    };

    // 只在Web平台添加键盘监听
    if (typeof window !== 'undefined' && window.document) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [previewVisible, currentImageIndex]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text
          key={i}
          style={[
            styles.star,
            { color: i <= rating ? '#FFD700' : '#E0E0E0' }
          ]}
        >
          ★
        </Text>
      );
    }
    return stars;
  };

  const renderImageGallery = () => {
    const images = userBoutique?.images;
    
    if (!images || (Array.isArray(images) && images.length === 0)) {
      return (
        <View style={styles.noImagesContainer}>
          <Ionicons name="images-outline" size={32} color="#ccc" />
          <Text style={styles.noImagesText}>暂无图片</Text>
        </View>
      );
    }

    // 处理images可能是JSON字符串的情况
    let imageArray = [];
    if (typeof images === 'string') {
      try {
        imageArray = JSON.parse(images);
      } catch {
        imageArray = [];
      }
    } else if (Array.isArray(images)) {
      imageArray = images;
    }

    const allImages = getAllImages();
    let imageIndex = 0;

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageGallery}
        contentContainerStyle={styles.imageGalleryContent}
      >
        {/* 主图片 */}
        {userBoutique?.main_image && (
          <TouchableOpacity 
            style={styles.imageContainer}
            onPress={() => openImagePreview(allImages[imageIndex], imageIndex)}
          >
            <Image
              source={{ uri: getDirectusThumbnailUrl(userBoutique.main_image, 150) }}
              style={styles.galleryImage}
              resizeMode="cover"
            />
            <View style={styles.mainImageBadge}>
              <Text style={styles.mainImageText}>主图</Text>
            </View>
          </TouchableOpacity>
        )}
        
        {/* 其他图片 */}
        {imageArray.map((imageUri: string, index: number) => {
          const actualIndex = userBoutique?.main_image ? index + 1 : index;
          return (
            <TouchableOpacity
              key={index}
              style={styles.imageContainer}
              onPress={() => openImagePreview(allImages[actualIndex], actualIndex)}
            >
              <Image
                source={{ uri: getDirectusThumbnailUrl(imageUri, 150) }}
                style={styles.galleryImage}
                resizeMode="cover"
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };

  // Loading状态
  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#ff6b35" />
          <ThemedText style={styles.loadingText}>加载店铺信息中...</ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  // 错误状态
  if (error) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={48} color="#ff6b35" />
          <ThemedText style={styles.errorTitle}>获取信息失败</ThemedText>
          <Text style={styles.errorMessage}>{error}</Text>
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={() => window.location.reload()}
          >
            <Text style={styles.retryButtonText}>重试</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ThemedView>
    );
  }

  // 空状态 - 没有店铺信息
  if (isEmpty) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.emptyContainer}>
          <Ionicons name="storefront-outline" size={64} color="#ccc" />
          <ThemedText style={styles.emptyTitle}>还没有店铺信息</ThemedText>
          <Text style={styles.emptyMessage}>
            您还没有创建店铺，请联系管理员为您开通店铺功能
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Ionicons name="chatbubble-outline" size={20} color="white" />
            <Text style={styles.contactButtonText}>联系客服</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        
        {/* 顶部导航 */}
        <View style={styles.header}>
          <ThemedText style={styles.headerTitle}>我的店铺</ThemedText>
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {/* 店铺头部卡片 */}
          <View style={styles.headerCard}>
            {userBoutique?.main_image ? (
              <Image
                source={{ uri: getDirectusImageUrl(userBoutique.main_image, 400, 200, 80) }}
                style={styles.headerImage}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.placeholderImage}>
                <Ionicons name="storefront-outline" size={48} color="#ccc" />
              </View>
            )}
            
            <View style={styles.headerContent}>
              <ThemedText style={styles.boutiqueName}>
                {userBoutique?.name || '未命名店铺'}
              </ThemedText>
              
              <View style={styles.ratingContainer}>
                {renderStars(userBoutique?.stars || 0)}
                <Text style={styles.ratingText}>
                  ({userBoutique?.stars || 0}/5)
                </Text>
              </View>
              
              <View style={styles.statusContainer}>
                <View style={[
                  styles.statusBadge,
                  {
                    backgroundColor: userBoutique?.status === 'published' ? '#4CAF50' : '#FF9800',
                  },
                ]}>
                  <Text style={styles.statusText}>
                    {userBoutique?.status === 'published' ? '营业中' : '暂停营业'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* 店铺信息卡片 */}
          <View style={styles.infoCard}>
            <ThemedText style={styles.sectionTitle}>店铺信息</ThemedText>
            
            <View style={styles.infoRow}>
              <View style={styles.infoIcon}>
                <Ionicons name="location-outline" size={20} color="#ff6b35" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>地址</Text>
                <Text style={styles.infoValue}>
                  {userBoutique?.address || '暂未设置地址'}
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoIcon}>
                <Ionicons name="person-outline" size={20} color="#ff6b35" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>店主</Text>
                <Text style={styles.infoValue}>
                  {currentUser?.first_name || currentUser?.email || '未知'}
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoIcon}>
                <Ionicons name="calendar-outline" size={20} color="#ff6b35" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>创建时间</Text>
                <Text style={styles.infoValue}>
                  {userBoutique?.date_created 
                    ? new Date(userBoutique.date_created).toLocaleDateString('zh-CN')
                    : '未知'
                  }
                </Text>
              </View>
            </View>
          </View>

          {/* 店铺图片卡片 */}
          <View style={styles.imagesCard}>
            <View style={styles.sectionHeader}>
              <ThemedText style={styles.sectionTitle}>店铺图片</ThemedText>
            </View>
            {renderImageGallery()}
          </View>
        </ScrollView>
      </SafeAreaView>
      
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
                onError={(error) => {
                  console.log('Image load error:', error.nativeEvent.error);
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', currentImageUrl);
                }}
              />
              
              {/* 左右切换按钮 */}
              {getAllImages().length > 1 && (
                <>
                  {currentImageIndex > 0 && (
                    <TouchableOpacity 
                      style={styles.prevButton}
                      onPress={goToPrevImage}
                    >
                      <Text style={styles.arrowText}>‹</Text>
                    </TouchableOpacity>
                  )}
                  {currentImageIndex < getAllImages().length - 1 && (
                    <TouchableOpacity 
                      style={styles.nextButton}
                      onPress={goToNextImage}
                    >
                      <Text style={styles.arrowText}>›</Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
              
              {/* 图片指示器 */}
              <View style={styles.imageIndicator}>
                <Text style={styles.indicatorText}>
                  {currentImageIndex + 1} / {getAllImages().length}
                </Text>
              </View>
              
              {/* 关闭按钮 */}
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={closeImagePreview}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
              
              {/* 键盘提示 */}
              {getAllImages().length > 1 && (
                <View style={styles.keyboardHint}>
                  <Text style={styles.keyboardHintText}>使用 ← → 键或点击按钮切换图片</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#ff6b35',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: '#ff6b35',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 8,
  },
  contactButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  editButtonText: {
    color: '#ff6b35',
    fontWeight: '500',
  },
  scrollContainer: {
    flex: 1,
  },
  headerCard: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerImage: {
    width: '100%',
    height: 150,
  },
  placeholderImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    padding: 16,
  },
  boutiqueName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nameInput: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 4,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  infoIcon: {
    width: 40,
    alignItems: 'center',
    paddingTop: 2,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  addressInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    minHeight: 60,
    textAlignVertical: 'top',
  },
  imagesCard: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  addImageText: {
    color: '#ff6b35',
    fontWeight: '500',
  },
  imageGallery: {
    flexDirection: 'row',
  },
  imageGalleryContent: {
    paddingRight: 16,
  },
  imageContainer: {
    position: 'relative',
    marginRight: 12,
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  mainImageBadge: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    backgroundColor: '#ff6b35',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  mainImageText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  noImagesContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  noImagesText: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#ff6b35',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
  // 图片预览相关样式
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreviewContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  previewImage: {
    maxWidth: '90%',
    maxHeight: '80%',
    minWidth: 200,
    minHeight: 200,
  },
  prevButton: {
    position: 'absolute',
    left: 20,
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    position: 'absolute',
    right: 20,
    top: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIndicator: {
    position: 'absolute',
    bottom: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  indicatorText: {
    color: 'white',
    fontSize: 14,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  keyboardHint: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  keyboardHintText: {
    color: 'white',
    fontSize: 12,
  },
});
