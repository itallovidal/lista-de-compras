import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ShoppingProvider } from './app/contexts/ShoppingContext';
import { TabNavigator } from './app/navigation/TabNavigator';

export default function App() {
  return (
    <ShoppingProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ShoppingProvider>
  );
}