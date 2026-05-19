import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/ui/Header";
import { ShoppingList } from "../components/ShoppingItem/ShoppingList";
import { useShopping } from "../hooks/useShopping";

// Project convention: prefer named functions in app/pages and app/components.
export function HomeScreen() {
  const { list, addItem, updateItem, removeItem, saveCurrentList, clearCurrentList, getTotal } = useShopping();

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <StatusBar barStyle="default" backgroundColor="#3B82F6" />
      <Header
        total={getTotal()}
        itemCount={list.items.length}
        onAddItem={addItem}
        onSave={saveCurrentList}
        onClear={clearCurrentList}
      />
      <ShoppingList
        items={list.items}
        onUpdateItem={updateItem}
        onRemoveItem={removeItem}
      />
    </SafeAreaView>
  );
}
