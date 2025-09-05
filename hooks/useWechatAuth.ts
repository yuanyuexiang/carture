import { useEffect, useState } from 'react';
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
  /** 强制重新授权 */
  forceReauth: () => void;
  /** 清除授权信息 */
  clearAuth: () => void;
}

/**
 * 微信授权 Hook
 * 自动处理微信授权流程，包括初始化检查、状态管理等
 */
export const useWechatAuth = (): UseWechatAuthResult => {
  const [userInfo, setUserInfo] = useState<WechatUserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isWechatBrowser = WechatAuth.isWechatBrowser();

  // 初始化授权检查
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        setLoading(true);
        setError(null);

        // 如果不在微信浏览器中，跳过授权
        if (!isWechatBrowser) {
          console.log('当前不在微信浏览器中，跳过微信授权');
          setUserInfo(null);
          return;
        }

        const result = await WechatAuth.initialize();
        setUserInfo(result);

        if (!result) {
          console.log('未获取到用户信息，可能需要授权');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '授权初始化失败';
        console.error('微信授权初始化失败:', err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [isWechatBrowser]);

  // 开始授权
  const startAuth = () => {
    if (!isWechatBrowser) {
      setError('请在微信浏览器中打开');
      return;
    }

    try {
      WechatAuth.startAuth();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '启动授权失败';
      setError(errorMessage);
    }
  };

  // 强制重新授权
  const forceReauth = () => {
    WechatAuth.clearUserInfo();
    setUserInfo(null);
    setError(null);
    startAuth();
  };

  // 清除授权信息
  const clearAuth = () => {
    WechatAuth.clearUserInfo();
    setUserInfo(null);
    setError(null);
  };

  return {
    userInfo,
    loading,
    error,
    isAuthorized: !!userInfo,
    isWechatBrowser,
    startAuth,
    forceReauth,
    clearAuth,
  };
};
