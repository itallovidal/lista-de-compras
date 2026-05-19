import React from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import { ShoppingItem as ShoppingItemType } from "../../types/shopping";
import { ItemCard } from "./ItemCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ShoppingListProps {
  items: ShoppingItemType[];
  onUpdateItem: (id: string, updates: Partial<ShoppingItemType>) => void;
  onRemoveItem: (id: string) => void;
}

export function ShoppingList({
  items,
  onUpdateItem,
  onRemoveItem,
}: ShoppingListProps) {
  const insets = useSafeAreaInsets();

  if (items.length === 0) {
    return (
      <View className="flex-1 justify-center items-center px-4 bg-gray-900 overflow-hidden">
        <View className="rounded-3xl p-10 items-center w-full border-2 border-gray-800/70 overflow-hidden">
          <Text className="text-6xl mb-4">🛒</Text>
          <Text className="text-white text-xl font-bold mb-2">Lista vazia</Text>
          <Text className="text-white text-sm text-center leading-5">
            Adicione o primeiro item usando o campo acima e comece sua lista!
          </Text>
        </View>
      </View>
    );
  }

  function renderItemCard(item: ShoppingItemType) {
    function handleUpdatePrice(price: number) {
      onUpdateItem(item.id, { price });
    }

    function handleUpdateQuantity(quantity: number) {
      onUpdateItem(item.id, { quantity });
    }

    function handleRemove() {
      onRemoveItem(item.id);
    }

    return (
      <ItemCard
        key={item.id}
        item={item}
        onUpdatePrice={handleUpdatePrice}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
      />
    );
  }

  return (
    <KeyboardAwareScrollView
      className="flex-1 py-4 bg-gray-900 mx-2"
      contentContainerStyle={{ paddingBottom: insets.bottom + 96 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      extraScrollHeight={16}
    >
      {items.map(renderItemCard)}
    </KeyboardAwareScrollView>
  );
}
