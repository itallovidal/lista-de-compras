import { useContext } from 'react';
import { ShoppingContext } from '../contexts/ShoppingContext';

export const useShopping = () => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShopping must be used within a ShoppingProvider');
  }
  return context;
};