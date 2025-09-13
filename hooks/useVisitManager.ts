import { useLazyQuery, useMutation } from '@apollo/client';
import {
    CREATE_CUSTOMER_SIMPLE,
    CREATE_CUSTOMER_WITH_BOUTIQUE,
    GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE,
    UPDATE_CUSTOMER,
} from '../graphql/business/visits.graphql';
import { WechatUserInfo } from '../utils/wechat-auth';

/**
 * 访问记录管理 Hook
 * 客户记录使用 GraphQL，访问记录使用 REST API（绕过 Directus GraphQL 限制）
 */
export const useVisitManager = () => {
  const [getCustomerByOpenIdAndBoutique] = useLazyQuery(GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE);
  const [createCustomerSimple] = useMutation(CREATE_CUSTOMER_SIMPLE);
  const [createCustomerWithBoutique] = useMutation(CREATE_CUSTOMER_WITH_BOUTIQUE);
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER);

  /**
   * 通过 REST API 创建访问记录（绕过 GraphQL 限制）
   */
  const createVisitViaREST = async (customerId: string, boutiqueId: string) => {
    try {
      const response = await fetch('https://forge.matrix-net.tech/items/visits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer CCZnVSanwCwzS6edoC8-2ImbzJiZLeAD'
        },
        body: JSON.stringify({
          customer: customerId,
          boutique: boutiqueId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, visitId: data.data.id };
    } catch (error) {
      console.error('REST API 创建访问记录失败:', error);
      return { success: false, error: error instanceof Error ? error.message : '未知错误' };
    }
  };

  /**
   * 检查客户信息是否需要更新
   */
  const shouldUpdateCustomer = (existing: any, wechatInfo: WechatUserInfo): boolean => {
    return (
      existing.nick_name !== wechatInfo.nickname ||
      existing.avatar !== wechatInfo.headimgurl ||
      existing.sex !== wechatInfo.sex
    );
  };

  /**
   * 记录用户访问店铺
   * @param wechatUserInfo 微信用户信息
   * @param boutiqueId 店铺ID
   */
  const recordVisit = async (wechatUserInfo: WechatUserInfo, boutiqueId: string) => {
    try {
      console.log('=== 开始记录用户访问 ===');
      console.log('微信用户:', wechatUserInfo.nickname);
      console.log('店铺ID:', boutiqueId);

      // 1. 查询该用户在这家店铺是否已有客户记录（基于 open_id + boutique）
      const { data: existingCustomer } = await getCustomerByOpenIdAndBoutique({
        variables: { 
          open_id: wechatUserInfo.openid,
          boutique_id: boutiqueId
        },
        fetchPolicy: 'network-only'
      });

      if (existingCustomer?.customers?.length > 0) {
        // 该用户在这家店铺已有客户记录
        const customer = existingCustomer.customers[0];
        const customerId = customer.id;
        console.log('找到现有店铺专属客户记录:', customerId);
        console.log('客户信息:', {
          id: customer.id,
          nickname: customer.nick_name,
          boutique: customer.boutique?.name
        });

        // 检查是否需要更新客户信息
        if (shouldUpdateCustomer(customer, wechatUserInfo)) {
          console.log('客户信息有变化，更新客户记录...');
          await updateCustomer({
            variables: {
              id: customerId,
              nick_name: wechatUserInfo.nickname,
              avatar: wechatUserInfo.headimgurl,
              sex: wechatUserInfo.sex
            }
          });
          console.log('客户信息更新完成');
        }

        // 3. 创建访问记录（使用 REST API）
        console.log('创建访问记录...');
        const visitResult = await createVisitViaREST(customerId, boutiqueId);
        
        if (!visitResult.success) {
          console.warn('访问记录创建失败:', visitResult.error);
        } else {
          console.log('访问记录创建成功:', visitResult.visitId);
        }

        return {
          success: true,
          customerId: customerId,
          isNewCustomerForBoutique: false,
          boutiqueId: boutiqueId,
          message: '找到现有店铺专属客户记录，已记录访问',
          customerInfo: customer,
          visitId: visitResult.success ? visitResult.visitId : undefined
        };
      } else {
        // 该用户在这家店铺还没有客户记录，创建新的客户记录并关联店铺
        console.log('该用户在此店铺没有客户记录，创建新的客户记录并关联店铺');
        
        const { data: newCustomer } = await createCustomerWithBoutique({
          variables: {
            open_id: wechatUserInfo.openid,
            nick_name: wechatUserInfo.nickname,
            avatar: wechatUserInfo.headimgurl,
            sex: wechatUserInfo.sex,
            boutiqueId: boutiqueId
          }
        });

        if (!newCustomer?.create_customers_item?.id) {
          throw new Error('创建客户记录失败');
        }

        const customerId = newCustomer.create_customers_item.id;
        console.log('创建客户记录成功:', customerId);
        console.log('客户记录已成功关联店铺:', newCustomer.create_customers_item.boutique?.name);
        
        // 3. 创建访问记录（使用 REST API）
        console.log('创建访问记录...');
        const visitResult = await createVisitViaREST(customerId, boutiqueId);
        
        if (!visitResult.success) {
          console.warn('访问记录创建失败:', visitResult.error);
        } else {
          console.log('访问记录创建成功:', visitResult.visitId);
        }
        
        return {
          success: true,
          customerId: customerId,
          isNewCustomerForBoutique: true,
          boutiqueId: boutiqueId,
          message: '创建客户记录并成功关联店铺，已记录访问',
          customerInfo: newCustomer.create_customers_item,
          visitId: visitResult.success ? visitResult.visitId : undefined
        };
      }

    } catch (error) {
      console.error('记录访问失败:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      };
    }
  };

  return {
    recordVisit
  };
};