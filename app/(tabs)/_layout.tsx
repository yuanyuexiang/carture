import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useDirectBoutiqueData } from '../../hooks/useDirectBoutiqueData';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { boutiqueNotFound } = useDirectBoutiqueData();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff6b35', // 使用我们的品牌橙色
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: boutiqueNotFound ? { display: 'none' } : {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#f0f0f0',
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          height: Platform.OS === 'ios' ? 85 : 65,
        },
        tabBarLabelStyle: {
          fontSize: 14, // 进一步增大字体从12px到20px
          fontWeight: '600', // 更加粗的字体，从500增加到600
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '商品',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="cart.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="debug"
        options={{
          title: '调试',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="wrench.adjustable" color={color} />,
          href: null, // 隐藏调试页面
        }}
      />
      <Tabs.Screen
        name="boutique"
        options={{
          title: '店铺',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="storefront" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="storefront" color={color} />,
        }}
      />
    </Tabs>
  );
}
