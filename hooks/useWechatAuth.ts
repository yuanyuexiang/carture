import { useCallback, useEffect, useState } from 'react';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

export interface UseWechatAuthResult {
  /** 当前用户信息 */
  userInfo: WechatUserInfo | null;
  /** 是否正在加载 */
  loading: boolean;
  /** 错误信息 */
  error: string | null;
  /** 是否已授权 */
  isAuthorized: boolean;
  /** 是否在微信浏览器中 */
  isWechatBrowser: boolean;
  /** 开始授权 */
  startAuth: () => void;
  /** 清除授权信息 */
  clearAuth: () => void;
}

/**
 * 微信授权 Hook - 极简版本
 * 原则：授权一次，获取用户信息，完成
 * 不搞复杂的轮询、防抖、多次验证
 */
export const useWechatAuth = (): UseWechatAuthResult => {
  const [userInfo, setUserInfo] = useState<WechatUserInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isWechatBrowser = WechatAuth.isWechatBrowser();

  // 简单获取用户信息
  const loadUserInfo = useCallback(async () => {
    console.log('🔍 检查用户授权状态...');
    
    if (!isWechatBrowser) {
      console.log('不在微信浏览器中');
      setUserInfo(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 检查URL中是否有授权回调
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state');

      if (code && state) {
        // 处理授权回调
        console.log('处理微信授权回调...');
        const result = await WechatAuth.handleAuthCallback(code, state);
        setUserInfo(result);
        return;
      }

      // 检查本地是否有用户信息
      const localUserInfo = WechatAuth.getUserInfo();
      if (localUserInfo && !WechatAuth.isAuthExpired(localUserInfo)) {
        console.log('使用本地用户信息');
        setUserInfo(localUserInfo);
      } else {
        console.log('需要重新授权');
        setUserInfo(null);
      }

    } catch (err) {
      console.error('获取用户信息失败:', err);
      setError(err instanceof Error ? err.message : '获取用户信息失败');
    } finally {
      setLoading(false);
    }
  }, [isWechatBrowser]);

  // 开始授权
  const startAuth = useCallback(() => {
    if (!isWechatBrowser) {
      setError('请在微信浏览器中打开');
      return;
    }
    console.log('开始微信授权...');
    WechatAuth.startAuth();
  }, [isWechatBrowser]);

  // 清除授权
  const clearAuth = useCallback(() => {
    console.log('清除授权信息');
    WechatAuth.clearUserInfo();
    setUserInfo(null);
    setError(null);
  }, []);

  // 组件挂载时检查一次，就这么简单
  useEffect(() => {
    loadUserInfo();
  }, []); // 只运行一次

  return {
    userInfo,
    loading,
    error,
    isAuthorized: !!userInfo,
    isWechatBrowser,
    startAuth,
    clearAuth,
  };
};