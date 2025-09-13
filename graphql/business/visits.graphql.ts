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



// 更新客户的boutique关联（暂时注释，解决语法问题）
/*
export const UPDATE_CUSTOMER_BOUTIQUE = gql`
  mutation UpdateCustomerBoutique($customer_id: ID!, $boutique_id: GraphQLStringOrFloat!) {
    update_customers_item(
      id: $customer_id, 
      data: { 
        boutique: $boutique_id 
      }
    ) {
      id
      open_id
      boutique {
        id
        name
      }
    }
  }
`;
*/

// 更新客户信息
export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($id: ID!, $nick_name: String, $avatar: String, $sex: Int) {
    update_customers_item(id: $id, data: {
      nick_name: $nick_name,
      avatar: $avatar,
      sex: $sex
    }) {
      id
      open_id
      nick_name
      avatar
      sex
      boutique {
        id
        name
      }
      date_updated
    }
  }
`;

// 创建访问记录（暂时跳过，Directus关联字段语法复杂）
// 将在后续版本中使用REST API或其他方法解决
/*
export const CREATE_VISIT_SIMPLE = gql`
  mutation CreateVisitSimple($customer_id: GraphQLStringOrFloat!, $boutique_id: GraphQLStringOrFloat!) {
    create_visits_item(data: {
      customer: $customer_id,
      boutique: $boutique_id
    }) {
      id
      date_created
    }
  }
`;
*/

// 查询用户的访问历史
export const GET_USER_VISITS = gql`
  query GetUserVisits($customer_id: GraphQLStringOrFloat!, $limit: Int, $offset: Int) {
    visits(
      filter: { customer: { id: { _eq: $customer_id } } }
      sort: ["-date_created"]
      limit: $limit
      offset: $offset
    ) {
      id
      date_created
      boutique {
        id
        name
        address
        main_image
      }
    }
  }
`;

// 查询店铺的客户列表（直接查询customers表）
export const GET_BOUTIQUE_CUSTOMERS = gql`
  query GetBoutiqueCustomers($boutique_id: GraphQLStringOrFloat!, $limit: Int, $offset: Int) {
    customers(
      filter: { boutique: { id: { _eq: $boutique_id } } }
      sort: ["-date_created"]
      limit: $limit
      offset: $offset
    ) {
      id
      open_id
      nick_name
      avatar
      sex
      date_created
      boutique {
        id
        name
      }
    }
  }
`;

// 查询店铺的客户数量
export const GET_BOUTIQUE_CUSTOMER_COUNT = gql`
  query GetBoutiqueCustomerCount($boutique_id: GraphQLStringOrFloat!) {
    customers_aggregated(
      filter: { boutique: { id: { _eq: $boutique_id } } }
    ) {
      countAll
    }
  }
`;

// 查询店铺的访问记录（为店主提供访客统计）
export const GET_BOUTIQUE_VISITS = gql`
  query GetBoutiqueVisits($boutique_id: GraphQLStringOrFloat!, $limit: Int, $offset: Int) {
    visits(
      filter: { boutique: { id: { _eq: $boutique_id } } }
      sort: ["-date_created"]
      limit: $limit
      offset: $offset
    ) {
      id
      date_created
      customer {
        id
        nick_name
        avatar
        boutique {
          id
          name
        }
      }
    }
  }
`;