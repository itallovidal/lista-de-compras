import React from 'react'
import { View } from 'react-native'
import { Logo } from '../../../global-components/logo'

export function Header() {
  return (
    <View
      className={'bg-transparent p-4 justify-between items-center flex-row'}
    >
      <Logo />
    </View>
  )
}
