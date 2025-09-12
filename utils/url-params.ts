/**
 * URL参数解析工具
 * 用于获取URL中的查询参数
 */

export const getUrlParams = (): URLSearchParams => {
  if (typeof window !== 'undefined' && window.location) {
    return new URLSearchParams(window.location.search);
  }
  return new URLSearchParams();
};

/**
 * 从URL获取店铺ID
 * @returns 店铺ID字符串，如果未指定则返回null
 */
export const getBoutiqueIdFromUrl = (): string | null => {
  const params = getUrlParams();
  const boutiqueId = params.get('boutique_id');
  if (boutiqueId) {
    console.log('🏪 从URL获取到店铺ID:', boutiqueId);
  }
  return boutiqueId;
};

/**
 * 从URL获取微信授权回调参数
 * @returns { code, state }
 */
export const getWechatCodeFromUrl = (): { code: string | null; state: string | null } => {
  const params = getUrlParams();
  return {
    code: params.get('code'),
    state: params.get('state')
  };
};

/**
 * 检查是否为强制微信模式
 * @returns boolean
 */
export const isForceWechatMode = (): boolean => {
  const params = getUrlParams();
  return params.get('force_wechat') === 'true';
};

/**
 * 检查是否为强制主界面模式
 * @returns boolean
 */
export const isForceMainMode = (): boolean => {
  const params = getUrlParams();
  return params.get('force_main') === 'true';
};

/**
 * 更新URL中的查询参数（不刷新页面）
 * @param key 参数名
 * @param value 参数值
 */
export const updateUrlParam = (key: string, value: string): void => {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url.toString());
    console.log(`🔄 URL参数已更新: ${key}=${value}`);
  }
};

/**
 * 移除URL中的查询参数（不刷新页面）
 * @param key 参数名
 */
export const removeUrlParam = (key: string): void => {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url.toString());
    console.log(`🗑️ URL参数已移除: ${key}`);
  }
};

/**
 * 获取所有URL参数的调试信息
 * @returns 参数对象
 */
export const getDebugUrlParams = (): Record<string, string> => {
  const params = getUrlParams();
  const result: Record<string, string> = {};
  params.forEach((value, key) => {
    result[key] = value;
  });
  return result;
};