import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import React, { useState } from 'react';
import {
    Alert,
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

// 临时的模拟数据类型
interface BoutiqueData {
  id: string;
  name: string;
  address: string;
  main_image?: string;
  images?: string[];
  stars: number;
  status: string;
}

const { width } = Dimensions.get('window');

export default function BoutiqueScreen() {
  const colorScheme = useColorScheme();
  const [isEditing, setIsEditing] = useState(false);
  const [boutiqueData, setBoutiqueData] = useState<BoutiqueData>({
    id: '1',
    name: '我的精品店',
    address: '上海市黄浦区南京东路123号',
    main_image: 'https://via.placeholder.com/400x200',
    images: [
      'https://via.placeholder.com/400x200',
      'https://via.placeholder.com/400x200',
      'https://via.placeholder.com/400x200',
    ],
    stars: 4,
    status: 'published',
  });

  const [editForm, setEditForm] = useState({
    name: boutiqueData.name,
    address: boutiqueData.address,
  });

  const handleSave = async () => {
    try {
      // TODO: 实现实际的保存逻辑
      setBoutiqueData({
        ...boutiqueData,
        name: editForm.name,
        address: editForm.address,
      });
      setIsEditing(false);
      Alert.alert('成功', '店铺信息已更新');
    } catch (error) {
      Alert.alert('错误', '保存失败，请重试');
    }
  };

  const handleCancel = () => {
    setEditForm({
      name: boutiqueData.name,
      address: boutiqueData.address,
    });
    setIsEditing(false);
  };

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
    if (!boutiqueData.images || boutiqueData.images.length === 0) {
      return (
        <View style={styles.noImagesContainer}>
          <Text style={styles.noImagesText}>暂无图片</Text>
        </View>
      );
    }

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageGallery}
        contentContainerStyle={styles.imageGalleryContent}
      >
        {boutiqueData.images.map((imageUri, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => {
              // TODO: 实现图片预览功能
            }}
          >
            <Image
              source={{ uri: imageUri }}
              style={styles.galleryImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* 店铺头部信息 */}
        <View style={styles.header}>
          {boutiqueData.main_image && (
            <Image
              source={{ uri: boutiqueData.main_image }}
              style={styles.headerImage}
              resizeMode="cover"
            />
          )}
          <View style={styles.headerOverlay}>
            <View style={styles.headerContent}>
              {isEditing ? (
                <TextInput
                  style={styles.nameInput}
                  value={editForm.name}
                  onChangeText={(text) => setEditForm({ ...editForm, name: text })}
                  placeholder="店铺名称"
                  placeholderTextColor="#999"
                />
              ) : (
                <ThemedText style={styles.boutiqueName}>
                  {boutiqueData.name}
                </ThemedText>
              )}
              
              <View style={styles.ratingContainer}>
                {renderStars(boutiqueData.stars)}
                <Text style={styles.ratingText}>({boutiqueData.stars}/5)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 店铺详细信息 */}
        <View style={styles.detailsContainer}>
          <View style={styles.infoSection}>
            <ThemedText style={styles.sectionTitle}>店铺信息</ThemedText>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>地址：</Text>
              {isEditing ? (
                <TextInput
                  style={styles.addressInput}
                  value={editForm.address}
                  onChangeText={(text) => setEditForm({ ...editForm, address: text })}
                  placeholder="店铺地址"
                  placeholderTextColor="#999"
                  multiline
                />
              ) : (
                <Text style={styles.infoValue}>{boutiqueData.address}</Text>
              )}
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>状态：</Text>
              <Text
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor:
                      boutiqueData.status === 'published' ? '#4CAF50' : '#FF9800',
                  },
                ]}
              >
                {boutiqueData.status === 'published' ? '营业中' : '暂停营业'}
              </Text>
            </View>
          </View>

          {/* 店铺图片 */}
          <View style={styles.imagesSection}>
            <ThemedText style={styles.sectionTitle}>店铺图片</ThemedText>
            {renderImageGallery()}
          </View>

          {/* 操作按钮 */}
          <View style={styles.actionsContainer}>
            {isEditing ? (
              <View style={styles.editActions}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.cancelButton]}
                  onPress={handleCancel}
                >
                  <Text style={styles.cancelButtonText}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.saveButton]}
                  onPress={handleSave}
                >
                  <Text style={styles.saveButtonText}>保存</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => setIsEditing(true)}
              >
                <Text style={styles.editButtonText}>编辑店铺信息</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  headerContent: {
    flexDirection: 'column',
  },
  boutiqueName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  nameInput: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    fontSize: 16,
    marginRight: 2,
  },
  ratingText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 14,
  },
  detailsContainer: {
    padding: 16,
  },
  infoSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    minWidth: 60,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
  },
  addressInput: {
    fontSize: 16,
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 4,
    textAlignVertical: 'top',
    minHeight: 60,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  imagesSection: {
    marginBottom: 24,
  },
  imageGallery: {
    marginTop: 8,
  },
  imageGalleryContent: {
    paddingRight: 16,
  },
  imageContainer: {
    marginRight: 12,
  },
  galleryImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  noImagesContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginTop: 8,
  },
  noImagesText: {
    color: '#999',
    fontSize: 14,
  },
  actionsContainer: {
    marginTop: 24,
    marginBottom: 32,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: '#007AFF',
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  editActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
