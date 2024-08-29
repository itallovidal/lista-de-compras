import { Header } from './components/header'
import { View, Text, TextInput, Keyboard } from 'react-native'
import { Button } from '../../global-components/button'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { IImportProduct, INavigatorProps } from '../../@types/interfaces'

export function ImportList() {
  const [text, setText] = React.useState<string>('')
  const { navigate } = useNavigation<INavigatorProps>()

  function handleImportList() {
    if (text.length < 2) {
      return
    }
    Keyboard.dismiss()

    const items = text.split('\n')

    const filteredList = items.filter((item) => item !== '')

    const regexPickStrings = /\d+\s+/
    const regexPickAllNumbers = /\d+/g

    const newList: IImportProduct[] = filteredList.map((item) => {
      const strings = item
        .split(regexPickStrings)
        .filter((item) => item !== '')[0]
      const quantity = Number(item.match(regexPickAllNumbers))

      return {
        name: strings,
        quantity:
          quantity === 0 || quantity > 50 || isNaN(quantity)
            ? '1'
            : quantity.toString(),
      } as unknown as IImportProduct
    })

    setText('')
    navigate('home', {
      list: newList,
      fromHistory: false,
    })
  }

  return (
    <View className={'flex-1 bg-gray-700'}>
      <Header />

      <View className={'p-4 flex-1'}>
        <TextInput
          style={{
            textAlignVertical: 'top',
          }}
          multiline={true}
          onChangeText={setText}
          value={text}
          className={
            'mx-1 text-white bg-gray-600 flex-1 mb-4 p-2 pl-4  rounded-md'
          }
          keyboardType={'default'}
        />
        <Button onPress={handleImportList} className={'w-fit'}>
          Importar lista!
        </Button>
      </View>
    </View>
  )
}
