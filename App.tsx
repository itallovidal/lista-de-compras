import "./global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ShoppingProvider } from "./app/contexts/ShoppingContext";
import { TabNavigator } from "./app/navigation/TabNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <ShoppingProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ShoppingProvider>
    </SafeAreaProvider>
  );
}
