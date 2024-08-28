import React, { useContext } from 'react'
import { View } from 'react-native'
import { Logo } from '../../../global-components/logo'
import { Button } from '../../../global-components/button'
import { GlobalContext } from '../../../contexts/global-context-provider'

export function FinishList() {
  const { finishList } = useContext(GlobalContext)

  return (
    <View
      className={'bg-transparent p-4 justify-between items-center flex-row'}
    >
      <Logo />
      <Button onPress={finishList} className={'bg-gray-600'}>
        Finalizar lista
      </Button>
    </View>
  )
}
