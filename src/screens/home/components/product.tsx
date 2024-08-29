import { Text, TextInput, Keyboard, FlatList } from 'react-native'
import { Button } from '../../../global-components/button'
import { Trash2 } from 'lucide-react-native'
import { IProduct } from '../../../@types/interfaces'
import { RefObject, useContext } from 'react'
import { GlobalContext } from '../../../contexts/global-context-provider'
import Animated, { FadeIn, SlideOutRight } from 'react-native-reanimated'

interface IProductProps {
  product: IProduct
  flatListRef: RefObject<FlatList<IProduct>>
  productIndex: number
}

export function Product({
  product: { name, id, price, quantity },
  flatListRef,
  productIndex,
}: IProductProps) {
  const { removeProductFromList, changePrice, changeQuantity } =
    useContext(GlobalContext)

  function handleChangePrice(text: string) {
    if (text.includes(',') || text.includes('-') || text.includes(' ')) {
      return
    }
    changePrice(text, id)
  }

  function handleChangeQuantity(text: string) {
    if (text.includes(',') || text.includes('-') || text.includes(' ')) {
      return
    }
    changeQuantity(text, id)
  }

  return (
    <Animated.View
      entering={FadeIn.delay(productIndex * 100)}
      exiting={SlideOutRight}
      className={
        'bg-gray-400 flex-row justify-between items-center rounded-md mx-4 p-4'
      }
    >
      <Text className={'text-white flex-1'}>{name}</Text>
      <TextInput
        onFocus={() => {
          flatListRef.current?.scrollToIndex({
            index: productIndex,
          })
        }}
        onSubmitEditing={() => {
          Keyboard.dismiss()
        }}
        onChangeText={handleChangePrice}
        value={!price ? undefined : price}
        maxLength={5}
        placeholderTextColor={'gray'}
        className={
          'mx-1 text-white bg-gray-600 text-center w-16 p-2 rounded-md'
        }
        placeholder={'R$'}
        keyboardType={'numeric'}
      />
      <TextInput
        onSubmitEditing={() => {
          Keyboard.dismiss()
        }}
        onChangeText={handleChangeQuantity}
        value={!quantity ? undefined : quantity}
        maxLength={2}
        placeholderTextColor={'gray'}
        className={
          'mx-1 text-white bg-gray-600 text-center w-16 p-2 rounded-md'
        }
        placeholder={'QTD'}
        keyboardType={'numeric'}
      />

      <Button
        icon={<Trash2 color={'red'} size={24} />}
        className={'bg-transparent'}
        onPress={() => removeProductFromList(id)}
      />
    </Animated.View>
  )
}
