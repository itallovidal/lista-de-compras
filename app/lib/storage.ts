import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShoppingList } from '../types/shopping';

const STORAGE_KEY = '@minhalistadecompras:shopping-list';

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