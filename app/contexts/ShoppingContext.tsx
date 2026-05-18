import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { ShoppingItem, ShoppingList } from '../types/shopping';

interface ShoppingContextType {
  list: ShoppingList;
  addItem: (name: string) => void;
  updateItem: (id: string, updates: Partial<ShoppingItem>) => void;
  removeItem: (id: string) => void;
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
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
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
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    });
  }, [calculateTotal]);

  const getTotal = useCallback(() => {
    return list.total;
  }, [list.total]);

  return (
    <ShoppingContext.Provider
      value={{ list, addItem, updateItem, removeItem, getTotal }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};