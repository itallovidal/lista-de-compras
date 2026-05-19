import React, { createContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { ShoppingHistoryEntry, ShoppingItem, ShoppingList } from '../types/shopping';
import {
  addShoppingHistoryEntry,
  loadShoppingList,
  saveShoppingList,
} from '../lib/storage';
import { resolveMarketName } from '../lib/marketName';

interface ShoppingContextType {
  list: ShoppingList;
  addItem: (name: string) => void;
  addItems: (names: string[]) => void;
  updateItem: (id: string, updates: Partial<ShoppingItem>) => void;
  removeItem: (id: string) => void;
  saveCurrentList: (marketName: string) => Promise<void>;
  clearCurrentList: () => void;
  getTotal: () => number;
}

export const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

interface ShoppingProviderProps {
  children: ReactNode;
}

export const ShoppingProvider: React.FC<ShoppingProviderProps> = ({ children }) => {
  const [list, setList] = useState<ShoppingList>({
    items: [],
    total: 0,
  });

  useEffect(() => {
    const loadList = async () => {
      const savedList = await loadShoppingList();
      if (savedList) {
        setList(savedList);
      }
    };
    loadList();
  }, []);

  const calculateTotal = useCallback((items: ShoppingItem[]): number => {
    return items.reduce((sum, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 1;
      return sum + (price * quantity);
    }, 0);
  }, []);

  const addItem = useCallback((name: string) => {
    if (!name.trim()) return;

    setList((prev) => {
      const newItem: ShoppingItem = {
        id: Date.now().toString(),
        name: name.trim(),
        price: 0,
        quantity: 1,
      };
      const newItems = [...prev.items, newItem];
      const newList = {
        items: newItems,
        total: calculateTotal(newItems),
      };
      saveShoppingList(newList);
      return newList;
    });
  }, [calculateTotal]);

  const addItems = useCallback((names: string[]) => {
    const cleanedNames = names.map((name) => name.trim()).filter(Boolean);
    if (cleanedNames.length === 0) return;

    setList((prev) => {
      const newItems: ShoppingItem[] = [
        ...prev.items,
        ...cleanedNames.map((name) => ({
          id: Date.now().toString() + Math.random().toString(36).slice(2),
          name,
          price: 0,
          quantity: 1,
        })),
      ];
      const newList = {
        items: newItems,
        total: calculateTotal(newItems),
      };
      saveShoppingList(newList);
      return newList;
    });
  }, [calculateTotal]);

  const updateItem = useCallback((id: string, updates: Partial<ShoppingItem>) => {
    setList((prev) => {
      const newItems = prev.items.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      );
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    });
  }, [calculateTotal]);

  const removeItem = useCallback((id: string) => {
    setList((prev) => {
      const newItems = prev.items.filter((item) => item.id !== id);
      const newList = {
        items: newItems,
        total: calculateTotal(newItems),
      };
      saveShoppingList(newList);
      return newList;
    });
  }, [calculateTotal]);

  const clearCurrentList = useCallback(() => {
    const emptyList = {
      items: [],
      total: 0,
    };
    setList(emptyList);
    saveShoppingList(emptyList);
  }, []);

  const saveCurrentList = useCallback(async (marketName: string) => {
    if (list.items.length === 0) {
      return;
    }

    const historyEntry: ShoppingHistoryEntry = {
      id: Date.now().toString(),
      marketName: resolveMarketName(marketName),
      items: list.items,
      total: list.total,
      itemCount: list.items.length,
      createdAt: new Date().toISOString(),
    };

    await addShoppingHistoryEntry(historyEntry);
    clearCurrentList();
  }, [clearCurrentList, list]);

  const getTotal = useCallback(() => {
    return list.total;
  }, [list.total]);

  return (
    <ShoppingContext.Provider
      value={{
        list,
        addItem,
        addItems,
        updateItem,
        removeItem,
        saveCurrentList,
        clearCurrentList,
        getTotal,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};
