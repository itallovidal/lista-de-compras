import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { CaretUpIcon, CaretDownIcon, TrashIcon } from 'phosphor-react-native';
import { ShoppingItem as ShoppingItemType } from '../../types/shopping';

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
    <View
      style={{
        backgroundColor: '#1f2937', // gray-800
        borderRadius: 16,
        padding: 14,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      {/* Nome */}
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{ flex: 1, color: 'white', fontSize: 15, fontWeight: '600' }}
      >
        {item.name}
      </Text>

      {/* Stepper unificado */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#374151', // gray-700
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        <TouchableOpacity
          onPress={() => onUpdateQuantity(item.quantity + 1)}
          style={{ padding: 8 }}
          activeOpacity={0.7}
        >
          <CaretUpIcon size={14} color="white" weight="regular" />
        </TouchableOpacity>

        <Text style={{ color: 'white', fontSize: 14, fontWeight: '700', minWidth: 20, textAlign: 'center' }}>
          {item.quantity}
        </Text>

        <TouchableOpacity
          onPress={() => !isMinQty && onUpdateQuantity(item.quantity - 1)}
          style={{ padding: 8, opacity: isMinQty ? 0.3 : 1 }}
          activeOpacity={isMinQty ? 1 : 0.7}
        >
          <CaretDownIcon size={14} color="white" weight="regular" />
        </TouchableOpacity>
      </View>

      {/* Input preço */}
      <View
        style={{
          backgroundColor: '#374151', // gray-700
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 6,
          width: 80,
        }}
      >
        <TextInput
          style={{ color: 'white', fontSize: 13, textAlign: 'center' }}
          value={item.price > 0 ? item.price.toString() : ''}
          onChangeText={(text) => onUpdatePrice(parseFloat(text) || 0)}
          keyboardType="numeric"
          placeholder="0,00"
          placeholderTextColor="rgba(255,255,255,0.3)"
        />
      </View>

      {/* Lixeira */}
      <TouchableOpacity
        onPress={onRemove}
        activeOpacity={0.7}
        style={{
          backgroundColor: 'rgba(239,68,68,0.15)',
          borderRadius: 10,
          padding: 8,
        }}
      >
        <TrashIcon size={18} color="#ef4444" weight="regular" />
      </TouchableOpacity>
    </View>
  );
};
