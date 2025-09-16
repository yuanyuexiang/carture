import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/HapticTab';
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
          height: 60,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '600',
          textAlign: 'center',
          lineHeight: 14,
          marginTop: -10, // 向上移动文字，减少图标占用的空间影响
          marginBottom: 0,
        },
        tabBarIconStyle: {
          height: 0, // 将图标高度设为0
          width: 0,  // 将图标宽度设为0
          margin: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '商品',
          tabBarIcon: () => null, // 禁用图标显示
        }}
      />
      <Tabs.Screen
        name="debug"
        options={{
          title: '调试',
          tabBarIcon: () => null, // 禁用图标显示
          href: null, // 隐藏调试页面
        }}
      />
      <Tabs.Screen
        name="boutique"
        options={{
          title: '店铺',
          tabBarIcon: () => null, // 禁用图标显示
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '我的',
          tabBarIcon: () => null, // 禁用图标显示
        }}
      />
    </Tabs>
  );
}
