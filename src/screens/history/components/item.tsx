import React from 'react'
import { Text, View } from 'react-native'
import { IProduct } from '../../../@types/interfaces'

interface IItemProps {
  product: IProduct
}

export function Item({ product: { price, quantity, name } }: IItemProps) {
  const total = Number(price) * Number(quantity)

  return (
    <View className={'flex-row mb-2 justify-between items-center'}>
      <Text className={'text-white flex-1'}>{name}</Text>
      <Text className={'text-white flex-1'}>R$ {price}</Text>
      <Text className={'text-white flex-1'}>{quantity} un.</Text>
      <Text className={'text-white min-w-fit'}>R$ {total} </Text>
    </View>
  )
}
