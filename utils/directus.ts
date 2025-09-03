/**
 * Directus 工具函数
 */

// Directus 基础 URL - 支持环境变量配置
const getDirectusBaseUrl = () => {
  // 优先使用环境变量
  const envDirectusUrl = process.env.EXPO_PUBLIC_DIRECTUS_URL || process.env.REACT_APP_DIRECTUS_URL;
  if (envDirectusUrl) {
    return envDirectusUrl;
  }
  
  // 生产环境必须设置环境变量
  const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV !== 'production';
  if (!isDev) {
    throw new Error('生产环境必须设置 EXPO_PUBLIC_DIRECTUS_URL 环境变量');
  }
  
  // 开发环境默认URL
  return 'https://forge.matrix-net.tech';
};

const DIRECTUS_BASE_URL = getDirectusBaseUrl();

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
  
  let url = `${DIRECTUS_BASE_URL}/assets/${fileId}`;
  
  // 添加查询参数进行图片优化
  const params: string[] = [];
  
  if (width) params.push(`width=${width}`);
  if (height) params.push(`height=${height}`);
  if (quality) params.push(`quality=${quality}`);
  
  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }
  
  return url;
};

/**
 * 获取优化的缩略图 URL
 * @param fileId Directus 文件 ID
 * @param size 缩略图尺寸 (默认 300px)
 * @returns 缩略图 URL
 */
export const getDirectusThumbnailUrl = (fileId: string, size: number = 300): string => {
  return getDirectusImageUrl(fileId, size, size, 80);
};

/**
 * 获取高质量的原图 URL
 * @param fileId Directus 文件 ID
 * @returns 原图 URL
 */
export const getDirectusOriginalUrl = (fileId: string): string => {
  return getDirectusImageUrl(fileId);
};
