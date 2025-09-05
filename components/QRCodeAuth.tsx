import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface QRCodeAuthProps {
  /** 授权URL */
  authUrl: string;
  /** 点击复制链接 */
  onCopyLink: () => void;
}

/**
 * 二维码授权组件
 * 用于在非微信环境中显示授权链接
 */
export const QRCodeAuth: React.FC<QRCodeAuthProps> = ({
  authUrl,
  onCopyLink,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.qrSection}>
        <Text style={styles.qrIcon}>📱</Text>
        <Text style={styles.qrTitle}>扫码在微信中打开</Text>
        <Text style={styles.qrSubtext}>请用微信扫描下方链接访问</Text>
        
        {/* 这里可以集成真正的二维码生成器 */}
        <View style={styles.qrPlaceholder}>
          <Text style={styles.qrPlaceholderText}>二维码</Text>
          <Text style={styles.qrPlaceholderSubtext}>(扫码访问)</Text>
        </View>
        
        <TouchableOpacity style={styles.copyButton} onPress={onCopyLink}>
          <Text style={styles.copyButtonText}>复制链接</Text>
        </TouchableOpacity>
        
        <Text style={styles.linkText} numberOfLines={2}>
          {authUrl}
        </Text>
      </View>
      
      <View style={styles.instructionSection}>
        <Text style={styles.instructionTitle}>使用说明</Text>
        <Text style={styles.instructionText}>1. 用微信扫描上方二维码</Text>
        <Text style={styles.instructionText}>2. 或复制链接在微信中打开</Text>
        <Text style={styles.instructionText}>3. 完成授权后返回此页面</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  qrSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  qrIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  qrTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  qrSubtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  qrPlaceholder: {
    width: 180,
    height: 180,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    borderStyle: 'dashed',
  },
  qrPlaceholderText: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
  },
  qrPlaceholderSubtext: {
    fontSize: 12,
    color: '#bbb',
    marginTop: 4,
  },
  copyButton: {
    backgroundColor: '#1aad19',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  linkText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    maxWidth: 280,
  },
  instructionSection: {
    alignItems: 'center',
  },
  instructionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 4,
  },
});
