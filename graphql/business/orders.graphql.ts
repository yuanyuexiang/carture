import { gql } from '@apollo/client';

// 创建订单 (现在包含产品信息)
export const CREATE_ORDER = gql`
  mutation CreateOrder($orderData: create_orders_input!) {
    create_orders_item(data: $orderData) {
      id
      total_price
      status
      date_created
      product {
        id
        name
        price
        main_image
      }
      boutique_id {
        id
        name
      }
    }
  }
`;

// 获取用户订单列表 (通过customers的open_id关系)
export const GET_USER_ORDERS = gql`
  query GetUserOrders($openId: String!) {
    orders(filter: { customers_id: { open_id: { _eq: $openId } } }, sort: ["-date_created"]) {
      id
      total_price
      status
      date_created
      product {
        id
        name
        price
        main_image
      }
      boutique_id {
        id
        name
      }
    }
  }
`;

// 获取订单详情
export const GET_ORDER_BY_ID = gql`
  query GetOrderById($orderId: GraphQLStringOrFloat!) {
    orders(filter: { id: { _eq: $orderId } }, limit: 1) {
      id
      total_price
      status
      date_created
      product {
        id
        name
        price
        main_image
        description
      }
      boutique_id {
        id
        name
      }
    }
  }
`;

// 删除订单 (简化版，不需要处理订单项)
export const DELETE_ORDER = gql`
  mutation DeleteOrder($orderId: ID!) {
    delete_orders_item(id: $orderId) {
      id
    }
  }
`;