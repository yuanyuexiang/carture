import { useMutation, useQuery } from '@apollo/client';
import {
    CREATE_PRODUCT_VIEW,
    GET_BOUTIQUE_PRODUCT_VIEW_STATS,
    GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE,
    GET_CUSTOMER_PRODUCT_VIEWS,
    GET_PRODUCT_VIEW_STATS
} from '../graphql/business/views.graphql';

/**
 * 商品浏览记录管理 Hook
 * 用于处理用户浏览商品详情页的记录和统计
 */
export const useViewManager = () => {
  const [createProductView] = useMutation(CREATE_PRODUCT_VIEW);
  
  /**
   * 记录商品浏览
   * @param openId 微信用户的 openId
   * @param boutiqueId 精品店ID
   * @param productId 商品ID
   * @param nickName 用户昵称（可选）
   * @param avatar 用户头像（可选）
   */
  const recordProductView = async ({
    openId,
    boutiqueId,
    productId,
    nickName,
    avatar
  }: {
    openId: string;
    boutiqueId: string;
    productId: string;
    nickName?: string;
    avatar?: string;
  }) => {
    try {
      console.log('开始记录商品浏览:', {
        openId,
        boutiqueId,
        productId,
        nickName
      });

      // 构建商品浏览记录数据（需要使用完整对象，和 visits 一样）
      const viewData = {
        customer: {
          open_id: openId,
          ...(nickName && { nick_name: nickName }),
          ...(avatar && { avatar: avatar }),
          boutique: {
            id: boutiqueId
          }
        },
        product: {
          id: productId,
          name: '未知商品', // 临时填充必需字段
          price: 0.0 // 临时填充必需字段
        },
        boutique: {
          id: boutiqueId
        }
      };

      console.log('准备创建商品浏览记录，数据:', viewData);

      // 创建商品浏览记录
      const result = await createProductView({
        variables: {
          data: viewData
        }
      });

      console.log('✅ 商品浏览记录创建成功:', result.data);

      return {
        success: true,
        view: result.data?.create_views_item,
        message: '商品浏览记录创建成功'
      };
      
    } catch (error) {
      console.error('❌ 创建商品浏览记录失败:', error);
      
      return {
        success: false,
        error,
        message: `创建商品浏览记录失败: ${error instanceof Error ? error.message : '未知错误'}`
      };
    }
  };

  /**
   * 获取客户信息（通过 open_id 和精品店）
   */
  const getCustomerByOpenid = (openId: string, boutiqueId: string) => {
    return useQuery(GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE, {
      variables: { open_id: openId, boutique_id: boutiqueId },
      skip: !openId || !boutiqueId
    });
  };

  /**
   * 获取客户的商品浏览历史
   */
  const getCustomerProductViews = (customerId: string, options?: { limit?: number; offset?: number }) => {
    return useQuery(GET_CUSTOMER_PRODUCT_VIEWS, {
      variables: { 
        customer_id: customerId, 
        limit: options?.limit || 20,
        offset: options?.offset || 0
      },
      skip: !customerId
    });
  };

  /**
   * 获取商品的浏览统计
   */
  const getProductViewStats = (productId: string, boutiqueId: string) => {
    return useQuery(GET_PRODUCT_VIEW_STATS, {
      variables: { product_id: productId, boutique_id: boutiqueId },
      skip: !productId || !boutiqueId
    });
  };

  /**
   * 获取精品店的商品浏览统计
   */
  const getBoutiqueProductViewStats = (
    boutiqueId: string, 
    options?: { dateFrom?: string; dateTo?: string }
  ) => {
    return useQuery(GET_BOUTIQUE_PRODUCT_VIEW_STATS, {
      variables: { 
        boutique_id: boutiqueId,
        date_from: options?.dateFrom,
        date_to: options?.dateTo
      },
      skip: !boutiqueId
    });
  };

  return {
    recordProductView,
    getCustomerByOpenid,
    getCustomerProductViews,
    getProductViewStats,
    getBoutiqueProductViewStats
  };
};