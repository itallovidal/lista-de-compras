import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useShopping } from "../hooks/useShopping";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/lib/Dialog";
import { TextArea } from "../components/lib/TextArea";
import { Tooltip } from "../components/lib/Tooltip";
import {
  hasValidMultilineFormat,
  parseImportedItems,
} from "../lib/importItems";

export function ImportScreen() {
  const { addItems } = useShopping();
  const [value, setValue] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  function getImportedItems() {
    return parseImportedItems(value);
  }

  const items = useMemo(getImportedItems, [value]);

  const hasInvalidFormat =
    value.trim().length > 0 && !hasValidMultilineFormat(value);

  function handleImport() {
    if (!hasValidMultilineFormat(value)) {
      Alert.alert("Formato inválido", "Cole a lista com um item por linha.");
      return;
    }

    setConfirmOpen(true);
  }

  function confirmImport() {
    addItems(items);
    setValue("");
    setConfirmOpen(false);
    Alert.alert("Importado", `${items.length} item(ns) importado(s).`);
  }

  function handleCancelImport() {
    setConfirmOpen(false);
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-4 py-4">
      <View className="flex-1 gap-4">
        <View className="rounded-3xl bg-gray-900 p-5 border border-gray-800">
          <Text className="text-white text-2xl font-bold">Importar lista</Text>
          <Text className="text-gray-300 mt-2 leading-5">
            Cole sua lista com um item por linha. O app vai separar cada linha e
            importar em lote.
          </Text>
        </View>

        <View className="rounded-3xl bg-gray-900 p-5 flex-1 gap-4">
          <Tooltip content="Cole uma linha por item. Exemplo: leite\npao\narroz">
            <Text className="text-blue-300 font-semibold">Como formatar?</Text>
          </Tooltip>

          <TextArea
            value={value}
            onChangeText={setValue}
            placeholder={"item\nitem\nitem\nitem"}
            placeholderTextColor="rgba(255,255,255,0.35)"
          />

          <Text className={hasInvalidFormat ? "text-red-400" : "text-gray-400"}>
            Formato obrigatório: uma linha por item, com quebra de linha entre
            eles.
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

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar importação</DialogTitle>
            <DialogDescription>
              Importar {items.length} item(ns) da lista colada?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <TouchableOpacity
              onPress={handleCancelImport}
              activeOpacity={0.85}
              className="rounded-2xl bg-gray-800 px-4 py-3"
            >
              <Text className="text-white font-semibold">Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={confirmImport}
              activeOpacity={0.85}
              className="rounded-2xl bg-blue-500 px-4 py-3"
            >
              <Text className="text-white font-semibold">Importar</Text>
            </TouchableOpacity>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SafeAreaView>
  );
}
