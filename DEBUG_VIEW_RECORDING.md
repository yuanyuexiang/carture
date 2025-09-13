# 商品浏览记录功能调试指南

## 问题现象
在商品详情页浏览商品时，没有实现 view 写入到数据库。

## 已确认正常工作的部分
✅ **后端 GraphQL 功能**: 测试成功，能正常创建浏览记录
✅ **数据库连接**: 正常，已创建测试记录 ID: 2
✅ **GraphQL 查询**: 字段映射正确，使用 `open_id`, `nick_name` 等正确字段
✅ **Hook 导入**: `useProductViewRecorder` 已添加到 `ProductDetailScreen.tsx`

## 调试步骤

### 1. 检查控制台日志
在 React Native 应用中打开商品详情页，查看控制台是否输出以下日志：

```
🚀 useProductViewRecorder 已初始化，productId: [商品ID]
🔧 useViewManager 已初始化
📱 useEffect 触发，productId: [商品ID]
📱 检测到 React Native 环境，直接尝试记录商品浏览
🎯 准备自动记录商品浏览，productId: [商品ID]
⏰ 延迟执行商品浏览记录
```

### 2. 检查商品ID传递
确认 `ProductDetailScreen` 接收到正确的商品ID：

```tsx
// 在 ProductDetailScreen.tsx 中添加调试日志
console.log('📦 ProductDetailScreen - 商品ID:', id);
```

### 3. 检查 Apollo Client 配置
确认 Apollo Client 已正确配置并能访问 GraphQL 端点：

```tsx
// 检查 WardrobeApolloProvider 是否包裹了整个应用
// 确认 GraphQL 端点配置正确: https://forge.matrix-net.tech/graphql
```

### 4. 检查网络连接
在 Hook 中添加网络请求拦截，查看是否发出了 GraphQL 请求。

## 可能的原因

### 原因1: Hook 没有被调用
**症状**: 控制台没有看到初始化日志
**解决**: 确认 `useProductViewRecorder(id)` 在 `ProductDetailScreen` 中被正确调用

### 原因2: 商品ID为空或无效
**症状**: 看到初始化日志但没有记录日志
**解决**: 检查路由参数，确认 `id` 不为 `undefined` 或空字符串

### 原因3: Apollo Client 配置问题
**症状**: 看到记录尝试日志但网络请求失败
**解决**: 检查 Apollo Client 配置和网络权限

### 原因4: 用户信息生成问题
**症状**: 记录失败，提示缺少用户信息
**解决**: 检查测试用户信息生成逻辑

## 临时解决方案

如果自动记录不工作，可以添加手动记录按钮进行测试：

```tsx
// 在 ProductDetailScreen.tsx 中添加
import { useProductViewRecorder } from '../hooks/useProductViewRecorder';

function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { recordCurrentView } = useProductViewRecorder(id);
  
  const handleTestRecord = async () => {
    console.log('🧪 手动测试商品浏览记录');
    const result = await recordCurrentView();
    console.log('📊 记录结果:', result);
  };
  
  return (
    <View>
      {/* 其他内容 */}
      <TouchableOpacity onPress={handleTestRecord} style={styles.testButton}>
        <Text>测试浏览记录</Text>
      </TouchableOpacity>
    </View>
  );
}
```

## 验证步骤

1. **启动应用**: 运行 `npm start` 或 `expo start`
2. **打开商品详情页**: 导航到任意商品详情页
3. **查看控制台**: 检查是否有相关调试日志
4. **测试手动记录**: 如果自动记录不工作，尝试手动记录按钮
5. **检查数据库**: 使用 GraphQL 查询检查是否创建了新记录

## 成功标志

当功能正常工作时，你应该看到：

```
🚀 useProductViewRecorder 已初始化，productId: 1
🔧 useViewManager 已初始化  
📱 useEffect 触发，productId: 1
📱 检测到 React Native 环境，直接尝试记录商品浏览
🎯 准备自动记录商品浏览，productId: 1
⏰ 延迟执行商品浏览记录
开始记录商品浏览: { openId: "test_rn_user_...", boutiqueId: "1", productId: "1", nickName: "RN测试用户" }
准备创建商品浏览记录，数据: { customer: {...}, product: {...}, boutique: {...} }
✅ 商品浏览记录创建成功: { create_views_item: {...} }
✅ 商品浏览记录成功: { success: true, view: {...} }
🎉 自动记录商品浏览成功
```

## 下一步
如果按照以上步骤仍然不能工作，请提供控制台的完整日志输出以便进一步诊断。