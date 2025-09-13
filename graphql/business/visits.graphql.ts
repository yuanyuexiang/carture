import { gql } from '@apollo/client';

// 方案1：查询特定店铺的客户记录（基于 open_id + boutique 组合）
export const GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE = gql`
  query GetCustomerByOpenIdAndBoutique($open_id: String!, $boutique_id: GraphQLStringOrFloat!) {
    customers(
      filter: { 
        _and: [
          { open_id: { _eq: $open_id } }
          { boutique: { id: { _eq: $boutique_id } } }
        ]
      }
      limit: 1
    ) {
      id
      open_id
      nick_name
      avatar
      sex
      status
      boutique {
        id
        name
      }
    }
  }
`;

// 按 open_id 查询客户记录（用于兼容性检查）
export const GET_CUSTOMER_BY_OPENID = gql`
  query GetCustomerByOpenId($open_id: String!) {
    customers(filter: { open_id: { _eq: $open_id } }) {
      id
      open_id
      nick_name
      avatar
      boutique {
        id
        name
      }
      date_created
    }
  }
`;

// 简化版创建客户记录 - 不包含boutique关联，先测试基础功能
export const CREATE_CUSTOMER_SIMPLE = gql`
  mutation CreateCustomerSimple($open_id: String!, $nick_name: String, $avatar: String, $sex: Int) {
    create_customers_item(data: {
      open_id: $open_id,
      nick_name: $nick_name,
      avatar: $avatar,
      sex: $sex,
      status: "active"
    }) {
      id
      open_id
      nick_name
      avatar
      sex
      date_created
    }
  }
`;

// 创建包含店铺关联的客户 - 根据生成的TypeScript类型实现
export const CREATE_CUSTOMER_WITH_BOUTIQUE = gql`
  mutation CreateCustomerWithBoutique(
    $open_id: String!, 
    $nick_name: String, 
    $avatar: String, 
    $sex: Int,
    $boutiqueId: ID!
  ) {
    create_customers_item(data: {
      open_id: $open_id,
      nick_name: $nick_name,
      avatar: $avatar,
      sex: $sex,
      status: "active",
      boutique: {
        id: $boutiqueId
      }
    }) {
      id
      open_id
      nick_name
      avatar
      sex
      boutique {
        id
        name
        code
      }
      date_created
    }
  }
`;

// 更新客户信息
export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($id: ID!, $nick_name: String, $avatar: String, $sex: Int) {
    update_customers_item(id: $id, data: {
      nick_name: $nick_name,
      avatar: $avatar,
      sex: $sex
    }) {
      id
      nick_name
      avatar
      sex
      date_updated
    }
  }
`;

// 创建访问记录 - 暂时注释掉，因为Directus GraphQL需要完整的customer对象而不仅仅是ID
// 创建访问记录 - 使用完整对象（基于测试结果确定的正确方法）
export const CREATE_VISIT_WITH_FULL_DATA = gql`
  mutation CreateVisitWithFullData(
    $customerData: create_customers_input!, 
    $boutiqueData: create_boutiques_input!
  ) {
    create_visits_item(data: {
      customer: $customerData,
      boutique: $boutiqueData
    }) {
      id
      date_created
      customer {
        id
        nick_name
      }
      boutique {
        id
        name
      }
    }
  }
`;

/*
【后端任务】需要在 Directus 后端实现以下功能之一：

方案1: 修改 Directus 配置，允许在 visits 创建时使用 customer ID 而不是完整对象：
export const CREATE_VISIT_SIMPLE = gql`
  mutation CreateVisitSimple($customerId: ID!, $boutiqueId: ID!) {
    create_visits_item(data: {
      customer: $customerId,
      boutique: $boutiqueId
    }) {
      id
      date_created
      customer {
        id
        nick_name
      }
      boutique {
        id
        name
      }
    }
  }
`;

方案2: 或者提供一个自定义 GraphQL 端点来创建 visits：
export const CREATE_VISIT_CUSTOM = gql`
  mutation CreateVisitCustom($customerId: ID!, $boutiqueId: ID!) {
    createVisit(customerId: $customerId, boutiqueId: $boutiqueId) {
      id
      date_created
    }
  }
`;

当前问题: Directus GraphQL 要求 customer: BusinessCreate_Customers_Input，
这需要完整的客户数据（包括 open_id 等必需字段），但我们只有 customer ID。

详细解决方案请查看：DIRECTUS_GRAPHQL_VISITS_SOLUTION.md
*/