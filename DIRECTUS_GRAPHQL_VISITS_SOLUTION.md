# Directus 11.10.0 GraphQL Visits 创建解决方案

## 🎯 问题描述

当前 Directus GraphQL 要求在创建 visits 记录时提供完整的 `create_customers_input` 对象，而不接受简单的 customer ID 引用。这导致以下错误：

```
Field "create_customers_input.open_id" of required type "String!" was not provided.
```

## 🛠 解决方案：Directus 11.10.0 配置步骤

### 1. 访问 Directus Admin 面板

1. 登录到 Directus Admin: `https://forge.matrix-net.tech/admin`
2. 使用管理员账户登录

### 2. 修改 visits 表的关系字段配置

#### 步骤 A：进入数据模型设置
1. 在左侧导航栏中，点击 **齿轮图标 (Settings)**
2. 选择 **Data Model**
3. 找到并点击 **visits** 表

#### 步骤 B：修改 customer 字段
1. 在 visits 表的字段列表中，点击 **customer** 字段
2. 这将打开字段编辑页面

#### 步骤 C：关键配置项 (Directus 11.10.0)
在字段编辑页面中，按以下步骤配置：

**基本设置 (Basic)**:
- **Field Name**: `customer` (保持不变)
- **Type**: `Many-to-One Relation` 

**关系设置 (Relation)**:
- **Related Collection**: `customers`
- **Field on Related Collection**: 应该已经设置为 `visits` 或类似
- 确保关系正确建立

**Interface 设置**:
- **Interface**: 选择 `Select Dropdown` 或 `Many-to-One Relation`
- **Display Template**: 设置为 `{{nick_name}} ({{id}})` 
- **Value Field**: 确保是 `id`

**高级设置 (Advanced)**:
- **Required**: 根据需要设置 (建议为 true)
- **Readonly**: false
- **Hidden**: false

**Schema 设置 (非常重要)**:
- 确保 **Foreign Key Constraint** 正确设置
- **On Delete**: 建议设置为 `SET NULL` 或 `CASCADE`

#### 步骤 D：修改 boutique 字段
重复步骤 B 和 C，对 **boutique** 字段进行相同的配置：

1. 点击 **boutique** 字段
2. 确保配置如下：
   - **Type**: `Many-to-One Relation`
   - **Related Collection**: `boutiques`
   - **Interface**: `Select Dropdown` 或 `Many-to-One Relation`
   - **Display Template**: `{{name}} ({{id}})`
   - **Value Field**: `id`

### 3. 刷新 GraphQL Schema

#### 在 Directus 11.10.0 中刷新 Schema：
1. 回到 **Settings** 页面
2. 找到 **Project Settings**
3. 点击 **Reset Schema Cache** 或重启 Directus 实例

或者通过命令行：
```bash
# 如果使用 Docker
docker restart directus-container

# 如果使用 PM2
pm2 restart directus

# 或者通过 API 刷新缓存
curl -X POST "https://forge.matrix-net.tech/utils/cache/clear" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"
```

### 4. 测试配置是否生效

#### 4.1 检查 GraphQL Schema
1. 访问 GraphQL Playground: `https://forge.matrix-net.tech/graphql`
2. 在右侧 **Schema** 面板中搜索 `create_visits_input`
3. 查看字段定义，应该看到：
```graphql
input create_visits_input {
  customer: ID  # 而不是 create_customers_input
  boutique: ID  # 而不是 create_boutiques_input
  # 其他字段...
}
```

#### 4.2 测试 GraphQL Mutation
在 GraphQL Playground 中测试以下 mutation：

```graphql
mutation TestCreateVisit {
  create_visits_item(data: {
    customer: "1",  # 使用实际的 customer ID
    boutique: "1"   # 使用实际的 boutique ID
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

### 5. 如果上述方法不生效

#### 备选方案：直接修改数据库关系

如果 Admin 面板配置后仍有问题，可能需要直接检查数据库：

```sql
-- 检查 visits 表结构
DESCRIBE visits;

