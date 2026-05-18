import React from "react";
import { ScrollView, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ShoppingItem as ShoppingItemType } from "../../types/shopping";
import { ItemCard } from "./ItemCard";

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
      <View className="flex-1 justify-center items-center px-4 bg-gray-900">
        <LinearGradient
          colors={["#1e2a4a", "#1e1e3a"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="rounded-3xl p-10 items-center w-full border border-[#6366f1]/30"
        >
          <Text className="text-6xl mb-4">🛒</Text>
          <Text className="text-white text-xl font-bold mb-2">
            Lista vazia
          </Text>
          <Text className="text-white/50 text-sm text-center leading-5">
            Adicione o primeiro item usando o campo acima e comece sua lista!
          </Text>
        </LinearGradient>
      </View>
    );
  }

  return (
    <ScrollView
      className="flex-1 py-4 bg-gray-900 mx-2"
      showsVerticalScrollIndicator={false}
    >
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
