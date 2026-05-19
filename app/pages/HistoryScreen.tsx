import React, { useCallback, useState } from "react";
import { Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ArrowClockwise, ShoppingCart } from "phosphor-react-native";
import colors from "tailwindcss/colors";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/lib/Dialog";
import { formatCurrency } from "../lib/formatCurrency";
import { ShoppingHistoryEntry } from "../types/shopping";
import { loadShoppingHistory } from "../lib/storage";
import { useShopping } from "../hooks/useShopping";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function HistoryScreen() {
  const { height: windowHeight } = useWindowDimensions();
  const navigation = useNavigation<any>();
  const { importItems } = useShopping();
  const [history, setHistory] = useState<ShoppingHistoryEntry[]>([]);
  const [selectedEntry, setSelectedEntry] =
    useState<ShoppingHistoryEntry | null>(null);

  useFocusEffect(
    useCallback(() => {
      const loadHistory = async () => {
        const savedHistory = await loadShoppingHistory();
        setHistory(savedHistory);
      };

      loadHistory();
    }, []),
  );

  const handleImport = useCallback((entry: ShoppingHistoryEntry) => {
    importItems(entry.items);
    navigation.navigate("Lista");
  }, [importItems, navigation]);

  if (history.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-gray-900 items-center justify-center px-8">
        <View className="rounded-md p-8 items-center border border-gray-800/70 bg-gray-900">
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-6 gap-3"
      >
        {history.map((entry) => (
          <Pressable
            key={entry.id}
            onPress={() => setSelectedEntry(entry)}
            className="rounded-md border border-gray-800/70 bg-gray-900 p-4"
          >
            <View className="flex-row items-start justify-between gap-3">
              <View className="flex-1 gap-1">
                <Text className="text-white text-lg font-bold">
                  {entry.marketName}
                </Text>
                <Text className="text-gray-400 text-sm">
                  {formatDate(entry.createdAt)}
                </Text>
              </View>
              <Text className="text-blue-300 font-semibold">
                {formatCurrency(entry.total)}
              </Text>
            </View>

            <View className="mt-3 flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <View className="flex-row items-center gap-1">
                  <ShoppingCart size={16} color={String(colors.gray[400])} />
                  <Text className="text-gray-400 text-sm">{entry.itemCount}</Text>
                </View>
                <Pressable
                  onPress={() => handleImport(entry)}
                  hitSlop={8}
                  className="flex-row items-center gap-1"
                >
                  <ArrowClockwise size={16} color={String(colors.gray[300])} />
                  <Text className="text-gray-300 text-sm">Importar</Text>
                </Pressable>
              </View>
              <Text className="text-gray-300 text-sm">Ver itens</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <Dialog
        open={Boolean(selectedEntry)}
        onOpenChange={(open) => !open && setSelectedEntry(null)}
      >
        <DialogContent
          fullWidth
          className="rounded-md p-4"
        >
          <DialogHeader>
            <DialogTitle>{selectedEntry?.marketName}</DialogTitle>
            <DialogDescription>
              {selectedEntry
                ? `${selectedEntry.itemCount} item(ns) • ${formatCurrency(selectedEntry.total)}`
                : ""}
            </DialogDescription>
          </DialogHeader>

          <ScrollView
            style={{ maxHeight: windowHeight * 0.6 }}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="gap-2 pb-1"
          >
            {selectedEntry?.items.map((item) => (
              <View
                key={item.id}
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3"
              >
                <Text className="text-white font-semibold">{item.name}</Text>
                <View className="mt-2 flex-row items-center justify-between gap-3">
                  <Text className="text-gray-300 text-sm">
                    {formatCurrency(item.price)}
                  </Text>
                  <Text className="text-gray-300 text-sm">
                    {item.quantity}x
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <Pressable
            onPress={() => {
              if (selectedEntry) {
                handleImport(selectedEntry);
                setSelectedEntry(null);
              }
            }}
            className="flex-row items-center justify-center gap-2 mt-3 py-3 rounded-md bg-blue-500/20 border border-blue-500/30"
          >
            <ShoppingCart size={18} color={String(colors.blue[300])} />
            <ArrowClockwise size={18} color={String(colors.blue[300])} />
            <Text className="text-blue-300 font-semibold text-sm">Importar lista</Text>
          </Pressable>
        </DialogContent>
      </Dialog>
    </SafeAreaView>
  );
}
