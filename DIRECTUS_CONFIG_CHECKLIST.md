# 🔍 Directus 11.10.0 配置检查清单

## 📋 当前状态检查

### 1. 登录并检查访问权限
- [ ] 能够登录 Directus Admin (`https://forge.matrix-net.tech/admin`)
- [ ] 能够看到左侧的设置图标 (⚙️)
- [ ] 能够访问 Data Model 页面

### 2. 检查 visits 表结构
- [ ] 在 Data Model 中能找到 `visits` 表
- [ ] 表中有 `customer` 字段
- [ ] 表中有 `boutique` 字段
- [ ] 两个字段都显示为关系类型

### 3. 检查字段当前配置

#### customer 字段当前状态：
- [ ] 类型显示为 "Many-to-One Relation"
- [ ] 关联到 customers 表
- [ ] Interface 设置检查
- [ ] Display Template 检查

#### boutique 字段当前状态：
- [ ] 类型显示为 "Many-to-One Relation"  
- [ ] 关联到 boutiques 表
- [ ] Interface 设置检查
- [ ] Display Template 检查

### 4. GraphQL Schema 验证
- [ ] 访问 GraphQL Playground (`https://forge.matrix-net.tech/graphql`)
- [ ] 在 Schema 中找到 `create_visits_input`
- [ ] customer 字段类型为 `ID` (不是 `create_customers_input`)
- [ ] boutique 字段类型为 `ID` (不是 `create_boutiques_input`)

### 5. 权限检查
- [ ] 当前用户对 visits 表有 Create 权限
- [ ] 当前用户对 visits 表有 Read 权限
- [ ] customer 和 boutique 字段可读写

## 🚨 问题诊断

### 如果看不到设置菜单：
**可能原因**: 权限不足
**解决方案**: 
1. 确认使用管理员账户
2. 检查用户角色权限设置

### 如果字段显示为普通字段而不是关系：
**可能原因**: 关系配置丢失
**解决方案**: 
1. 重新建立字段关系
2. 检查数据库外键约束

### 如果 GraphQL Schema 仍显示复杂类型：
**可能原因**: 缓存未清理
**解决方案**: 
1. 重启 Directus 服务
2. 清理浏览器缓存

## 📱 快速操作步骤（给管理员）

### 最小化配置步骤：
1. **登录**: `https://forge.matrix-net.tech/admin`
2. **导航**: 设置 ⚙️ → Data Model → visits
3. **编辑 customer 字段**:
   - Interface: Many-to-One
   - Display Template: `{{nick_name}} ({{id}})`
4. **编辑 boutique 字段**:
   - Interface: Many-to-One  
   - Display Template: `{{name}} ({{id}})`
5. **保存更改**
6. **重启服务**: `pm2 restart directus`
7. **测试**: GraphQL Playground 运行测试 mutation

## 🧪 测试用例

### 测试 Mutation（复制粘贴到 GraphQL Playground）：
```graphql
# 首先查询一个现有的 customer ID
query GetCustomers {
  customers(limit: 1) {
    id
    nick_name
  }
}

# 然后查询一个现有的 boutique ID  
query GetBoutiques {
  boutiques(limit: 1) {
    id
    name
  }
}

# 最后测试创建 visit（使用上面查询到的真实 ID）
mutation TestCreateVisit {
  create_visits_item(data: {
    customer: "实际的customer_id"
    boutique: "实际的boutique_id"
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

## ✅ 成功标志

配置成功的标志：
- [ ] GraphQL Mutation 执行成功
- [ ] 返回了新创建的 visit 记录
- [ ] 没有 `open_id` 或 `create_customers_input` 错误
- [ ] customer 和 boutique 关系正确显示

## 📞 获取帮助

如果任何步骤出现问题，请提供：
1. **当前步骤**: 在哪一步遇到问题
2. **错误信息**: 完整的错误消息
3. **屏幕截图**: Admin 面板的配置页面
4. **GraphQL 结果**: 测试 mutation 的返回结果

这样我可以提供更精确的帮助！