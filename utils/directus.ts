/**
 * Directus 工具函数
 */

// Directus 基础 URL - 自动检测环境
const getDirectusUrl = () => {
  // 检测是否为真正的Web环境
  const isRealWeb = typeof window !== 'undefined' && 
                    typeof document !== 'undefined' && 
                    typeof window.location !== 'undefined';

  const isDev = process.env.NODE_ENV === 'development';
  
  // 生产环境：使用当前域名
  if (!isDev && isRealWeb) {
    const productionUrl = window.location.origin;
    console.log('🚀 生产环境Directus端点:', productionUrl);
    return productionUrl;
  }
  
  // 开发环境：直接连接开发服务器
  const devDirectusUrl = 'https://forge.kcbaotech.com';
  console.log('📱 开发环境Directus端点:', devDirectusUrl);
  return devDirectusUrl;
};

const DIRECTUS_URL = getDirectusUrl();

/**
 * 将 Directus 文件 ID 转换为完整的图片 URL
 * @param fileId Directus 文件 ID
 * @param width 可选的宽度参数（用于图片优化）
 * @param height 可选的高度参数（用于图片优化）
 * @param quality 可选的质量参数（1-100）
 * @returns 完整的图片 URL
 */
export const getDirectusImageUrl = (
  fileId: string,
  width?: number,
  height?: number,
  quality?: number
): string => {
  if (!fileId) return '';
  
  const params = new URLSearchParams();
  if (width) params.append('width', width.toString());
  if (height) params.append('height', height.toString());
  if (quality) params.append('quality', quality.toString());
  
  const queryString = params.toString();
  return `${DIRECTUS_URL}/assets/${fileId}${queryString ? `?${queryString}` : ''}`;
};

/**
 * 获取优化的缩略图 URL
 * @param fileId Directus 文件 ID
 * @param size 缩略图尺寸 (默认 300px)
 * @returns 缩略图 URL
 */
export const getDirectusThumbnailUrl = (fileId: string, size: number = 150, quality: number = 80): string => {
  return getDirectusImageUrl(fileId, size, size, quality);
};

/**
 * 获取高质量的原图 URL
 * @param fileId Directus 文件 ID
 * @returns 原图 URL
 */
export const getDirectusOriginalUrl = (fileId: string): string => {
  return getDirectusImageUrl(fileId);
};
