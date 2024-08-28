import { Image } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'

export function Logo() {
  return <Image className={'object-contain w-[200] h-[50]'} source={logo} />
}
