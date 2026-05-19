import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
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
import { CheckFatIcon, SealQuestionIcon } from "phosphor-react-native";
import { Separator } from "../lib/separator";
import { ArrowLeftIcon } from "lucide-react-native";
import {
  SUGGESTION_CATALOG,
  type SuggestionCategoryName,
} from "../../data/suggestionCatalog";

interface SuggestedSelection {
  category: SuggestionCategoryName;
  name: string;
}

interface HeaderProps {
  total: number;
  itemCount: number;
  totalQuantity: number;
  onAddItem: (name: string) => void;
  onAddItems: (names: string[]) => void;
  onSave: (marketName: string) => Promise<void>;
  onClear: () => void;
}

export function Header({
  total,
  itemCount,
  totalQuantity,
  onAddItem,
  onAddItems,
  onSave,
  onClear,
}: HeaderProps) {
  const [inputValue, setInputValue] = useState("");
  const [marketName, setMarketName] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [suggestionOpen, setSuggestionOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<SuggestionCategoryName | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<
    SuggestedSelection[]
  >([]);

  const activeCategory =
    SUGGESTION_CATALOG.find((category) => category.name === selectedCategory) ??
    null;
  const selectedCount = selectedProducts.length;

  function handleAdd() {
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      onAddItem(trimmedValue);
      setInputValue("");
      return;
    }

    setSuggestionOpen(true);
  }

  function openFinalizeDialog() {
    setMarketName("");
    setConfirmOpen(true);
  }

  function resetSuggestionState() {
    setSelectedCategory(null);
    setSelectedProducts([]);
  }

  function handleSuggestionOpenChange(nextOpen: boolean) {
    setSuggestionOpen(nextOpen);

    if (!nextOpen) {
      resetSuggestionState();
    }
  }

  function handleSelectCategory(category: SuggestionCategoryName) {
    setSelectedCategory(category);
  }

  function handleBackToCategories() {
    setSelectedCategory(null);
  }

  function handleToggleProduct(category: SuggestionCategoryName, name: string) {
    setSelectedProducts((current) => {
      const isSelected = current.some(
        (item) => item.category === category && item.name === name,
      );

      if (isSelected) {
        return current.filter(
          (item) => !(item.category === category && item.name === name),
        );
      }

      return [...current, { category, name }];
    });
  }

  function handleConfirmSuggestions() {
    if (selectedProducts.length === 0) {
      return;
    }

    onAddItems(selectedProducts.map((item) => item.name));
    setInputValue("");
    setSuggestionOpen(false);
    resetSuggestionState();
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
              <Tooltip content="Você pode arrastar itens para apagar e importar listas completas pela aba de importação.">
                <TouchableOpacity
                  activeOpacity={0.85}
                  className="w-12 h-12 bg-white/20 rounded-full justify-center items-center border border-white/35"
                >
                  <SealQuestionIcon size={20} color="white" weight="fill" />
                </TouchableOpacity>
              </Tooltip>
            </View>
          </View>
        </View>

        <View className="flex-row items-center gap-2.5 h-14">
          <Input
            className="flex-1 rounded-md border-white/35 bg-white/20 text-white h-full"
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
            className="w-12 h-full bg-white/20 rounded-md justify-center items-center border border-white/35"
          >
            <Text className="text-white text-3xl font-light leading-8">+</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-2.5 flex-row items-center justify-between gap-2 ">
          <View className="flex-row gap-2">
            <View className="rounded-full bg-white/15 border border-white/20 px-3 py-1">
              <Text className="text-white text-sm font-semibold">
                {itemCount} Produtos
              </Text>
            </View>
            <View className="rounded-full bg-white/15 border border-white/20 px-3 py-1">
              <Text className="text-white text-sm font-semibold">
                {totalQuantity} itens
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={openFinalizeDialog}
            activeOpacity={0.85}
            className=" h-12 bg-white/20 flex-row gap-2 px-2 rounded-md justify-center items-center border border-white/35"
          >
            <CheckFatIcon size={20} color="white" weight="fill" />
            <Text className="text-white text-md font-bold">Finalizar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <Dialog open={suggestionOpen} onOpenChange={handleSuggestionOpenChange}>
        <DialogContent className="rounded-lg h-5/6">
          <DialogHeader>
            <DialogTitle>Adicionar por sugestões</DialogTitle>
            <DialogDescription>
              Escolha uma categoria, selecione vários produtos e confirme para
              adicionar tudo de uma vez.
            </DialogDescription>
          </DialogHeader>

          <View className="gap-4 flex-1 ">
            {selectedCategory ? (
              <View className="gap-3 flex-1">
                <View className="flex-row items-center justify-between gap-3">
                  <TouchableOpacity
                    onPress={handleBackToCategories}
                    activeOpacity={0.85}
                    className="px-3 py-2"
                  >
                    <Text className="text-white font-semibold text-center">
                      <ArrowLeftIcon color={"white"} />
                    </Text>
                  </TouchableOpacity>
                  <Text className="text-white font-semibold text-center">
                    {selectedCategory}
                  </Text>
                </View>

                <ScrollView className="flex-1" showsVerticalScrollIndicator>
                  <View className="flex-row flex-wrap gap-2">
                    {activeCategory?.products.map((product) => {
                      const isSelected = selectedProducts.some(
                        (item) =>
                          item.category === selectedCategory &&
                          item.name === product,
                      );

                      return (
                        <TouchableOpacity
                          key={`${selectedCategory}-${product}`}
                          onPress={() =>
                            handleToggleProduct(selectedCategory, product)
                          }
                          activeOpacity={0.85}
                          className={
                            isSelected
                              ? "rounded-full border border-blue-300 bg-blue-500/30 px-4 py-3"
                              : "rounded-full border border-gray-700 bg-gray-800 px-4 py-3"
                          }
                        >
                          <Text className="text-white font-semibold">
                            {isSelected ? "✓ " : ""}
                            {product}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            ) : (
              <ScrollView className="flex-1" showsVerticalScrollIndicator>
                <View className="flex-row flex-wrap gap-2">
                  {SUGGESTION_CATALOG.map((category) => (
                    <TouchableOpacity
                      key={category.name}
                      onPress={() => handleSelectCategory(category.name)}
                      activeOpacity={0.85}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-3"
                    >
                      <Text className="text-white font-semibold">
                        {category.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            )}
          </View>

          <DialogFooter className="mt-4">
            <TouchableOpacity
              onPress={() => handleSuggestionOpenChange(false)}
              activeOpacity={0.85}
              className="rounded-md bg-gray-800 px-4 py-3 "
            >
              <Text className="text-white font-semibold text-center">
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleConfirmSuggestions}
              activeOpacity={0.85}
              disabled={selectedCount === 0}
              className={
                selectedCount === 0
                  ? "rounded-md bg-blue-500/40 px-4 py-3 text-center"
                  : "rounded-md bg-blue-500 px-4 py-3 text-center"
              }
            >
              <Text className="text-white font-semibold text-center">
                Adicionar {selectedCount}
              </Text>
            </TouchableOpacity>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle>Finalizar compra</DialogTitle>
            <DialogDescription>
              Você pode acessar seu histórico a qualquer momento para revisar ou
              reutilizar suas listas antigas.
            </DialogDescription>
          </DialogHeader>

          <View className="gap-2 flex flex-col items-center">
            <Input
              value={marketName}
              onChangeText={setMarketName}
              placeholder="Nome do mercado? (opcional)"
              placeholderTextColor="rgba(255,255,255,0.4)"
              className="bg-gray-800/80 px-4 rounded-md border w-full border-gray-600"
            />

            <Separator className="max-w-24 my-2" />

            <View className="rounded-md border border-gray-600 bg-gray-700 px-4 py-3 gap-1">
              <Text className="text-white font-semibold">
                Total de Produtos: {itemCount} • Total de Itens: {totalQuantity}{" "}
                • {formatCurrency(total)}
              </Text>
            </View>
          </View>

          <DialogFooter>
            <TouchableOpacity
              onPress={handleDiscard}
              activeOpacity={0.85}
              className="rounded-md bg-gray-800 px-4 py-3"
            >
              <Text className="text-white text-center font-semibold">
                Não salvar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSave}
              activeOpacity={0.85}
              className="rounded-md bg-blue-500 px-4 py-3"
            >
              <Text className="text-white text-center font-semibold">
                Salvar
              </Text>
            </TouchableOpacity>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
