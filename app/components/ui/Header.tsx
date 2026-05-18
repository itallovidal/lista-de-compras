import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { formatCurrency } from '../../lib/formatCurrency';

interface HeaderProps {
  total: number;
  onAddItem: (name: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ total, onAddItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAddItem(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <View className="bg-gray-700 px-5 pt-6 pb-5">
      <View className="flex-row justify-between items-center mb-6">
        <View>
          <Text className="text-white text-2xl font-bold">Lista de Compras</Text>
          <Text className="text-gray-400 text-sm mt-1">Adicione seus itens</Text>
        </View>
        <View className="bg-blue-600 px-4 py-3 rounded-xl">
          <Text className="text-white text-xs font-medium opacity-80">Total</Text>
          <Text className="text-white font-bold text-lg">
            {formatCurrency(total)}
          </Text>
        </View>
      </View>
      <View className="flex-row gap-3">
        <View className="flex-1 bg-gray-600 rounded-xl flex-row items-center px-4">
          <TextInput
            className="flex-1 py-3 text-white text-base"
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Digite o nome do item..."
            placeholderTextColor="#8D8D99"
            onSubmitEditing={handleAdd}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity
          onPress={handleAdd}
          className="bg-blue-600 px-6 rounded-xl justify-center items-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-bold text-base">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};