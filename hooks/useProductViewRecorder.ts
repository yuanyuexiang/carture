import { useRef } from 'react';
import { WechatAuth } from '../utils/wechat-auth';
import { useViewManager } from './useViewManager';

export const useProductViewRecorder = () => {
  const { recordProductView } = useViewManager();
  const recordedRef = useRef<Set<string>>(new Set());
  
  console.log('🚀 useProductViewRecorder Hook 调用，已记录商品:', Array.from(recordedRef.current));

  const recordView = async (productId: string, productInfo?: { name?: string; price?: number }) => {
    try {
      if (!productId || recordedRef.current.has(productId)) {
        console.log('⚠️ 商品已记录或ID为空，跳过:', productId);
        return { success: false, message: '商品已记录或ID为空' };
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
        
        recordedRef.current.add(productId);
        console.log('✅ 微信用户商品浏览记录成功:', productId);
        return { success: true, view: result };
      } else {
        console.log('⚠️ 未获取到微信用户信息，跳过浏览记录');
        return { success: false, message: '需要微信授权' };
      }
    } catch (error) {
      console.error('❌ 记录商品浏览失败:', error);
      return { success: false, error };
    }
  };

  return { recordView };
};