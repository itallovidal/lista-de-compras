import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HistoryScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-700 items-center justify-center px-8">
      <View className="bg-gray-600 rounded-2xl p-8 items-center">
        <Text className="text-5xl mb-4">📜</Text>
        <Text className="text-white text-xl font-bold">Em breve</Text>
        <Text className="text-gray-400 mt-3 text-center">
          Veja o histórico de todas as suas compras anteriores
        </Text>
      </View>
    </SafeAreaView>
  );
};
