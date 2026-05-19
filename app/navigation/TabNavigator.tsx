import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeScreen } from "../pages/HomeScreen";
import { ImportScreen } from "../pages/ImportScreen";
import { HistoryScreen } from "../pages/HistoryScreen";
import colors from "tailwindcss/colors";
import {
  ShoppingCartIcon,
  DownloadSimpleIcon,
  ClockClockwiseIcon,
} from "phosphor-react-native";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  const icons: Record<string, any> = {
    Lista: ShoppingCartIcon,
    Importar: DownloadSimpleIcon,
    Histórico: ClockClockwiseIcon,
  };
  const Icon = icons[name] || ShoppingCartIcon;
  return (
    <View className={`items-center`}>
      <Icon
        size={24}
        color={focused ? String(colors.white) : String(colors.gray[500])}
        weight={focused ? "fill" : "regular"}
      />
    </View>
  );
};

export const TabNavigator: React.FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabIcon name={route.name} focused={focused} />
        ),
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray[500],
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colors.gray[900],
          borderTopColor: colors.gray[800],
          borderTopWidth: 1,
          paddingBottom: Math.max(insets.bottom, 12),
          height: 58 + Math.max(insets.bottom, 12),
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
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
