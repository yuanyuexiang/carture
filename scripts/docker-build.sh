#!/bin/bash

# =============================================================================
# Docker 构建和部署脚本
# =============================================================================

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 配置
IMAGE_NAME="carture"
REGISTRY="your-registry.com"  # 替换为你的镜像仓库
TAG=${1:-latest}

echo -e "${BLUE}🚀 开始构建 Carture 应用...${NC}"

# 1. 清理之前的构建
echo -e "${YELLOW}🧹 清理之前的构建...${NC}"
docker-compose down --remove-orphans 2>/dev/null || true
docker system prune -f

# 2. 构建镜像
echo -e "${YELLOW}🔨 构建 Docker 镜像...${NC}"
docker build \
    --tag ${IMAGE_NAME}:${TAG} \
    --tag ${IMAGE_NAME}:latest \
    --build-arg BUILDKIT_INLINE_CACHE=1 \
    --cache-from ${IMAGE_NAME}:latest \
    .

# 3. 验证构建
echo -e "${YELLOW}✅ 验证构建结果...${NC}"
docker images | grep ${IMAGE_NAME}

# 4. 运行健康检查
echo -e "${YELLOW}🏥 运行健康检查...${NC}"
docker run --rm -d --name ${IMAGE_NAME}-test -p 8080:80 ${IMAGE_NAME}:${TAG}

# 等待容器启动
sleep 10

# 检查健康状态
if curl -f http://localhost:8080/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ 健康检查通过${NC}"
    docker stop ${IMAGE_NAME}-test
else
    echo -e "${RED}❌ 健康检查失败${NC}"
    docker logs ${IMAGE_NAME}-test
    docker stop ${IMAGE_NAME}-test
    exit 1
fi

# 5. 可选：推送到仓库
if [ "$2" = "push" ]; then
    echo -e "${YELLOW}📤 推送镜像到仓库...${NC}"
    docker tag ${IMAGE_NAME}:${TAG} ${REGISTRY}/${IMAGE_NAME}:${TAG}
    docker push ${REGISTRY}/${IMAGE_NAME}:${TAG}
    echo -e "${GREEN}✅ 镜像推送完成${NC}"
fi

echo -e "${GREEN}🎉 构建完成！${NC}"
echo -e "${BLUE}运行命令: docker run -p 80:80 ${IMAGE_NAME}:${TAG}${NC}"
