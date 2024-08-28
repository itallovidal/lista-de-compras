import { View, Text, TextInput } from 'react-native'
import { Button } from '../../../global-components/button'
import { Trash2 } from 'lucide-react-native'

interface IProductProps {
  product: IProduct
}

export function Product({ product: { name } }: IProductProps) {
  return (
    <View
      className={
        'bg-gray-400 flex-row justify-between items-center rounded-md mx-4 p-4'
      }
    >
      <Text className={'text-white flex-1 '}>{name}</Text>
      <TextInput
        maxLength={5}
        placeholderTextColor={'gray'}
        className={
          'mx-1 text-white bg-gray-600 text-center w-16 p-2 rounded-md'
        }
        placeholder={'R$'}
        keyboardType={'numeric'}
      />
      <TextInput
        maxLength={5}
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
        // onPress={() => deleteProduct(product.id)}
      />
    </View>
  )
}
