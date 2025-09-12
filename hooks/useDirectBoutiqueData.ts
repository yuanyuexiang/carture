import { useBoutiqueContext } from '../contexts/BoutiqueContext';
import {
    useGetBoutiqueByIdQuery,
    useGetCategoriesByBoutiqueQuery
} from '../generated/business-graphql';

/**
 * 直接通过 URL 参数的 boutique_id 获取店铺和分类信息的 Hook
 * 替代原有的基于用户认证的逻辑
 */
export const useDirectBoutiqueData = () => {
  const { boutiqueId, loading: contextLoading } = useBoutiqueContext();

  // 将字符串类型的 boutiqueId 转换为数字
  const numericBoutiqueId = boutiqueId ? parseInt(boutiqueId, 10) : null;

  // 直接通过 boutique_id 获取店铺信息
  const { 
    data: boutiqueData, 
    loading: boutiqueLoading, 
    error: boutiqueError 
  } = useGetBoutiqueByIdQuery({
    variables: { boutiqueId: numericBoutiqueId },
    skip: !numericBoutiqueId,
    fetchPolicy: 'cache-and-network', // 确保获取最新数据
  });

  // 直接通过 boutique_id 获取分类信息
  const { 
    data: categoriesData, 
    loading: categoriesLoading, 
    error: categoriesError 
  } = useGetCategoriesByBoutiqueQuery({
    variables: { 
      boutiqueFilter: { 
        boutique_id: { id: { _eq: numericBoutiqueId } } 
      } 
    },
    skip: !numericBoutiqueId,
    fetchPolicy: 'cache-and-network', // 确保获取最新数据
  });

  // 检查是否完成加载但没有找到店铺
  // 情况1: 没有提供 boutique_id 参数
  // 情况2: 提供了 boutique_id 但查询后没有找到店铺
  const boutiqueNotFound = !contextLoading && (
    (!boutiqueId) || // 没有 boutique_id 参数
    (!boutiqueLoading && boutiqueId && (!boutiqueData?.boutiques || boutiqueData.boutiques.length === 0) && !boutiqueError) // 有参数但没找到店铺
  );
  
  return {
    // 店铺信息 - 取第一个结果
    boutique: boutiqueData?.boutiques?.[0] || null,
    boutiqueLoading,
    boutiqueError,
    
    // 分类信息
    categories: categoriesData?.categories || [],
    categoriesLoading,
    categoriesError,
    
    // 综合状态
    loading: contextLoading || boutiqueLoading || categoriesLoading,
    error: boutiqueError || categoriesError,
    
    // 是否有数据
    hasBoutique: !!(boutiqueData?.boutiques?.[0]),
    hasCategories: (categoriesData?.categories?.length || 0) > 0,
    
    // 店铺不存在状态
    boutiqueNotFound,
    
    // 调试信息
    debug: {
      boutiqueId,
      contextLoading,
      boutiqueLoading,
      categoriesLoading,
      boutiqueData: boutiqueData?.boutiques?.[0],
      categoriesCount: categoriesData?.categories?.length || 0,
      boutiqueNotFound
    }
  };
};