import AsyncStorage from '@react-native-async-storage/async-storage'
import { IHistoryList } from '../@types/interfaces'

export async function getUserHistory(): Promise<{ history: IHistoryList[] }> {
  const response = await AsyncStorage.getItem('history')

  if (!response) return { history: [] }

  const history = JSON.parse(response)
  if (!history.history) return { history: [] }

  return history
}
