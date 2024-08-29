import { IProduct } from '../@types/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as crypto from 'expo-crypto'
import { getUserHistory } from './get-user-history'

export async function saveListInHistory(data: IProduct[]): Promise<void> {
  const { history } = await getUserHistory()
  let updatedHistory

  const record = {
    id: `${crypto.randomUUID()}`,
    list: data,
    createdAt: new Date(),
  }

  if (!history.length) {
    updatedHistory = JSON.stringify({ history: [record] })
  }

  if (history.length > 0 && history.length < 5) {
    updatedHistory = JSON.stringify({ history: [record, ...history] })
  }

  if (history.length === 5) {
    history.pop()
    updatedHistory = JSON.stringify({ history: [record, ...history] })
  }

  await AsyncStorage.setItem('history', updatedHistory!)
}
