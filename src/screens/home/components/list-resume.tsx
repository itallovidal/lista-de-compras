import { View, Text } from 'react-native'
import { useContext } from 'react'
import { GlobalContext } from '../../../contexts/global-context-provider'

export function ListResume() {
  const { list } = useContext(GlobalContext)

  const cartTotal = list.reduce((acc, product) => {
    const qtd = Number(product.quantity) === 0 ? 1 : Number(product.quantity)
    return acc + Number(product.price) * qtd
  }, 0)

  return (
    <View className={'flex-row p-4 justify-between items-center'}>
      <Text className={'text-white'}>{list.length} Items</Text>
      <Text className={'font-bold text-blue-700'}>
        R$ {list[0] && cartTotal}
      </Text>
    </View>
  )
}
