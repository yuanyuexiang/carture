import { useCallback, useRef } from 'react';
import { WechatAuth } from '../utils/wechat-auth';
import { useViewManager } from './useViewManager';

export const useProductViewRecorder = () => {
  const { recordProductView } = useViewManager();
  // 改为存储时间戳的 Map，key 为 productId，value 为最后记录时间
  const recordedTimeRef = useRef<Map<string, number>>(new Map());
  
  console.log('🚀 useProductViewRecorder Hook 调用，已记录商品:', Array.from(recordedTimeRef.current.keys()));

  const recordView = useCallback(async (productId: string, productInfo?: { name?: string; price?: number }) => {
    try {
      if (!productId) {
        console.log('⚠️ 商品ID为空，跳过');
        return { success: false, message: '商品ID为空' };
      }

      // 检查是否在10分钟内已经记录过
      const now = Date.now();
      const lastRecordTime = recordedTimeRef.current.get(productId);
      const tenMinutes = 10 * 60 * 1000; // 10分钟毫秒数

      if (lastRecordTime && (now - lastRecordTime) < tenMinutes) {
        const remainingTime = Math.ceil((tenMinutes - (now - lastRecordTime)) / 1000);
        console.log(`⚠️ 商品 ${productId} 在10分钟内已记录过，跳过。剩余时间: ${remainingTime}秒`);
        return { success: false, message: `商品在10分钟内已记录过，剩余${remainingTime}秒` };
      }

      console.log('📝 开始记录商品浏览:', productId);
      
      const wechatUser = WechatAuth.getUserInfo();
      if (wechatUser?.openid && wechatUser.openid !== 'test_openid_1757764361299') {
        console.log('✅ 使用真实微信用户信息:', {
          openId: wechatUser.openid,
          nickName: wechatUser.nickname,
          type: 'wechat'
        });
        
        const result = await recordProductView({
          openId: wechatUser.openid,
          boutiqueId: '1', // 从URL或全局状态获取
          productId: productId,
          nickName: wechatUser.nickname,
          avatar: wechatUser.headimgurl,
          productName: productInfo?.name,
          productPrice: productInfo?.price
        });
        
        // 记录成功后更新时间戳
        recordedTimeRef.current.set(productId, now);
        console.log('✅ 微信用户商品浏览记录成功:', productId, '时间:', new Date(now).toLocaleString());
        return { success: true, view: result };
      } else {
        console.log('⚠️ 未获取到微信用户信息，跳过浏览记录');
        return { success: false, message: '需要微信授权' };
      }
    } catch (error) {
      console.error('❌ 记录商品浏览失败:', error);
      return { success: false, error };
    }
  }, [recordProductView]);

  return { recordView };
};