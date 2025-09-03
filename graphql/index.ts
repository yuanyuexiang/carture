// ================ GraphQL 类型和查询统一导出 ================
// 
// 所有 GraphQL 查询和类型现在统一使用自动生成的文件：
// - 业务相关：generated/business-graphql.ts (前缀: Business)  
// - 系统相关：generated/system-graphql.ts (前缀: System)
//
// 使用方法：
// import { useGetUserBoutiqueQuery, BusinessGetUserBoutiqueQuery } from '../generated/business-graphql';
// import { useGetCurrentUserQuery, SystemGetCurrentUserQuery } from '../generated/system-graphql';

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
