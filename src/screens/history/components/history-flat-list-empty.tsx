import { Logs } from 'lucide-react-native'
import { View, Text } from 'react-native'

export function HistoryFlatListEmpty() {
  return (
    <View className={'flex-1 gap-4 items-center mt-24'}>
      <Logs color={'#323238'} size={36} />

      <Text className={'text-gray-400 px-12 text-xl  text-center'}>
        Sem histórico por enquanto
      </Text>
    </View>
  )
}
