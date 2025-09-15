const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // 代码分割配置
  if (config.optimization) {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      maxAsyncRequests: 20,
      cacheGroups: {
        // Apollo Client 和 GraphQL 库单独分割
        apollo: {
          test: /[\\/]node_modules[\\/](@apollo|graphql)/,
          name: 'apollo',
          chunks: 'all',
          priority: 30,
        },
        // React Navigation 单独打包
        navigation: {
          test: /[\\/]node_modules[\\/](@react-navigation)/,
          name: 'navigation',
          chunks: 'all',
          priority: 25,
        },
        // Expo 相关包单独打包
        expo: {
          test: /[\\/]node_modules[\\/](expo-|@expo)/,
          name: 'expo',
          chunks: 'all',
          priority: 25,
        },
        // React 和核心库
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-native)/,
          name: 'vendor',
          chunks: 'all',
          priority: 20,
        },
        // 其他第三方库
        common: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all',
          priority: 5,
          minChunks: 2,
        },
      },
    };

    // 启用更好的压缩和 Tree Shaking
    config.optimization.usedExports = true;
    config.optimization.sideEffects = false;
    config.optimization.providedExports = true;
  }

  // 移除未使用的代码
  if (config.module && config.module.rules) {
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: [
              // 移除未使用的 GraphQL 查询
              ['babel-plugin-graphql-tag', { strip: true }],
            ],
          },
        },
      ],
      exclude: /node_modules/,
    });
  }

  return config;
};