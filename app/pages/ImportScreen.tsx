import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useShopping } from '../hooks/useShopping';
import { TextArea } from '../components/ui/TextArea';
import { hasValidMultilineFormat, parseImportedItems } from '../lib/importItems';

export const ImportScreen: React.FC = () => {
  const { addItems } = useShopping();
  const [value, setValue] = useState('');

  const items = useMemo(() => parseImportedItems(value), [value]);

  const hasInvalidFormat = value.trim().length > 0 && !hasValidMultilineFormat(value);

  const handleImport = () => {
    if (!hasValidMultilineFormat(value)) {
      Alert.alert('Formato inválido', 'Cole a lista com um item por linha.');
      return;
    }

    addItems(items);
    setValue('');
    Alert.alert('Importado', `${items.length} item(ns) importado(s).`);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-4 py-4">
      <View className="flex-1 gap-4">
        <View className="rounded-3xl bg-gray-800 p-5 border border-gray-700">
          <Text className="text-white text-2xl font-bold">Importar lista</Text>
          <Text className="text-gray-300 mt-2 leading-5">
            Cole sua lista com um item por linha. O app vai separar cada linha e importar em lote.
          </Text>
        </View>

        <View className="rounded-3xl bg-gray-800 p-5 border border-gray-700 flex-1 gap-4">
          <TextArea
            value={value}
            onChangeText={setValue}
            placeholder={'item\nitem\nitem\nitem'}
            placeholderTextColor="rgba(255,255,255,0.35)"
          />

          <Text className={hasInvalidFormat ? 'text-red-400' : 'text-gray-400'}>
            Formato obrigatório: uma linha por item, com quebra de linha entre eles.
          </Text>

          <View className="flex-row items-center justify-between">
            <Text className="text-gray-300">
              {items.length} item(ns) pronto(s) para importar
            </Text>
            <TouchableOpacity
              onPress={handleImport}
              activeOpacity={0.85}
              className="rounded-2xl bg-blue-500 px-5 py-3"
            >
              <Text className="text-white font-bold">Importar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
