# 📱 Directus 11.10.0 可视化操作指南

## 🎯 目标：修改 visits 表字段配置

### 第一步：登录 Directus Admin

1. 打开浏览器，访问：`https://forge.matrix-net.tech/admin`
2. 输入管理员用户名和密码登录

### 第二步：进入数据模型设置

```
1. 在左侧导航栏最下方，点击 【齿轮图标 ⚙️】
2. 从弹出菜单中选择 【Data Model】
```

### 第三步：找到并编辑 visits 表

```
1. 在数据模型页面中，找到 【visits】 表
2. 点击 【visits】 进入该表的详情页面
```

### 第四步：修改 customer 字段

```
1. 在 visits 表的字段列表中，找到 【customer】 字段
2. 点击字段名右侧的 【编辑图标 ✏️】 或直接点击字段名
```

#### 在字段编辑页面进行以下设置：

**基础信息 (General) 标签页：**
- Key: `customer` (不要修改)
- Type: 确保显示为 `Many-to-One Relation`

**接口 (Interface) 标签页：**
- Interface: 选择 `Many-to-One`
- Display Template: 输入 `{{nick_name}} ({{id}})`
- 如果有 "Enable Create" 选项，可以取消勾选

**关系 (Relation) 标签页：**
- Related Collection: 确保设置为 `customers`
- Foreign Key Field: 应该是 `customer`
- One Collection Field: 可能是 `visits` 或留空

**验证 (Validation) 标签页：**
- Required: 根据需要勾选（建议勾选）

**高级 (Advanced) 标签页：**
- 确保没有特殊限制影响 GraphQL

### 第五步：修改 boutique 字段

重复第四步的操作，对 `boutique` 字段进行配置：
- Display Template 设置为: `{{name}} ({{id}})`
- Related Collection 设置为: `boutiques`

### 第六步：保存并应用更改

```
1. 点击页面右上角的 【Save】 按钮保存 customer 字段
2. 重复保存 boutique 字段的更改
3. 回到 Data Model 主页面
```

### 第七步：刷新 Schema 缓存

```
方式一：通过 Admin 面板
1. 还是在 Settings 中，找到 【Project Settings】
2. 如果有 "Clear Cache" 或 "Refresh Schema" 按钮，点击它

方式二：重启 Directus 服务（推荐）
```

如果您有服务器访问权限：
```bash
# 查找 Directus 进程
pm2 list

# 重启 Directus
pm2 restart directus

# 或者如果使用 Docker
docker restart directus-container
```

### 第八步：验证配置

#### 8.1 检查 GraphQL Schema
1. 访问：`https://forge.matrix-net.tech/graphql`
2. 在右侧 Schema 面板中搜索 `create_visits_input`
3. 查看是否变成：
```graphql
input create_visits_input {
  customer: ID      # ← 应该是 ID 类型
  boutique: ID      # ← 应该是 ID 类型
  date_created: Date
  # ...其他字段
}
```

#### 8.2 测试 Mutation
在 GraphQL Playground 中运行：
```graphql
mutation TestVisitCreation {
  create_visits_item(data: {
    customer: "1"
    boutique: "1"
  }) {
    id
    date_created
  }
}
```

**预期结果**: 不再出现 `open_id` 相关错误

## 🚨 常见问题排除

### 问题1：找不到 Settings 菜单
- **解决**: 确保使用管理员账户登录，普通用户可能看不到设置选项

### 问题2：字段类型无法修改
- **解决**: 可能需要先删除现有关系，再重新建立

### 问题3：GraphQL Schema 没有更新
- **解决**: 
  1. 重启 Directus 服务
  2. 清除浏览器缓存
  3. 等待几分钟让系统自动刷新

### 问题4：权限错误
- **解决**: 检查角色权限，确保对 visits 表有完整的 CRUD 权限

## 📞 需要帮助？

如果按照以上步骤操作后仍有问题，请提供：
1. 您在哪一步遇到困难
2. 屏幕截图（如果可能）
3. 错误信息的具体内容
4. 当前看到的字段配置截图

我将根据具体情况提供进一步的协助！

## ✅ 成功标志

配置成功后，您应该能看到：
1. visits 表的 customer 和 boutique 字段显示为 "Many-to-One Relation"
2. GraphQL Schema 中 `create_visits_input` 的字段类型为 `ID`
3. GraphQL Mutation 测试成功，无 `open_id` 错误