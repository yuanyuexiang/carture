module.exports = function (api) {
  api.cache(true);
  
  const isWeb = process.env.EXPO_PLATFORM === 'web';
  const isProduction = process.env.NODE_ENV === 'production';
  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // 生产环境移除 console.log (仅在 Web 平台)
      ...(isProduction && isWeb
        ? [['transform-remove-console', { exclude: ['error', 'warn'] }]]
        : []),
    ],
  };
};