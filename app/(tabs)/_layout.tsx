import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import MadameChou from './madame-chou/madame-chou';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MadameChou />
    /*<Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="madame-chou/madame-chou"
        options= {{
          title: 'Madame Chou',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons name='knife' color={color} />
          )
        }}
      />
    </Tabs>
    */
  );
}
