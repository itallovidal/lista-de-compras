import React, { useContext } from 'react'
import { View } from 'react-native'
import { Logo } from '../../../global-components/logo'
import { Button } from '../../../global-components/button'
import { GlobalContext } from '../../../contexts/global-context-provider'

export function FinishList() {
  const { finishList, list } = useContext(GlobalContext)

  return (
    <View
      className={'bg-transparent p-4 justify-between items-center flex-row'}
    >
      <Logo />
      <Button
        disabled={list.length === 0}
        onPress={finishList}
        className={`bg-gray-600 ${list.length === 0 && 'opacity-20'}`}
      >
        Finalizar lista
      </Button>
    </View>
  )
}
