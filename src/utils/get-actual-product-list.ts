import AsyncStorage from '@react-native-async-storage/async-storage'
import { IProduct } from '../@types/interfaces'

export async function getActualProductList(): Promise<IProduct[] | false> {
  const response = await AsyncStorage.getItem('actual-product-list')

  if (response) {
    return JSON.parse(response)
  }
  return false
}
