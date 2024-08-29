import React from 'react'
import { Text, View } from 'react-native'
import { Logo } from '../../../global-components/logo'

export function Header() {
  return (
    <View className={'bg-transparent p-4 justify-between items-center '}>
      <Logo />

      <Text className={'text-white text-2xl font-bold self-start'}>
        Importação rápida.
      </Text>

      <Text className={'text-white leading-6 text-md self-start'}>
        Cole a lista com o padrão abaixo para que ela possa ser importada
        automaticamente.
      </Text>

      <View className={'mt-4 w-full'}>
        <Text className={'italic text-blue-700'}>2 peras </Text>
        <Text className={'italic text-blue-700'}>1 maçã </Text>
        <Text className={'italic text-blue-700'}>batata</Text>
        <Text className={'italic text-blue-700'}>300g de mussarela</Text>
      </View>
    </View>
  )
}
