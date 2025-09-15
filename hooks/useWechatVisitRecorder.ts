import { useCallback } from 'react';
import { visitRecorderManager } from '../utils/visit-recorder-manager';
import { WechatUserInfo } from '../utils/wechat-auth';
import { useVisitManager } from './useVisitManager';

/**
 * 微信访问记录工具 Hook
 * 使用全局管理器确保防重复调用
 */
export const useWechatVisitRecorder = () => {
  const { recordVisit } = useVisitManager();

  /**
   * 通过全局管理器记录访问
   * 自动防重复，确保相同用户-店铺组合在30分钟内只记录一次
   */
  const manualRecordVisit = useCallback(async (
    userInfo: WechatUserInfo,
    boutiqueId: string,
    source: string = 'manual'
  ) => {
    return await visitRecorderManager.attemptRecordVisit(
      userInfo.openid,
      boutiqueId,
      userInfo,
      async () => {
        await recordVisit(userInfo, boutiqueId);
      },
      source
    );
  }, [recordVisit]);

  return {
    manualRecordVisit,
    // 暴露统计信息用于调试
    getStats: () => visitRecorderManager.getStats()
  };
};