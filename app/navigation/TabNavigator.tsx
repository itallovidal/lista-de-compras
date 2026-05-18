import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { HomeScreen } from '../pages/HomeScreen';
import { ImportScreen } from '../pages/ImportScreen';
import { HistoryScreen } from '../pages/HistoryScreen';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const icons: Record<string, string> = {
    Lista: '🛒',
    Importar: '📥',
    Histórico: '📜',
  };
  return (
    <View className={`items-center px-3 py-1 rounded-lg ${focused ? 'bg-blue-600/20' : ''}`}>
      <Text className="text-xl">{icons[name] || '📄'}</Text>
    </View>
  );
};

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => <TabIcon name={route.name} focused={focused} />,
        tabBarActiveTintColor: '#379DF1',
        tabBarInactiveTintColor: '#8D8D99',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#202024',
          borderTopColor: '#323238',
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      })}
    >
      <Tab.Screen name="Lista" component={HomeScreen} />
      <Tab.Screen name="Importar" component={ImportScreen} />
      <Tab.Screen name="Histórico" component={HistoryScreen} />
    </Tab.Navigator>
  );
};