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