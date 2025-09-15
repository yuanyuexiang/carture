import { gql } from '@apollo/client';

// 安全版本的用户订单查询 - 用于调试GraphQL问题
export const GET_USER_ORDERS_SAFE = gql`
  query GetUserOrdersSafe($openId: String!) {
    orders(filter: { customer: { open_id: { _eq: $openId } } }, sort: ["-date_created"], limit: 5) {
      id
      total_price
      status
      date_created
      # 先注释掉可能有问题的关联字段
      # product {
      #   id
      #   name
      #   price
      #   main_image
      # }
      # boutique {
      #   id
      #   name
      # }
    }
  }
`;

// 更简单的测试查询 - 只获取基础字段
export const GET_USER_ORDERS_MINIMAL = gql`
  query GetUserOrdersMinimal($openId: String!) {
    orders(filter: { customer: { open_id: { _eq: $openId } } }, limit: 3) {
      id
      total_price
      status
    }
  }
`;