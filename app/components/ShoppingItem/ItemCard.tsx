import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CaretUpIcon, CaretDownIcon, TrashIcon } from "phosphor-react-native";
import { ShoppingItem as ShoppingItemType } from "../../types/shopping";

interface ItemCardProps {
  item: ShoppingItemType;
  onUpdatePrice: (price: number) => void;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onUpdatePrice,
  onUpdateQuantity,
  onRemove,
}) => {
  const isMinQty = item.quantity <= 1;

  return (
    <View className="bg-gray-900 rounded-2xl p-2 mb-2.5 flex-row items-center gap-2.5 border border-gray-800 shadow-black/30 shadow-lg max-h-28">
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="flex-1 text-white text-[15px] font-semibold"
      >
        {item.name}
      </Text>

      <View className="p-1 h-full flex-row justify-center items-center border rounded-2xl bg-gray-600">
        <TouchableOpacity
          onPress={() => onUpdateQuantity(item.quantity + 1)}
          activeOpacity={0.7}
          className="p-4"
        >
          <CaretUpIcon size={14} color="white" weight="regular" />
        </TouchableOpacity>

        <Text className="text-white text-sm font-bold min-w-5 text-center">
          {item.quantity}
        </Text>

        <TouchableOpacity
          onPress={() => !isMinQty && onUpdateQuantity(item.quantity - 1)}
          className={`p-4 ${isMinQty ? "opacity-30" : "opacity-100"}`}
          activeOpacity={isMinQty ? 1 : 0.7}
        >
          <CaretDownIcon size={14} color="white" weight="regular" />
        </TouchableOpacity>
      </View>

      <View className="rounded-2xl  max-w-24 w-full bg-gray-600 h-full justify-center items-center border">
        <TextInput
          className="text-white px-4 text-center"
          value={item.price > 0 ? item.price.toString() : ""}
          onChangeText={(text) => onUpdatePrice(parseFloat(text) || 0)}
          keyboardType="numeric"
          placeholder="0,00"
          placeholderTextColor="rgba(255,255,255,0.3)"
        />
      </View>

      <TouchableOpacity
        onPress={onRemove}
        activeOpacity={0.7}
        className="bg-red-500/15 rounded-2xl p-4 h-full justify-center items-center border border-red-500/30"
      >
        <TrashIcon size={18} color="#ef4444" weight="regular" />
      </TouchableOpacity>
    </View>
  );
};
