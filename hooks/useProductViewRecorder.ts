import { useEffect } from 'react';
import { WechatUserInfo } from '../utils/wechat-auth';
import { useViewManager } from './useViewManager';

/**
 * 微信商品浏览记录 Hook
 * 监听商品详情页面，自动记录用户的浏览行为
 */
export const useProductViewRecorder = (productId?: string) => {
  const { recordProductView } = useViewManager();
  
  console.log('🚀 useProductViewRecorder 已初始化，productId:', productId);

  // 记录商品浏览（手动调用）
  const recordView = async (productId: string, userInfo?: WechatUserInfo) => {
    try {
      // 获取当前页面的boutique_id
      // 在 React Native 中，我们需要从其他地方获取 boutique_id
      // 这里先硬编码为 1，实际应用中应该从路由参数或全局状态获取
      const boutiqueId = '1'; // TODO: 从路由参数或全局状态获取
      
      // 如果是 web 环境，尝试从 URL 参数获取
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        const urlBoutiqueId = urlParams.get('boutique_id');
        if (urlBoutiqueId) {
          // boutiqueId = urlBoutiqueId; // 如果 URL 中有则使用
        }
      }

      if (!boutiqueId) {
        console.warn('⚠️ 无法获取 boutique_id，跳过商品浏览记录');
        return { success: false, message: '缺少 boutique_id 参数' };
      }

      // 获取用户信息
      let currentUserInfo = userInfo;
      if (!currentUserInfo) {
        // 在 React Native 中使用 AsyncStorage，在 web 中使用 localStorage
        if (typeof window !== 'undefined' && window.localStorage) {
          // Web 环境
          const cachedUserInfo = localStorage.getItem('wechat_user_info');
          if (cachedUserInfo) {
            try {
              currentUserInfo = JSON.parse(cachedUserInfo);
            } catch (e) {
              console.error('解析缓存的用户信息失败:', e);
            }
          }
        } else {
          // React Native 环境，使用测试用户信息
          console.log('React Native 环境，使用测试用户信息');
          currentUserInfo = {
            openid: 'test_rn_user_' + Date.now(),
            nickname: 'RN测试用户',
            headimgurl: 'https://example.com/avatar.jpg',
            sex: 1,
            language: 'zh_CN',
            country: 'CN',
            province: 'Beijing',
            city: 'Beijing',
            privilege: [],
            login_time: Date.now()
          };
        }
      }

      if (!currentUserInfo?.openid) {
        console.warn('⚠️ 无法获取用户信息，跳过商品浏览记录');
        return { success: false, message: '缺少用户信息' };
      }

      console.log('准备记录商品浏览:', {
        productId,
        boutiqueId,
        openId: currentUserInfo.openid,
        nickName: currentUserInfo.nickname
      });

      const result = await recordProductView({
        openId: currentUserInfo.openid,
        boutiqueId,
        productId,
        nickName: currentUserInfo.nickname,
        avatar: currentUserInfo.headimgurl
      });

      if (result.success) {
        console.log('✅ 商品浏览记录成功:', result);
        
        // 触发自定义事件，通知其他组件（仅在 web 环境中）
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('productViewRecorded', {
            detail: { productId, boutiqueId, userInfo: currentUserInfo, view: result.view }
          }));
        }
      }

      return result;
    } catch (error) {
      console.error('❌ 记录商品浏览失败:', error);
      return { 
        success: false, 
        error, 
        message: `记录商品浏览失败: ${error instanceof Error ? error.message : '未知错误'}` 
      };
    }
  };

  // 自动记录当前商品浏览（如果提供了 productId）
  useEffect(() => {
    console.log('📱 useEffect 触发，productId:', productId);
    
    if (!productId) {
      console.log('❌ 没有 productId，跳过自动记录');
      return;
    }

    const handleAutoRecord = async () => {
      console.log('🎯 准备自动记录商品浏览，productId:', productId);
      
      // 延迟一下，确保页面完全加载
      setTimeout(async () => {
        console.log('⏰ 延迟执行商品浏览记录');
        const result = await recordView(productId);
        if (result.success) {
          console.log('🎉 自动记录商品浏览成功');
        } else {
          console.log('⚠️ 自动记录商品浏览失败:', result.message);
        }
      }, 1000);
    };

    // 检查是否已经有用户信息
    if (typeof window !== 'undefined' && window.localStorage) {
      // Web 环境
      console.log('🌐 检测到 Web 环境');
      const cachedUserInfo = localStorage.getItem('wechat_user_info');
      if (cachedUserInfo) {
        console.log('📦 找到缓存的用户信息，直接记录');
        handleAutoRecord();
      } else {
        console.log('❌ 没有找到缓存的用户信息，监听微信授权事件');
        // 监听微信授权成功事件
        const handleWechatAuthSuccess = (event: CustomEvent<WechatUserInfo>) => {
          console.log('检测到微信授权成功，准备记录商品浏览');
          recordView(productId, event.detail);
        };

        window.addEventListener('wechatAuthSuccess', handleWechatAuthSuccess as EventListener);
        
        return () => {
          window.removeEventListener('wechatAuthSuccess', handleWechatAuthSuccess as EventListener);
        };
      }
    } else {
      // React Native 环境，直接尝试记录（假设用户信息已经可用）
      console.log('📱 检测到 React Native 环境，直接尝试记录商品浏览');
      handleAutoRecord();
    }
  }, [productId]);

  // 监听页面可见性变化，记录用户离开页面的时间（仅在 web 环境中）
  useEffect(() => {
    if (!productId || typeof window === 'undefined') return;

    let viewStartTime = Date.now();
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // 页面变为不可见，可以在这里记录浏览时长等信息
        const viewDuration = Date.now() - viewStartTime;
        console.log(`商品 ${productId} 浏览时长: ${Math.round(viewDuration / 1000)}秒`);
        
        // 触发浏览结束事件
        window.dispatchEvent(new CustomEvent('productViewEnded', {
          detail: { productId, duration: viewDuration }
        }));
      } else {
        // 页面变为可见，重置计时
        viewStartTime = Date.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [productId]);

  return {
    recordView,
    // 提供给组件使用的便捷方法
    recordCurrentView: () => productId ? recordView(productId) : Promise.resolve({ success: false, message: '缺少 productId' })
  };
};