import { useEffect } from 'react';
import { WechatUserInfo } from '../utils/wechat-auth';
import { useViewManager } from './useViewManager';

/**
 * 微信商品浏览记录 Hook
 * 监听商品详情页面，自动记录用户的浏览行为
 */
export const useProductViewRecorder = (productId?: string) => {
  const { recordProductView } = useViewManager();

  // 记录商品浏览（手动调用）
  const recordView = async (productId: string, userInfo?: WechatUserInfo) => {
    try {
      // 获取当前页面的boutique_id
      const urlParams = new URLSearchParams(window.location.search);
      const boutiqueId = urlParams.get('boutique_id');

      if (!boutiqueId) {
        console.warn('⚠️ 无法获取 boutique_id，跳过商品浏览记录');
        return { success: false, message: '缺少 boutique_id 参数' };
      }

      // 获取用户信息
      let currentUserInfo = userInfo;
      if (!currentUserInfo) {
        // 尝试从缓存中获取用户信息
        const cachedUserInfo = localStorage.getItem('wechat_user_info');
        if (cachedUserInfo) {
          try {
            currentUserInfo = JSON.parse(cachedUserInfo);
          } catch (e) {
            console.error('解析缓存的用户信息失败:', e);
          }
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
        
        // 触发自定义事件，通知其他组件
        window.dispatchEvent(new CustomEvent('productViewRecorded', {
          detail: { productId, boutiqueId, userInfo: currentUserInfo, view: result.view }
        }));
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
    if (!productId) return;

    const handleAutoRecord = async () => {
      // 延迟一下，确保页面完全加载
      setTimeout(async () => {
        const result = await recordView(productId);
        if (result.success) {
          console.log('🎉 自动记录商品浏览成功');
        }
      }, 1000);
    };

    // 检查是否已经有用户信息
    const cachedUserInfo = localStorage.getItem('wechat_user_info');
    if (cachedUserInfo) {
      handleAutoRecord();
    } else {
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
  }, [productId]);

  // 监听页面可见性变化，记录用户离开页面的时间
  useEffect(() => {
    if (!productId) return;

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