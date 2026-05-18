import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ShoppingItem as ShoppingItemType } from '../../types/shopping';
import { ItemCard } from './ItemCard';

interface ShoppingListProps {
  items: ShoppingItemType[];
  onUpdateItem: (id: string, updates: Partial<ShoppingItemType>) => void;
  onRemoveItem: (id: string) => void;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  items,
  onUpdateItem,
  onRemoveItem,
}) => {
  if (items.length === 0) {
    return (
      <View className="flex-1 justify-center items-center px-8">
        <View className="bg-gray-600 rounded-2xl p-8 items-center">
          <Text className="text-5xl mb-4">🛒</Text>
          <Text className="text-white text-lg font-semibold">Lista vazia</Text>
          <Text className="text-gray-400 text-sm mt-2 text-center">
            Adicione itens usando o campo acima
          </Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 px-5 py-4" showsVerticalScrollIndicator={false}>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onUpdatePrice={(price) => onUpdateItem(item.id, { price })}
          onUpdateQuantity={(quantity) => onUpdateItem(item.id, { quantity })}
          onRemove={() => onRemoveItem(item.id)}
        />
      ))}
    </ScrollView>
  );
};