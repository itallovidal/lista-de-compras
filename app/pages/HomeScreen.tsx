import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { Header } from '../components/ui/Header';
import { ShoppingList } from '../components/ShoppingItem/ShoppingList';
import { useShopping } from '../hooks/useShopping';

export const HomeScreen: React.FC = () => {
  const { list, addItem, updateItem, removeItem, getTotal } = useShopping();

  return (
    <SafeAreaView className="flex-1 bg-gray-700">
      <StatusBar barStyle="light-content" backgroundColor="#121214" />
      <Header total={getTotal()} onAddItem={addItem} />
      <ShoppingList
        items={list.items}
        onUpdateItem={updateItem}
        onRemoveItem={removeItem}
      />
    </SafeAreaView>
  );
};