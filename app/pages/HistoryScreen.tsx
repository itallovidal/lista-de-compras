import React, { useCallback, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/lib/Dialog';
import { formatCurrency } from '../lib/formatCurrency';
import { ShoppingHistoryEntry } from '../types/shopping';
import { loadShoppingHistory } from '../lib/storage';

function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

export function HistoryScreen() {
  const [history, setHistory] = useState<ShoppingHistoryEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<ShoppingHistoryEntry | null>(null);

  useFocusEffect(
    useCallback(() => {
    const loadHistory = async () => {
      const savedHistory = await loadShoppingHistory();
      setHistory(savedHistory);
    };

    loadHistory();
    }, []),
  );

  if (history.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-gray-900 items-center justify-center px-8">
        <View className="rounded-3xl p-8 items-center border border-gray-800 bg-gray-900">
          <Text className="text-5xl mb-4">📜</Text>
          <Text className="text-white text-xl font-bold">Sem histórico</Text>
          <Text className="text-gray-400 mt-3 text-center">
            Finalize uma compra para ver aqui o histórico das listas salvas.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-4 pt-4">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-6 gap-3">
        {history.map((entry) => (
          <Pressable
            key={entry.id}
            onPress={() => setSelectedEntry(entry)}
            className="rounded-3xl border border-gray-800 bg-gray-900 p-4"
          >
            <View className="flex-row items-start justify-between gap-3">
              <View className="flex-1 gap-1">
                <Text className="text-white text-lg font-bold">{entry.marketName}</Text>
                <Text className="text-gray-400 text-sm">{formatDate(entry.createdAt)}</Text>
              </View>
              <Text className="text-blue-300 font-semibold">{formatCurrency(entry.total)}</Text>
            </View>

            <View className="mt-3 flex-row justify-between">
              <Text className="text-gray-300 text-sm">{entry.itemCount} item(ns)</Text>
              <Text className="text-gray-300 text-sm">Ver itens</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Dialog open={Boolean(selectedEntry)} onOpenChange={(open) => !open && setSelectedEntry(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedEntry?.marketName}</DialogTitle>
            <DialogDescription>
              {selectedEntry ? `${selectedEntry.itemCount} item(ns) • ${formatCurrency(selectedEntry.total)}` : ''}
            </DialogDescription>
          </DialogHeader>

          <View className="gap-2 max-h-80">
            {selectedEntry?.items.map((item) => (
              <View key={item.id} className="rounded-2xl border border-gray-700 bg-gray-800 px-4 py-3">
                <Text className="text-white font-semibold">{item.name}</Text>
                <Text className="text-gray-300 text-sm">
                  {item.quantity}x • {formatCurrency(item.price * item.quantity)}
                </Text>
              </View>
            ))}
          </View>
        </DialogContent>
      </Dialog>
    </SafeAreaView>
  );
}
