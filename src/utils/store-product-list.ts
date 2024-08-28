import { IProduct } from '../@types/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function storeProductList(data: IProduct[]): Promise<void> {
  const list = JSON.stringify(data)
  await AsyncStorage.setItem('lastList', list)
}
