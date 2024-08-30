import React from 'react'
import { Text, View } from 'react-native'
import { Logo } from '../../../global-components/logo'

export function Header() {
  return (
    <View className={'bg-transparent p-4 justify-between items-center '}>
      <Logo />

      <Text className={'text-white text-2xl font-bold self-start'}>
        Histórico
      </Text>

      <Text className={' w-full text-white leading-6 text-md'}>
        Veja o histórico das últimas 5 compras e sua despesa total. Clique na
        lista para importar e reutilizar.
      </Text>
    </View>
  )
}
