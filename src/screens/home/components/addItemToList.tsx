import React from 'react'
import { Keyboard, TextInput, View } from 'react-native'
import { Button } from '../../../global-components/button'
import { Plus } from 'lucide-react-native'

export function AddItemToList() {
  return (
    <View className={'flex-row items-center max-h-24 gap-4 p-4'}>
      <TextInput
        onSubmitEditing={() => {
          Keyboard.dismiss()
        }}
        placeholder={'Mamão, pera, uva..'}
        className={'flex-1 rounded-md  p-4 bg-white'}
      />
      <Button icon={<Plus color={'white'} size={16} />} />
    </View>
  )
}
