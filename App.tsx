import "./global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ShoppingProvider } from "./app/contexts/ShoppingContext";
import { TabNavigator } from "./app/navigation/TabNavigator";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ShoppingProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </ShoppingProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