-- 确保外键正确设置
SHOW CREATE TABLE visits;

-- 如果需要，修改外键关系
ALTER TABLE visits 
MODIFY COLUMN customer INT,
MODIFY COLUMN boutique INT,
ADD CONSTRAINT fk_visits_customer 
    FOREIGN KEY (customer) REFERENCES customers(id) ON DELETE SET NULL,
ADD CONSTRAINT fk_visits_boutique 
    FOREIGN KEY (boutique) REFERENCES boutiques(id) ON DELETE SET NULL;
```

然后在 Directus Admin 中：
1. Settings → Data Model
2. 点击 **Refresh** 或 **Reload Collections**

### 6. Directus 11.10.0 特定注意事项

#### 权限设置
确保访问记录创建的用户角色有正确权限：
1. Settings → Roles & Permissions
2. 选择相应的角色
3. 在 **visits** 表权限中：
   - **Create**: 允许
   - **Read**: 允许
   - 确保 **customer** 和 **boutique** 字段可读写

#### GraphQL 缓存清理
Directus 11.10.0 可能有 GraphQL 缓存，需要清理：
```bash
# 通过 API 清理缓存
curl -X DELETE "https://forge.matrix-net.tech/utils/cache/clear" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"

# 或重启服务
pm2 restart directus
```

## 🛠 备选解决方案 2：自定义 GraphQL Resolver

如果字段配置仍然不能解决问题，可以创建自定义 resolver：

### 创建自定义 Hook

在 Directus 的 `extensions/hooks/` 目录下创建 `create-visit.js`：

```javascript
export default ({ filter, action }) => {
  // 扩展 GraphQL Schema
  filter('graphql.schema', (schema) => {
    // 添加自定义 mutation
    schema.typeDefs += `
      extend type Mutation {
        createVisitRecord(customerId: ID!, boutiqueId: ID!): visits
      }
    `;
    
    // 添加 resolver
    schema.resolvers.Mutation.createVisitRecord = async (
      _, 
      { customerId, boutiqueId }, 
      { services, accountability }
    ) => {
      const { ItemsService } = services;
      const visitsService = new ItemsService('visits', { accountability });
      
      try {
        // 直接创建记录
        const result = await visitsService.createOne({
          customer: customerId,
          boutique: boutiqueId
        });
        
        // 返回完整记录
        return await visitsService.readOne(result, {
          fields: ['*', 'customer.id', 'customer.nick_name', 'boutique.id', 'boutique.name']
        });
      } catch (error) {
        console.error('创建访问记录失败:', error);
        throw error;
      }
    };
    
    return schema;
  });
};
```

### 重启 Directus
```bash
pm2 restart directus
# 或
docker restart directus-container
```

### 使用自定义 Mutation
```graphql
mutation CreateVisitCustom($customerId: ID!, $boutiqueId: ID!) {
  createVisitRecord(customerId: $customerId, boutiqueId: $boutiqueId) {
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

## 🔧 前端代码更新

一旦后端配置完成，我将更新前端代码：

```typescript
// 在 visits.graphql.ts 中添加
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

// 或者如果使用自定义端点
export const CREATE_VISIT_CUSTOM = gql`
  mutation CreateVisitCustom($customerId: ID!, $boutiqueId: ID!) {
    createVisit(customerId: $customerId, boutiqueId: $boutiqueId) {
      id
      date_created
    }
  }
`;
```

## ✅ 推荐方案

**推荐使用解决方案 1**，因为：
1. 最简单直接
2. 不需要自定义代码
3. 符合 Directus 的标准做法
4. 维护成本最低

请告诉我您希望使用哪种方案，或者如果您在配置过程中遇到任何问题！

## 🚨 注意事项

- 修改配置前请备份 Directus 数据库
- 测试环境先验证后再应用到生产环境
- 修改后需要重新生成 GraphQL schema
- 前端代码需要相应更新以使用新的 mutation 语法