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

  // 初始化授权检查和监听localStorage变化
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

        console.log('开始微信授权初始化...');
        const result = await WechatAuth.initialize();
        
        if (result) {
          console.log('微信授权成功，用户信息:', result);
          setUserInfo(result);
        } else {
          console.log('未获取到用户信息，需要用户手动授权');
          
          // 开发模式：如果URL有force_main参数，创建一个临时用户信息
          const urlParams = new URLSearchParams(window.location.search);
          const forceMain = urlParams.get('force_main') === 'true';
          if (forceMain) {
            console.log('开发模式：创建临时用户信息以进入主界面');
            const tempUserInfo = {
              openid: 'temp_user_' + Date.now(),
              nickname: '测试用户',
              headimgurl: '',
              sex: 1,
              language: 'zh_CN',
              country: '中国',
              province: '北京',
              city: '北京',
              privilege: [],
              login_time: Math.floor(Date.now() / 1000),
            };
            setUserInfo(tempUserInfo);
            return;
          }
          
          // 不再自动开始授权，需要用户手动点击
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '授权初始化失败';
        console.error('微信授权初始化失败:', err);
        setError(errorMessage);
        
        // 不再自动启动授权，让用户手动选择
      } finally {
        setLoading(false);
      }
    };

    // 监听localStorage变化以检测微信授权完成
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'wechat_user_info' && e.newValue) {
        console.log('检测到localStorage中的用户信息变化，重新加载用户信息');
        try {
          const newUserInfo = JSON.parse(e.newValue);
          setUserInfo(newUserInfo);
          setLoading(false);
          setError(null);
        } catch (err) {
          console.error('解析新的用户信息失败:', err);
        }
      } else if (e.key === 'wechat_user_info' && !e.newValue) {
        // 用户信息被清除
        console.log('检测到用户信息被清除');
        setUserInfo(null);
        setLoading(false);
        setError(null);
      }
    };

    // 监听来自同一页面其他组件的用户信息更新
    const handleCustomStorageChange = () => {
      console.log('检测到自定义存储变化事件，重新检查用户信息');
      const currentUserInfo = WechatAuth.getUserInfo();
      if (currentUserInfo && (!userInfo || currentUserInfo.openid !== userInfo.openid)) {
        console.log('发现新的用户信息，更新状态');
        setUserInfo(currentUserInfo);
        setLoading(false);
        setError(null);
      }
    };

    initializeAuth();
    
    // 添加事件监听器
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('wechatAuthUpdated', handleCustomStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wechatAuthUpdated', handleCustomStorageChange);
    };
  }, [isWechatBrowser]);

  // 开始授权
  const startAuth = () => {
    console.log('=== startAuth 被调用 ===');
    console.log('isWechatBrowser:', isWechatBrowser);
    
    if (!isWechatBrowser) {
      console.log('不在微信浏览器中，设置错误信息');
      setError('请在微信浏览器中打开');
      return;
    }

    try {
      console.log('调用 WechatAuth.startAuth()...');
      WechatAuth.startAuth();
      console.log('WechatAuth.startAuth() 调用完成');
    } catch (err) {
      console.error('启动授权失败:', err);
      const errorMessage = err instanceof Error ? err.message : '启动授权失败';
      setError(errorMessage);
    }
  };

  // 强制重新授权
  const forceReauth = () => {
    console.log('开始强制重新授权...');
    try {
      // 清除本地数据
      WechatAuth.clearUserInfo();
      // 立即更新状态
      setUserInfo(null);
      setError(null);
      setLoading(false);
      
      // 检查是否在微信浏览器中
      if (!isWechatBrowser) {
        setError('请在微信浏览器中打开');
        return;
      }
      
      // 开始新的授权流程
      WechatAuth.startAuth();
    } catch (err) {
      console.error('强制重新授权失败:', err);
      const errorMessage = err instanceof Error ? err.message : '重新授权失败';
      setError(errorMessage);
    }
  };

  // 清除授权信息
  const clearAuth = () => {
    console.log('清除授权信息...');
    try {
      // 清除本地数据
      WechatAuth.clearUserInfo();
      // 立即更新状态
      setUserInfo(null);
      setError(null);
      setLoading(false);
      console.log('授权信息已清除');
    } catch (err) {
      console.error('清除授权失败:', err);
      const errorMessage = err instanceof Error ? err.message : '清除授权失败';
      setError(errorMessage);
    }
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
