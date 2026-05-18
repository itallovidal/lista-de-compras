import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
      <View className="flex-1 justify-center items-center px-8 bg-gray-900">
        <LinearGradient
          colors={['#1e2a4a', '#1e1e3a']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 24,
            padding: 40,
            alignItems: 'center',
            width: '100%',
            borderWidth: 1,
            borderColor: 'rgba(99,102,241,0.3)',
          }}
        >
          <Text style={{ fontSize: 64, marginBottom: 16 }}>🛒</Text>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '700', marginBottom: 8 }}>
            Lista vazia
          </Text>
          <Text style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, textAlign: 'center', lineHeight: 20 }}>
            Adicione o primeiro item usando o campo acima e comece sua lista!
          </Text>
        </LinearGradient>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 px-5 py-4 bg-gray-900" showsVerticalScrollIndicator={false}>
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