import { Header } from './components/header'
import { View } from 'react-native'
import { HistoryContextProvider } from '../../contexts/history-context-provider'
import { HistoryFlatlist } from './components/historyFlatlist'

export function History() {
  return (
    <HistoryContextProvider>
      <View className={'flex-1 bg-gray-700'}>
        <Header />
        <HistoryFlatlist />
      </View>
    </HistoryContextProvider>
  )
}
