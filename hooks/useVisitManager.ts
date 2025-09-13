import { useLazyQuery, useMutation } from '@apollo/client';
import {
    CREATE_CUSTOMER_SIMPLE,
    CREATE_CUSTOMER_WITH_BOUTIQUE,
    CREATE_VISIT_WITH_FULL_DATA,
    GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE,
    UPDATE_CUSTOMER,
} from '../graphql/business/visits.graphql';
import { WechatUserInfo } from '../utils/wechat-auth';

/**
 * 判断是否需要更新客户信息
 */
function shouldUpdateCustomer(customer: any, wechatUserInfo: WechatUserInfo): boolean {
  return (
    customer.nick_name !== wechatUserInfo.nickname ||
    customer.avatar !== wechatUserInfo.headimgurl
  );
}

/**
 * 访问管理 Hook
 * 
 * 功能：
 * 1. 检查或创建客户记录（每个店铺独立的客户记录）
 * 2. 更新客户信息
 * 3. 创建访问记录
 */
export const useVisitManager = () => {
  const [getCustomerByOpenIdAndBoutique] = useLazyQuery(GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE);
  const [createCustomerSimple] = useMutation(CREATE_CUSTOMER_SIMPLE);
  const [createCustomerWithBoutique] = useMutation(CREATE_CUSTOMER_WITH_BOUTIQUE);
  const [updateCustomer] = useMutation(UPDATE_CUSTOMER);
  const [createVisit] = useMutation(CREATE_VISIT_WITH_FULL_DATA);

  /**
   * 记录访问
   * @param wechatUserInfo 微信用户信息
   * @param boutiqueId 店铺ID
   * @returns 记录结果
   */
  const recordVisit = async (
    wechatUserInfo: WechatUserInfo,
    boutiqueId: string
  ) => {
    try {
      console.log('开始记录访问...');
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
            }
          });
          console.log('客户信息更新完成');
        }

        // 3. 创建访问记录
        const visitResult = await createVisit({
          variables: {
            customer: {
              id: customer.id,
              wechat_openid: customer.wechat_openid,
              wechat_unionid: customer.wechat_unionid,
              wechat_avatar: customer.wechat_avatar,
              wechat_nickname: customer.wechat_nickname,
              phone: customer.phone,
              created_time: customer.created_time,
              boutique: customer.boutique ? {
                id: customer.boutique.id,
                name: customer.boutique.name,
                auth_config: customer.boutique.auth_config
              } : null
            },
            boutique: {
              id: boutiqueId,
              name: customer.boutique?.name || '未知店铺',
              auth_config: customer.boutique?.auth_config || {}
            }
          }
        });

        if (visitResult.errors) {
          console.error('创建访问记录失败:', visitResult.errors);
          throw new Error('创建访问记录失败');
        }

        const visit = visitResult.data?.create_visits_item;
        console.log('✅ 成功创建访问记录:', visit);

        return {
          success: true,
          customerId: customer.id,
          visitId: visit?.id,
          visitInfo: visit,
          isNewCustomerForBoutique: false,
          boutiqueId: boutiqueId,
          message: '客户记录已存在，成功创建访问记录',
          customerInfo: customer
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
        
        // 3. 创建访问记录
        const customer = newCustomer.create_customers_item;
        const visitResult = await createVisit({
          variables: {
            customer: {
              id: customer.id,
              wechat_openid: customer.wechat_openid,
              wechat_unionid: customer.wechat_unionid,
              wechat_avatar: customer.wechat_avatar,
              wechat_nickname: customer.wechat_nickname,
              phone: customer.phone,
              created_time: customer.created_time,
              boutique: customer.boutique ? {
                id: customer.boutique.id,
                name: customer.boutique.name,
                auth_config: customer.boutique.auth_config
              } : null
            },
            boutique: {
              id: boutiqueId,
              name: customer.boutique?.name || '未知店铺',
              auth_config: customer.boutique?.auth_config || {}
            }
          }
        });

        if (visitResult.errors) {
          console.error('创建访问记录失败:', visitResult.errors);
          throw new Error('创建访问记录失败');
        }

        const visit = visitResult.data?.create_visits_item;
        console.log('✅ 成功创建访问记录:', visit);
        
        return {
          success: true,
          customerId: customerId,
          visitId: visit?.id,
          visitInfo: visit,
          isNewCustomerForBoutique: true,
          boutiqueId: boutiqueId,
          message: '创建客户记录并成功关联店铺，成功创建访问记录',
          customerInfo: customer
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