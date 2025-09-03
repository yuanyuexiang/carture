// ================ 业务端点 GraphQL 导出 (/graphql) ================
export * from './business/boutiques.graphql';
export * from './business/products.graphql';

// ================ 系统端点 GraphQL 导出 (/graphql/system) ================
export * from './system/users.graphql';

// ================ 类型汇总 ================
// 这里可以导出一些组合类型或者通用类型

// 用于组合查询的用户店铺信息
export interface UserWithBoutique {
  user: {
    id: string;
    email: string;
    first_name?: string;
    last_name?: string;
  };
  boutique?: {
    id: string;
    name: string;
    address?: string;
    main_image?: string;
    stars?: number;
    status?: string;
  };
}
