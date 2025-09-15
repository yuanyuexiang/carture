import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
// import 'react-native-reanimated'; // 移除未使用的 reanimated 导入
import { AuthWrapper } from '../components/AuthWrapper';
import DataInitializer from '../components/DataInitializer';
import WardrobeApolloProvider from '../components/WardrobeApolloProvider';
import { BoutiqueProvider } from '../contexts/BoutiqueContext';

import { useColorScheme } from '@/hooks/useColorScheme';

// 自定义返回按钮组件
const CustomBackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity 
      onPress={() => router.back()}
      style={{ 
        marginLeft: 10, 
        paddingHorizontal: 10, 
        paddingVertical: 5 
      }}
    >
      <Text style={{ fontSize: 18 }}>←</Text>
    </TouchableOpacity>
  );
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), // 暂时注释掉避免加载问题
  });

  // 忽略浏览器扩展错误
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const originalError = console.error;
      console.error = (...args) => {
        const message = args[0]?.toString() || '';
        if (message.includes('MetaMask') || 
            message.includes('chrome-extension://') ||
            message.includes('Failed to connect to MetaMask')) {
          return; // 忽略扩展错误
        }
        originalError.apply(console, args);
      };

      // 全局错误处理
      const handleError = (event: ErrorEvent) => {
        if (event.message?.includes('MetaMask') || 
            event.filename?.includes('chrome-extension://')) {
          event.preventDefault();
          return false;
        }
      };

      window.addEventListener('error', handleError);
      
      return () => {
        console.error = originalError;
        window.removeEventListener('error', handleError);
      };
    }
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
      <WardrobeApolloProvider>
        <DataInitializer>
          <BoutiqueProvider>
            <AuthWrapper>
              <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                  <Stack.Screen 
                    name="ProductDetail" 
                    options={{ 
                      title: '商品详情',
                      headerShown: true,
                      presentation: 'card',
                      headerLeft: ({ canGoBack }) => canGoBack ? <CustomBackButton /> : null
                    }} 
                  />
                  <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style="auto" />
              </ThemeProvider>
            </AuthWrapper>
          </BoutiqueProvider>
        </DataInitializer>
      </WardrobeApolloProvider>
  );
}
