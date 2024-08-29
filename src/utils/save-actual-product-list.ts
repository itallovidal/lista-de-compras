import { IProduct } from '../@types/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function saveActualProductList(data: IProduct[]): Promise<void> {
  const list = JSON.stringify(data)
  await AsyncStorage.setItem('actual-product-list', list)
}
