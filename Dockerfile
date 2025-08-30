
# Expo Web 静态资源构建并用 nginx 部署
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
# 构建 Expo Web 静态资源
RUN npm run export:web

# 生产环境用 nginx 部署静态资源
FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/web-build .
# 替换 nginx 默认配置（可选，支持 SPA 路由）
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
