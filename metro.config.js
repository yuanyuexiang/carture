const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Web 平台优化
if (config.resolver) {
  config.resolver.platforms = ['ios', 'android', 'native', 'web'];
  
  // 启用更好的模块解析
  config.resolver.alias = {
    // 使用生产环境版本的包
    'react-native$': 'react-native-web',
  };
}

// 启用代码分割和优化
config.transformer = {
  ...config.transformer,
  minifierConfig: {
    // 启用更好的压缩
    mangle: {
      keep_fnames: true,
    },
    compress: {
      drop_console: true, // 移除 console.log
      drop_debugger: true,
      dead_code: true,
      unused: true,
    },
  },
};

// Web 专用优化
if (process.env.EXPO_PUBLIC_PLATFORM === 'web') {
  // 启用更激进的优化
  config.transformer.minifierConfig.compress = {
    ...config.transformer.minifierConfig.compress,
    passes: 2, // 多轮压缩
  };
}

module.exports = config;