# 商品浏览记录功能使用指南

## 功能概述

商品浏览记录功能（Views）用于记录用户浏览商品详情页的行为，与访问记录（Visits）不同：

- **Visits**: 记录用户进入精品店的访问行为
- **Views**: 记录用户浏览商品详情页的行为

## 核心组件

### 1. GraphQL 查询和变更 (`graphql/business/views.graphql.ts`)

包含所有与商品浏览记录相关的 GraphQL 操作：

```typescript
import { CREATE_PRODUCT_VIEW, GET_CUSTOMER_PRODUCT_VIEWS } from '../graphql/business/views.graphql';
```

主要查询：
- `CREATE_PRODUCT_VIEW`: 创建商品浏览记录
- `GET_CUSTOMER_PRODUCT_VIEWS`: 获取客户浏览历史
- `GET_PRODUCT_VIEW_STATS`: 获取商品浏览统计
- `GET_BOUTIQUE_PRODUCT_VIEW_STATS`: 获取精品店的商品浏览统计

### 2. 核心管理 Hook (`hooks/useViewManager.ts`)

提供商品浏览记录的核心功能：

```typescript
import { useViewManager } from '../hooks/useViewManager';

const { recordProductView, getCustomerProductViews } = useViewManager();

// 记录商品浏览
const result = await recordProductView({
  openId: 'wx_user_openid',
  boutiqueId: '1',
  productId: '1',
  nickName: '用户昵称',
  avatar: 'https://avatar.url'
});
```

### 3. WeChat 集成 Hook (`hooks/useProductViewRecorder.ts`)

用于在商品详情页自动记录用户浏览行为：

```typescript
import { useProductViewRecorder } from '../hooks/useProductViewRecorder';

// 在商品详情页组件中使用
function ProductDetailPage({ productId }: { productId: string }) {
  // 自动记录商品浏览
  const { recordView, recordCurrentView } = useProductViewRecorder(productId);
  
  // 也可以手动记录
  const handleManualRecord = async () => {
    const result = await recordView(productId);
    console.log('记录结果:', result);
  };
  
  return (
    <div>
      <h1>商品详情</h1>
      <button onClick={recordCurrentView}>手动记录浏览</button>
    </div>
  );
}
```

## 使用场景

### 1. 商品详情页自动记录

```typescript
import { useProductViewRecorder } from '../hooks/useProductViewRecorder';

function ProductDetailScreen({ route }) {
  const { productId } = route.params;
  
  // 传入 productId，Hook 会自动处理浏览记录
  useProductViewRecorder(productId);
  
  return (
    <View>
      {/* 商品详情内容 */}
    </View>
  );
}
```

### 2. 获取用户浏览历史

```typescript
import { useViewManager } from '../hooks/useViewManager';

function UserViewHistory({ customerId }) {
  const { getCustomerProductViews } = useViewManager();
  
  const { data, loading, error } = getCustomerProductViews(customerId, {
    limit: 20,
    offset: 0
  });
  
  if (loading) return <div>加载中...</div>;
  if (error) return <div>加载失败</div>;
  
  return (
    <div>
      {data?.views.map(view => (
        <div key={view.id}>
          <p>商品: {view.product.name}</p>
          <p>浏览时间: {view.date_created}</p>
        </div>
      ))}
    </div>
  );
}
```

### 3. 商品浏览统计

```typescript
import { useViewManager } from '../hooks/useViewManager';

function ProductStats({ productId, boutiqueId }) {
  const { getProductViewStats } = useViewManager();
  
  const { data } = getProductViewStats(productId, boutiqueId);
  
  const viewCount = data?.views_aggregated[0]?.count?.id || 0;
  
  return (
    <div>
      <p>浏览次数: {viewCount}</p>
      <h3>最近浏览用户:</h3>
      {data?.views.map(view => (
        <p key={view.id}>{view.customer.nick_name} - {view.date_created}</p>
      ))}
    </div>
  );
}
```

## 数据结构

### Views 表字段

- `id`: 浏览记录ID
- `customer`: 关联的客户记录
  - `id`: 客户ID
  - `open_id`: 微信 OpenID
  - `nick_name`: 用户昵称
  - `avatar`: 用户头像
- `product`: 关联的商品记录
  - `id`: 商品ID
  - `name`: 商品名称
  - `brand`: 品牌
- `boutique`: 关联的精品店记录
  - `id`: 精品店ID
  - `name`: 精品店名称
- `date_created`: 浏览时间
- `user_created`: 创建用户

## 事件监听

### 自动记录触发条件

1. **用户授权成功**: 监听 `wechatAuthSuccess` 事件
2. **页面加载**: 在商品详情页加载时自动记录（延迟 1 秒）
3. **用户信息缓存**: 从 localStorage 读取已缓存的用户信息

### 自定义事件

```javascript
// 监听商品浏览记录成功事件
window.addEventListener('productViewRecorded', (event) => {
  console.log('商品浏览记录成功:', event.detail);
  // event.detail 包含: { productId, boutiqueId, userInfo, view }
});

// 监听浏览结束事件
window.addEventListener('productViewEnded', (event) => {
  console.log('浏览时长:', event.detail.duration, 'ms');
  // event.detail 包含: { productId, duration }
});
```

## 注意事项

1. **字段命名**: 使用 `open_id`、`nick_name` 而不是 `openid`、`nickname`
2. **完整对象**: 创建记录时需要传递完整的对象结构，不能只传 ID
3. **必需字段**: Product 对象需要包含 `name` 和 `price` 字段
4. **错误处理**: 所有操作都包含详细的错误日志和返回状态

## 测试验证

✅ 后端测试已通过，成功创建了商品浏览记录：
- 创建的记录 ID: 1
- 关联客户 ID: 11
- 关联商品 ID: 1
- 关联精品店 ID: 1
- 创建时间: 2025-09-13T12:23:16.000Z

现在可以安全地在应用中使用商品浏览记录功能！