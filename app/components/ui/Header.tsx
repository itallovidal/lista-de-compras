import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { formatCurrency } from "../../lib/formatCurrency";
import { Input } from "../lib/Input";
import { Tooltip } from "../lib/Tooltip";
import { FloppyDiskIcon } from "phosphor-react-native";

interface HeaderProps {
  total: number;
  onAddItem: (name: string) => void;
  onSave: () => void;
}

export function Header({ total, onAddItem, onSave }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim()) {
      onAddItem(inputValue.trim());
      setInputValue("");
    }
  }

  return (
    <LinearGradient
      colors={["#3B82F6", "#6366F1"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="px-5 pt-6 pb-6"
    >
      <View className="mb-5">
        <Text className="text-white text-4xl font-extrabold tracking-tight">
          {formatCurrency(total)}
        </Text>
      </View>

      <View className="flex-row gap-2.5">
        <Input
          className="flex-1"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Nome do item..."
          placeholderTextColor="rgba(255,255,255,0.5)"
          onSubmitEditing={handleAdd}
          returnKeyType="done"
        />
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={onSave}
            activeOpacity={0.85}
            className="w-12 h-12 bg-white/20 rounded-xl justify-center items-center border border-white/35"
          >
            <FloppyDiskIcon size={20} color="white" weight="fill" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleAdd}
            activeOpacity={0.85}
            className="w-12 h-12 bg-white/20 rounded-xl justify-center items-center border border-white/35"
          >
            <Text className="text-white text-3xl font-light leading-8">+</Text>
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
    </LinearGradient>
  );
}
