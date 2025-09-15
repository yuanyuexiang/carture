import { useCallback } from 'react';
import { WechatUserInfo } from '../utils/wechat-auth';
import { useVisitManager } from './useVisitManager';

/**
 * 微信访问记录工具 Hook
 * 提供手动记录访问的功能，不再自动监听事件
 */
export const useWechatVisitRecorder = () => {
  const { recordVisit } = useVisitManager();

  /**
   * 手动记录访问
   * 只在明确的业务场景下调用，比如：
   * 1. 微信授权成功后
   * 2. 确实获取到了店铺信息
   * 3. 用户确实进入了某个店铺
   */
  const manualRecordVisit = useCallback(async (
    userInfo: WechatUserInfo,
    boutiqueId: string,
    source: string = 'manual'
  ) => {
    try {
      if (!userInfo?.openid || !boutiqueId) {
        console.log(`❌ 记录访问失败：缺少必要信息 - openid: ${!!userInfo?.openid}, boutiqueId: ${!!boutiqueId}`);
        return { success: false, message: '缺少用户信息或店铺ID' };
      }

      // 防重复：检查最近30分钟内是否已经记录过
      const visitKey = `visit_${boutiqueId}_${userInfo.openid}`;
      const lastVisitTime = localStorage.getItem(visitKey);
      const currentTime = Date.now();
      const thirtyMinutes = 30 * 60 * 1000;

      if (lastVisitTime && currentTime - parseInt(lastVisitTime) < thirtyMinutes) {
        const remainingTime = Math.ceil((thirtyMinutes - (currentTime - parseInt(lastVisitTime))) / (60 * 1000));
        console.log(`⚠️ 店铺 ${boutiqueId} 在30分钟内已记录访问，跳过。剩余时间: ${remainingTime}分钟`);
        return { success: false, message: `30分钟内已记录过访问，剩余${remainingTime}分钟` };
      }

      console.log(`📊 记录访问 (${source}):`, {
        openId: userInfo.openid,
        nickName: userInfo.nickname,
        boutiqueId,
        timestamp: new Date().toLocaleString()
      });

      const result = await recordVisit(userInfo, boutiqueId);

      if (result.success) {
        // 记录成功后更新时间戳
        localStorage.setItem(visitKey, currentTime.toString());
        console.log(`✅ 访问记录创建成功 (${source})`);
      } else {
        console.error(`❌ 访问记录创建失败 (${source}):`, result.error);
      }

      return result;
    } catch (error) {
      console.error(`❌ 记录访问时出错 (${source}):`, error);
      return { success: false, error };
    }
  }, [recordVisit]);

  return {
    manualRecordVisit
  };
};