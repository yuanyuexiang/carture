const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Web 平台优化
if (config.resolver) {
  config.resolver.platforms = ['ios', 'android', 'native', 'web'];
}

// 启用代码分割和优化
config.transformer = {
  ...config.transformer,
  minifierConfig: {
    // 启用更好的压缩
    mangle: {
      keep_fnames: true,
    },
  },
};

module.exports = config;