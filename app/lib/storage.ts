import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShoppingHistoryEntry, ShoppingList } from '../types/shopping';

const STORAGE_KEY = '@minhalistadecompras:shopping-list';
const HISTORY_STORAGE_KEY = '@minhalistadecompras:shopping-history';
const MAX_HISTORY_ITEMS = 4;

export const saveShoppingList = async (list: ShoppingList): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(list);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving shopping list:', error);
  }
};

export const loadShoppingList = async (): Promise<ShoppingList | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as ShoppingList;
    }
    return null;
  } catch (error) {
    console.error('Error loading shopping list:', error);
    return null;
  }
};

export const loadShoppingHistory = async (): Promise<ShoppingHistoryEntry[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as ShoppingHistoryEntry[];
    }

    return [];
  } catch (error) {
    console.error('Error loading shopping history:', error);
    return [];
  }
};

export const saveShoppingHistory = async (
  history: ShoppingHistoryEntry[],
): Promise<void> => {
  try {
    const limitedHistory = history.slice(0, MAX_HISTORY_ITEMS);
    await AsyncStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(limitedHistory));
  } catch (error) {
    console.error('Error saving shopping history:', error);
  }
};

export const addShoppingHistoryEntry = async (
  entry: ShoppingHistoryEntry,
): Promise<void> => {
  try {
    const currentHistory = await loadShoppingHistory();
    const nextHistory = [entry, ...currentHistory].slice(0, MAX_HISTORY_ITEMS);
    await saveShoppingHistory(nextHistory);
  } catch (error) {
    console.error('Error adding shopping history entry:', error);
  }
};
