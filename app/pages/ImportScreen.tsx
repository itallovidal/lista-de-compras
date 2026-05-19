import React, { useMemo, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useShopping } from "../hooks/useShopping";
import { TextArea } from "../components/lib/TextArea";
import { Tooltip } from "../components/lib/Tooltip";
import {
  hasValidMultilineFormat,
  parseImportedItems,
} from "../lib/importItems";

export function importItemsAndGoToList(
  value: string,
  addItems: (items: string[]) => void,
  navigateToList: () => void,
) {
  if (!hasValidMultilineFormat(value)) {
    return false;
  }

  const items = parseImportedItems(value);
  addItems(items);
  navigateToList();
  return true;
}

export function ImportScreen() {
  const { addItems } = useShopping();
  const navigation = useNavigation<any>();
  const [value, setValue] = useState("");

  function getImportedItems() {
    return parseImportedItems(value);
  }

  const items = useMemo(getImportedItems, [value]);

  const hasInvalidFormat =
    value.trim().length > 0 && !hasValidMultilineFormat(value);

  function handleImport() {
    const imported = importItemsAndGoToList(value, addItems, () => {
      navigation.navigate("Lista");
    });

    if (imported) {
      setValue("");
    }
  }

  const example = "Ovo\nLeite\nPão";

  return (
    <SafeAreaView className="flex-1 bg-gray-900 px-4 py-4">
      <KeyboardAwareScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, gap: 16 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        extraScrollHeight={16}
      >
          <View className="">
            <Text className="text-white text-2xl font-bold">Importar lista</Text>
            <Text className="text-gray-300 mt-2 leading-5">
              Cole sua lista com um item por linha. O app vai separar cada linha e
              importar em lote.
            </Text>
          </View>

          <View className="rounded-md bg-gray-900 flex-1 gap-4">
            <TextArea
              value={value}
              onChangeText={setValue}
              placeholder={"item\nitem\nitem\nitem"}
              placeholderTextColor="rgba(255,255,255,0.35)"
              className="flex-1 bg-gray-800/70 rounded-md p-4 text-white text-base font-medium"
            />

            <Tooltip content={example}>
              <Text className="text-blue-300 font-semibold">Veja um exemplo</Text>
            </Tooltip>

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
                className="rounded-md bg-blue-500 px-5 py-3"
              >
                <Text className="text-white font-bold">Importar</Text>
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
