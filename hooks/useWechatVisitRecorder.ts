import { useEffect, useRef } from 'react';
import { WechatAuth, WechatUserInfo } from '../utils/wechat-auth';
import { useVisitManager } from './useVisitManager';

/**
 * 微信授权访问记录 Hook
 * 监听微信授权成功事件，自动创建访问记录
 */
export const useWechatVisitRecorder = () => {
  const { recordVisit } = useVisitManager();
  const isRecordingVisit = useRef(false); // 防止重复记录的标志

  useEffect(() => {
    const handleWechatAuthSuccess = async (userInfo: WechatUserInfo, source: 'event' | 'existing' = 'event') => {
      try {
        // 获取当前页面的boutique_id
        const urlParams = new URLSearchParams(window.location.search);
        const boutiqueId = urlParams.get('boutique_id');

        if (boutiqueId && userInfo) {
          // 生成唯一的session key来防止重复
          const sessionKey = `visit_${boutiqueId}_${userInfo.openid}_${Date.now()}`;
          const lastVisitKey = `last_visit_${boutiqueId}_${userInfo.openid}`;
          const lastVisitTime = localStorage.getItem(lastVisitKey);
          const currentTime = Date.now();
          
          // 检查是否在处理中或者30分钟内已经记录过
          if (isRecordingVisit.current) {
            console.log('正在记录访问，跳过重复调用');
            return;
          }
          
          if (lastVisitTime && currentTime - parseInt(lastVisitTime) < 30 * 60 * 1000) {
            console.log('30分钟内已记录访问，跳过');
            return;
          }

          console.log(`检测到微信授权成功 (${source})，准备记录访问`);
          isRecordingVisit.current = true;
          
          try {
            const result = await recordVisit(userInfo, boutiqueId);
            
            if (result.success) {
              console.log('访问记录创建成功');
              localStorage.setItem(lastVisitKey, currentTime.toString());
            } else {
              console.error('访问记录创建失败:', result.error);
            }
          } finally {
            isRecordingVisit.current = false;
          }
        } else {
          console.log('没有boutique_id或用户信息，跳过访问记录');
        }
      } catch (error) {
        console.error('处理访问记录时出错:', error);
        isRecordingVisit.current = false;
      }
    };

    // 监听微信授权成功事件
    const handleAuthUpdated = (event: CustomEvent) => {
      const userInfo = event.detail?.userInfo;
      if (userInfo) {
        handleWechatAuthSuccess(userInfo, 'event');
      }
    };

    // 检查是否已经有用户信息（页面刷新情况）
    const checkExistingAuth = () => {
      const existingUserInfo = WechatAuth.getUserInfo();
      if (existingUserInfo) {
        const urlParams = new URLSearchParams(window.location.search);
        const boutiqueId = urlParams.get('boutique_id');
        
        if (boutiqueId) {
          console.log('检测到现有授权，准备记录访问');
          handleWechatAuthSuccess(existingUserInfo, 'existing');
        }
      }
    };

    // 添加事件监听
    window.addEventListener('wechatAuthUpdated', handleAuthUpdated as EventListener);
    
    // 检查现有授权 - 使用短暂延迟避免和事件监听冲突
    setTimeout(checkExistingAuth, 100);

    return () => {
      window.removeEventListener('wechatAuthUpdated', handleAuthUpdated as EventListener);
      isRecordingVisit.current = false;
    };
  }, [recordVisit]);

  return {
    // 可以暴露一些手动记录访问的方法
    manualRecordVisit: async (userInfo: WechatUserInfo, boutiqueId: string) => {
      return await recordVisit(userInfo, boutiqueId);
    }
  };
};