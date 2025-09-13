import { useVisitManager } from '@/hooks/useVisitManager';
import { useEffect } from 'react';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';

/**
 * 微信授权访问记录 Hook
 * 监听微信授权成功事件，自动创建访问记录
 */
export const useWechatVisitRecorder = () => {
  const { recordVisit } = useVisitManager();

  useEffect(() => {
    const handleWechatAuthSuccess = async (userInfo: WechatUserInfo) => {
      try {
        // 获取当前页面的boutique_id
        const urlParams = new URLSearchParams(window.location.search);
        const boutiqueId = urlParams.get('boutique_id');

        if (boutiqueId && userInfo) {
          console.log('检测到微信授权成功，准备记录访问');
          const result = await recordVisit(userInfo, boutiqueId);
          
          if (result.success) {
            console.log('访问记录创建成功');
          } else {
            console.error('访问记录创建失败:', result.error);
          }
        } else {
          console.log('没有boutique_id或用户信息，跳过访问记录');
        }
      } catch (error) {
        console.error('处理访问记录时出错:', error);
      }
    };

    // 监听微信授权成功事件
    const handleAuthUpdated = (event: CustomEvent) => {
      const userInfo = event.detail?.userInfo;
      if (userInfo) {
        handleWechatAuthSuccess(userInfo);
      }
    };

    // 检查是否已经有用户信息（页面刷新情况）
    const checkExistingAuth = () => {
      const existingUserInfo = WechatAuth.getUserInfo();
      if (existingUserInfo) {
        // 检查是否应该记录访问（避免重复记录）
        const lastVisitTime = localStorage.getItem('last_visit_time');
        const currentTime = Date.now();
        const urlParams = new URLSearchParams(window.location.search);
        const boutiqueId = urlParams.get('boutique_id');
        
        // 如果是新的会话或者新的店铺，记录访问
        if (boutiqueId && (!lastVisitTime || currentTime - parseInt(lastVisitTime) > 30 * 60 * 1000)) { // 30分钟内不重复记录
          console.log('检测到现有授权，记录访问');
          handleWechatAuthSuccess(existingUserInfo);
          localStorage.setItem('last_visit_time', currentTime.toString());
        }
      }
    };

    // 添加事件监听
    window.addEventListener('wechatAuthUpdated', handleAuthUpdated as EventListener);
    
    // 检查现有授权
    checkExistingAuth();

    return () => {
      window.removeEventListener('wechatAuthUpdated', handleAuthUpdated as EventListener);
    };
  }, [recordVisit]);

  return {
    // 可以暴露一些手动记录访问的方法
    manualRecordVisit: async (userInfo: WechatUserInfo, boutiqueId: string) => {
      return await recordVisit(userInfo, boutiqueId);
    }
  };
};