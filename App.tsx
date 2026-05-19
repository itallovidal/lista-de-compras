import "./global.css";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ShoppingProvider } from "./app/contexts/ShoppingContext";
import { TabNavigator } from "./app/navigation/TabNavigator";
import { PortalHost } from "@rn-primitives/portal";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ShoppingProvider>
          <NavigationContainer>
            <TabNavigator />
            <PortalHost name="app-tooltip-host" />
          </NavigationContainer>
        </ShoppingProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
