import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ShoppingItem as ShoppingItemType } from '../../types/shopping';
import { formatCurrency } from '../../lib/formatCurrency';

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
  return (
    <View className="bg-gray-600 rounded-xl p-4 mb-3">
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-white text-lg font-semibold flex-1 mr-2">{item.name}</Text>
        <Text className="text-blue-600 font-bold text-lg">
          {formatCurrency(item.price * item.quantity)}
        </Text>
      </View>
      <View className="flex-row items-center gap-3">
        <View className="flex-row items-center bg-gray-500 rounded-lg px-3 py-2 flex-1">
          <Text className="text-gray-400 text-xs mr-2">R$</Text>
          <TextInput
            className="text-white text-sm flex-1"
            value={item.price > 0 ? item.price.toString() : ''}
            onChangeText={(text) => onUpdatePrice(parseFloat(text) || 0)}
            keyboardType="numeric"
            placeholder="0,00"
            placeholderTextColor="#8D8D99"
          />
        </View>
        <View className="flex-row items-center bg-gray-500 rounded-lg px-3 py-2 flex-1">
          <Text className="text-gray-400 text-xs mr-2">Qtd</Text>
          <TextInput
            className="text-white text-sm flex-1"
            value={item.quantity > 0 ? item.quantity.toString() : ''}
            onChangeText={(text) => onUpdateQuantity(parseInt(text, 10) || 1)}
            keyboardType="numeric"
            placeholder="1"
            placeholderTextColor="#8D8D99"
          />
        </View>
        <TouchableOpacity
          onPress={onRemove}
          className="bg-red-500/20 px-3 py-2 rounded-lg"
          activeOpacity={0.7}
        >
          <Text className="text-red-500 text-xl">✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};