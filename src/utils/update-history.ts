import { IHistoryList } from '../@types/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function updateHistory(updated: IHistoryList[]): Promise<void> {
  const updatedHistory = JSON.stringify({
    history: updated,
  })
  await AsyncStorage.setItem('history', updatedHistory)
}
