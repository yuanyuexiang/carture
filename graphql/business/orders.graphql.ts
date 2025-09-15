import { gql } from '@apollo/client';

// 创建订单
export const CREATE_ORDER = gql`
  mutation CreateOrder($orderData: create_orders_input!) {
    create_orders_item(data: $orderData) {
      id
      total_price
      status
      date_created
      boutique_id {
        id
        name
      }
    }
  }
`;

// 创建订单项
export const CREATE_ORDER_ITEM = gql`
  mutation CreateOrderItem($orderItemData: create_order_items_input!) {
    create_order_items_item(data: $orderItemData) {
      id
      product_id {
        id
        name
        price
        main_image
      }
      quantity
      price
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
      boutique_id {
        id
        name
      }
    }
  }
`;

// 获取订单的商品项
export const GET_ORDER_ITEMS = gql`
  query GetOrderItems($orderId: GraphQLStringOrFloat!) {
    order_items(filter: { order_id: { id: { _eq: $orderId } } }) {
      id
      quantity
      price
      product_id {
        id
        name
        price
        main_image
        description
      }
    }
  }
`;

// 删除订单
export const DELETE_ORDER = gql`
  mutation DeleteOrder($orderId: ID!) {
    delete_orders_item(id: $orderId) {
      id
    }
  }
`;

// 删除订单项
export const DELETE_ORDER_ITEM = gql`
  mutation DeleteOrderItem($orderItemId: ID!) {
    delete_order_items_item(id: $orderItemId) {
      id
    }
  }
`;