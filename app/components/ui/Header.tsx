import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { formatCurrency } from "../../lib/formatCurrency";
import { Input } from "../lib/Input";
import { Tooltip } from "../lib/Tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../lib/Dialog";
import { FloppyDiskBackIcon } from "phosphor-react-native";

interface HeaderProps {
  total: number;
  itemCount: number;
  onAddItem: (name: string) => void;
  onSave: (marketName: string) => Promise<void>;
  onClear: () => void;
}

export function Header({
  total,
  itemCount,
  onAddItem,
  onSave,
  onClear,
}: HeaderProps) {
  const [inputValue, setInputValue] = useState("");
  const [marketName, setMarketName] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  function handleAdd() {
    if (inputValue.trim()) {
      onAddItem(inputValue.trim());
      setInputValue("");
    }
  }

  function openFinalizeDialog() {
    setMarketName("");
    setConfirmOpen(true);
  }

  async function handleSave() {
    await onSave(marketName);
    setConfirmOpen(false);
    setMarketName("");
  }

  function handleDiscard() {
    onClear();
    setConfirmOpen(false);
    setMarketName("");
  }

  return (
    <>
      <LinearGradient
        colors={["#3B82F6", "#6366F1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="px-5 pt-6 pb-6"
      >
        <View className="mb-4">
          <View className="flex-row items-start justify-between gap-4">
            <View className="flex-1">
              <Text className="text-white text-4xl font-extrabold tracking-tight">
                {formatCurrency(total)}
              </Text>
            </View>

            <View className="flex-row items-center gap-2">
              <TouchableOpacity
                onPress={openFinalizeDialog}
                activeOpacity={0.85}
                className="w-12 h-12 bg-white/20 rounded-xl justify-center items-center border border-white/35"
              >
                <FloppyDiskBackIcon size={20} color="white" weight="fill" />
              </TouchableOpacity>
              <Tooltip content="Você pode arrastar itens para apagar e importar listas completas pela aba de importação.">
                <TouchableOpacity
                  activeOpacity={0.85}
                  className="w-12 h-12 bg-white/20 rounded-xl justify-center items-center border border-white/35"
                >
                  <Text className="text-white text-lg font-bold">i</Text>
                </TouchableOpacity>
              </Tooltip>
            </View>
          </View>

          <Text className="text-white/85 mt-1 font-medium">
            {itemCount} item(ns) na lista
          </Text>
        </View>

        <View className="h-3" />

        <View className="flex-row items-center gap-2.5 h-12">
          <Input
            className="flex-1 "
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Nome do item..."
            placeholderTextColor="rgba(255,255,255,0.5)"
            onSubmitEditing={handleAdd}
            returnKeyType="done"
          />
          <TouchableOpacity
            onPress={handleAdd}
            activeOpacity={0.85}
            className="w-12 h-full bg-white/20 rounded-xl justify-center items-center border border-white/35"
          >
            <Text className="text-white text-3xl font-light leading-8">+</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Finalizar compra</DialogTitle>
            <DialogDescription>
              Informe o mercado e escolha se deseja salvar a lista no histórico.
            </DialogDescription>
          </DialogHeader>

          <View className="gap-3">
            <Input
              value={marketName}
              onChangeText={setMarketName}
              placeholder="Qual mercado foi comprado?"
              placeholderTextColor="rgba(255,255,255,0.4)"
            />
            <View className="rounded-2xl border border-gray-700 bg-gray-800 px-4 py-3 gap-1">
              <Text className="text-white font-semibold">
                {itemCount} item(ns) • {formatCurrency(total)}
              </Text>
              <Text className="text-gray-300 text-sm">
                Essa lista pode ser salva no histórico ou apenas limpa da tela.
              </Text>
            </View>
          </View>

          <DialogFooter>
            <TouchableOpacity
              onPress={handleDiscard}
              activeOpacity={0.85}
              className="rounded-2xl bg-gray-800 px-4 py-3"
            >
              <Text className="text-white font-semibold">Não salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSave}
              activeOpacity={0.85}
              className="rounded-2xl bg-blue-500 px-4 py-3"
            >
              <Text className="text-white font-semibold">Salvar</Text>
            </TouchableOpacity>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
