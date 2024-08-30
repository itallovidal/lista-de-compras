import React, { useContext, useMemo } from 'react'
import { Text, View } from 'react-native'
import { ListContext } from '../../../../contexts/list-context'

export function ListResume() {
  const { list, createdAt } = useContext(ListContext)

  const formattedDate = new Intl.DateTimeFormat('pt-BR').format(
    new Date(createdAt),
  )

  const cartTotal = useMemo(
    () =>
      list.reduce((acc, product) => {
        const qtd =
          Number(product.quantity) === 0 ? 1 : Number(product.quantity)
        return acc + Number(product.price) * qtd
      }, 0),
    [list.length],
  )

  const cartTotalQuantity = useMemo(
    () =>
      list.reduce((acc, product) => {
        const qtd =
          Number(product.quantity) === 0 ? 1 : Number(product.quantity)
        return acc + qtd
      }, 0),
    [list.length],
  )

  return (
    <View className={'flex-row mb-2 justify-between items-center'}>
      <Text className={'text-white/40 font-bold'}>{formattedDate}</Text>
      <Text className={'text-white/40 font-bold'}>
        {cartTotalQuantity} itens.
      </Text>
      <Text className={'text-blue-600 font-bold'}>Total R$ {cartTotal}</Text>
    </View>
  )
}
