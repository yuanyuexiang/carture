# GraphQL 项目结构规范

本文档定义了 Carture 项目中 GraphQL 文件的组织结构和命名规范。

## 📁 目录结构

```
graphql/
├── business/                    # 业务端点 (/graphql) 的查询
│   ├── products.graphql.ts     # 商品相关查询
│   ├── boutiques.graphql.ts    # 店铺相关查询
│   ├── categories.graphql.ts   # 分类相关查询
│   └── orders.graphql.ts       # 订单相关查询
├── system/                     # 系统端点 (/graphql/system) 的查询
│   ├── users.graphql.ts        # 用户管理查询
│   ├── auth.graphql.ts         # 认证相关查询
│   └── permissions.graphql.ts  # 权限管理查询
└── index.ts                    # 统一导出文件
```

## 📝 命名规范

### 文件命名
- **统一后缀**：`<entity>.graphql.ts`
- **实体名称**：使用复数形式，如 `products`, `users`, `boutiques`
- **功能模块**：按业务功能分组，如 `auth`, `permissions`

### 查询命名
- **查询**：`GET_<ENTITY>`, `GET_<ENTITY>_<ACTION>`
  - 例：`GET_PRODUCTS`, `GET_USER_BOUTIQUE`
- **变更**：`CREATE_<ENTITY>`, `UPDATE_<ENTITY>`, `DELETE_<ENTITY>`
  - 例：`CREATE_BOUTIQUE`, `UPDATE_PRODUCT`
- **订阅**：`SUBSCRIBE_<ENTITY>_<EVENT>`
  - 例：`SUBSCRIBE_ORDER_UPDATES`

## 📋 文件内容结构

每个 `.graphql.ts` 文件应包含以下部分：

```typescript
import { gql } from '@apollo/client';

// ================ 查询 ================
export const GET_ENTITY = gql`...`;

// ================ Mutations ================  
export const CREATE_ENTITY = gql`...`;
export const UPDATE_ENTITY = gql`...`;

// ================ 订阅 ================
export const SUBSCRIBE_ENTITY = gql`...`;

// ================ TypeScript 类型定义 ================
export interface Entity {
  id: string;
  // ...其他字段
}

export interface GetEntityData {
  entities: Entity[];
}

export interface GetEntityVariables {
  // 查询变量类型
}
```

## 🔧 代码生成配置

### codegen.yml 配置
```yaml
generates:
  # 业务端点类型生成
  generated/business-graphql.ts:
    schema: "./schema.graphql"
    documents: "graphql/business/**/*.graphql.ts"
    plugins: [typescript, typescript-operations, typescript-react-apollo]
    config:
      typesPrefix: Business
  
  # 系统端点类型生成  
  generated/system-graphql.ts:
    schema: "https://forge.matrix-net.tech/graphql/system"
    documents: "graphql/system/**/*.graphql.ts"
    plugins: [typescript, typescript-operations, typescript-react-apollo]
    config:
      typesPrefix: System
```

## 🎯 使用规范

### 1. 导入方式
```typescript
// 从统一入口导入
import { GET_PRODUCTS, Product } from '@/graphql';

// 或从具体模块导入
import { GET_USER_BOUTIQUE } from '@/graphql/business/boutiques.graphql';
import { GET_CURRENT_USER } from '@/graphql/system/users.graphql';
```

### 2. Hook 使用
```typescript
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/graphql';

// 业务端点查询（使用默认 Apollo Client）
const { data, loading, error } = useQuery(GET_PRODUCTS);

// 系统端点查询（需要指定 client）
const { data } = useQuery(GET_CURRENT_USER, {
  client: systemApolloClient
});
```

### 3. 错误处理规范
```typescript
const { data, loading, error } = useQuery(GET_ENTITY);

// 处理 loading 状态
if (loading) return <LoadingComponent />;

// 处理错误状态
if (error) return <ErrorComponent error={error.message} />;

// 处理空数据状态
if (!data?.entities?.length) return <EmptyStateComponent />;
```

## 🚀 最佳实践

### 1. 查询优化
- 只查询需要的字段
- 使用分页避免大量数据
- 合理使用缓存策略

### 2. 类型安全
- 始终定义完整的 TypeScript 类型
- 使用 codegen 生成的类型
- 避免使用 `any` 类型

### 3. 模块化
- 按业务功能分组文件
- 避免循环依赖
- 保持单一职责原则

### 4. 文档化
- 为复杂查询添加注释
- 说明查询的用途和参数
- 记录已知限制和注意事项

## 🔄 迁移指南

### 从旧结构迁移到新结构：

1. **移动文件**：将 `.gql` 文件内容复制到对应的 `.graphql.ts` 文件
2. **更新导入**：修改组件中的导入路径
3. **添加类型**：为所有查询添加 TypeScript 类型定义
4. **测试验证**：确保所有查询正常工作
5. **删除旧文件**：清理不再使用的 `.gql` 文件

### 示例迁移：
```bash
# 旧结构
graphql/products.gql
graphql/system.gql

# 新结构
graphql/business/products.graphql.ts
graphql/system/users.graphql.ts
```

---

遵循这个规范可以确保项目的 GraphQL 代码：
- ✅ 结构清晰，易于维护
- ✅ 类型安全，减少错误
- ✅ 模块化良好，便于协作
- ✅ 符合团队开发规范
