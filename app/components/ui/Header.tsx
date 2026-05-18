import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
    <LinearGradient
      colors={['#3B82F6', '#6366F1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ paddingHorizontal: 20, paddingTop: 24, paddingBottom: 24 }}
    >
      {/* Title */}
      <Text style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: '600', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 4 }}>
        Lista de Compras
      </Text>

      {/* Total em destaque */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: 'white', fontSize: 36, fontWeight: '800', letterSpacing: -0.5 }}>
          {formatCurrency(total)}
        </Text>
        <Text style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, marginTop: 2 }}>
          total estimado
        </Text>
      </View>

      {/* Input + Botão */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: 14,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 14,
          borderWidth: 1,
          borderColor: 'rgba(255,255,255,0.25)',
        }}>
          <TextInput
            style={{ flex: 1, paddingVertical: 13, color: 'white', fontSize: 15 }}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Nome do item..."
            placeholderTextColor="rgba(255,255,255,0.5)"
            onSubmitEditing={handleAdd}
            returnKeyType="done"
          />
        </View>
        <TouchableOpacity
          onPress={handleAdd}
          activeOpacity={0.85}
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: 14,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.35)',
          }}
        >
          <Text style={{ color: 'white', fontSize: 26, fontWeight: '300', lineHeight: 30 }}>+</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
