import { ShoppingBag } from 'lucide-react-native'
import { View, Text } from 'react-native'

export function ListEmpty() {
  return (
    <View className={'flex-1 gap-4 items-center mt-24'}>
      <Text className={'text-gray-400 text-4xl font-bold'}>Lista Vazia</Text>

      <ShoppingBag color={'#323238'} size={36} />

      <Text className={'text-gray-400 px-12 text-xl  text-center'}>
        Importe uma lista ou adicione um item único acima.
      </Text>
    </View>
  )
}
