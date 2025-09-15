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
   * 记录访问 - 只创建visit记录，假设customer已经存在
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

      // 1. 查询该用户在这家店铺的客户记录（必须已存在）
      const { data: existingCustomer } = await getCustomerByOpenIdAndBoutique({
        variables: { 
          open_id: wechatUserInfo.openid,
          boutique_id: boutiqueId
        },
        fetchPolicy: 'network-only'
      });

      if (!existingCustomer?.customers?.length) {
        console.log('❌ 该用户在此店铺还没有客户记录，无法创建访问记录');
        return {
          success: false,
          error: 'Customer not found',
          message: '用户还不是该店铺的客户，需要先进入店铺'
        };
      }

      // 2. 使用现有客户记录创建访问记录
      const customer = existingCustomer.customers[0];
      console.log('找到现有店铺专属客户记录:', customer.id);
      
      // 检查是否需要更新客户信息
      if (shouldUpdateCustomer(customer, wechatUserInfo)) {
        console.log('客户信息有变化，更新客户记录...');
        await updateCustomer({
          variables: {
            id: customer.id,
            nick_name: wechatUserInfo.nickname,
            avatar: wechatUserInfo.headimgurl,
          }
        });
        console.log('客户信息更新完成');
      }

      // 3. 创建访问记录
      const visitResult = await createVisit({
        variables: {
          customerData: {
            id: customer.id,
            open_id: customer.open_id,
            nick_name: customer.nick_name,
            avatar: customer.avatar,
            sex: customer.sex,
            boutique: {
              id: customer.boutique.id
            }
          },
          boutiqueData: {
            id: boutiqueId,
            name: customer.boutique?.name || '未知店铺',
            status: customer.boutique?.status || 'open'
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
        message: '基于现有客户记录成功创建访问记录',
        customerInfo: customer
      };

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