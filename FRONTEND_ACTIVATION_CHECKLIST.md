# 🚀 Directus 配置完成后的前端激活清单

## 📋 配置验证步骤

### 1. 测试 GraphQL Mutation

在 GraphQL Playground 或 GraphiQL (`https://forge.matrix-net.tech/graphql`) 中测试：

```graphql
mutation TestCreateVisit {
  create_visits_item(data: {
    customer: "existing_customer_id_here",
    boutique: "existing_boutique_id_here"
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
```

**预期结果**: 成功创建访问记录，不再出现 `open_id` 错误。

### 2. 前端代码激活步骤

一旦后端测试通过，按以下顺序激活前端代码：

#### 步骤 A: 激活 GraphQL Mutation
在 `graphql/business/visits.graphql.ts` 中：

1. 取消注释 `CREATE_VISIT_SIMPLE` 或 `CREATE_VISIT_CUSTOM`
2. 选择使用的版本（标准 vs 自定义端点）

```typescript
// 取消注释这部分：
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
```

#### 步骤 B: 运行代码生成
```bash
npx graphql-codegen --config codegen.yml
```

#### 步骤 C: 激活 Hook 中的 Mutation
在 `hooks/useVisitManager.ts` 中：

1. 取消注释：
```typescript
const [createVisit] = useMutation(CREATE_VISIT_SIMPLE);
```

2. 取消注释 `createVisitRecord` 函数

#### 步骤 D: 激活访问记录创建调用
在 `recordVisit` 函数中，取消注释两个位置的访问记录创建代码：

1. 现有客户的访问记录创建
2. 新客户的访问记录创建

#### 步骤 E: 更新导入
在 `hooks/useVisitManager.ts` 顶部添加：
```typescript
import {
    CREATE_CUSTOMER_SIMPLE,
    CREATE_CUSTOMER_WITH_BOUTIQUE,
    CREATE_VISIT_SIMPLE, // 添加这行
    GET_CUSTOMER_BY_OPENID_AND_BOUTIQUE,
    UPDATE_CUSTOMER,
} from '../graphql/business/visits.graphql';
```

### 3. 测试流程

#### 本地测试
1. 启动应用：`npm start`
2. 打开浏览器开发者工具
3. 使用微信OAuth登录
4. 检查控制台日志，确认访问记录创建成功

#### 数据库验证
检查 `visits` 表是否有新记录：
```sql
SELECT v.*, c.nick_name, b.name as boutique_name 
FROM visits v 
LEFT JOIN customers c ON v.customer = c.id 
LEFT JOIN boutiques b ON v.boutique = b.id 
ORDER BY v.date_created DESC 
LIMIT 10;
```

### 4. 回滚计划

如果出现问题，快速回滚：

1. 重新注释所有访问记录相关代码
2. 运行 `npx graphql-codegen --config codegen.yml`
3. 应用仍可正常运行（只是没有访问记录）

### 5. 成功指标

✅ GraphQL mutation 测试成功  
✅ 代码生成无错误  
✅ TypeScript 编译通过  
✅ 应用正常启动  
✅ 微信登录后能创建访问记录  
✅ 数据库 visits 表有新数据  
✅ 控制台日志显示创建成功  

## 📞 需要帮助？

配置过程中遇到任何问题，请提供：
1. 具体的错误信息
2. GraphQL playground 的测试结果
3. 浏览器控制台的错误日志

我将立即协助解决！