import AsyncStorage from '@react-native-async-storage/async-storage'
import { IProduct } from '../@types/interfaces'

export async function getStoredList(): Promise<IProduct[] | false> {
  const response = await AsyncStorage.getItem('lastList')
  if (response) {
    return JSON.parse(response)
  }
  return false
}
