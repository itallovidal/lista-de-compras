import React from 'react'
import { View } from 'react-native'
import { Logo } from '../../../global-components/logo'
import { Button } from '../../../global-components/button'

export function FinishList() {
  return (
    <View
      className={'bg-transparent p-4 justify-between items-center flex-row'}
    >
      <Logo />
      <Button>Finalizar lista</Button>
    </View>
  )
}
