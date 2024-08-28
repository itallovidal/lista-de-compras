import React from 'react'
import { Image, View } from 'react-native'
import logo from '../../assets/logo.png'

export function FinishList() {
  return (
    <View className={'flex-1 justify-center items-center flex-row'}>
      <Image source={logo} alt={''} resizeMode={'contain'} h={50} w={200} />
    </View>
  )
}
