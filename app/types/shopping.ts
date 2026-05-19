export interface ShoppingItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ShoppingList {
  items: ShoppingItem[];
  total: number;
}

export interface ShoppingHistoryEntry {
  id: string;
  marketName: string;
  items: ShoppingItem[];
  total: number;
  itemCount: number;
  createdAt: string;
}
