import { gql } from '@apollo/client';

// 安全版本的用户订单查询 - 修正字段名以匹配schema
export const GET_USER_ORDERS_SAFE = gql`
  query GetUserOrdersSafe($openId: String!) {
    orders(filter: { customer: { open_id: { _eq: $openId } } }, sort: ["-date_created"], limit: 5) {
      id
      total_price
      status
      date_created
      # 使用正确的关联字段名
      product {
        id
        name
        price
        main_image
        boutique_id {
          id
          name
        }
      }
    }
  }
`;

// 更简单的测试查询 - 只获取基础字段，不查询关联
export const GET_USER_ORDERS_MINIMAL = gql`
  query GetUserOrdersMinimal($openId: String!) {
    orders(filter: { customer: { open_id: { _eq: $openId } } }, limit: 3) {
      id
      total_price
      status
    }
  }
`;