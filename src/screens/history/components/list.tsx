import React, {useCallback, useContext, useMemo} from 'react'
import Animated, { FadeIn, FadeOutUp } from 'react-native-reanimated'
import { Button } from '../../../global-components/button'
import { Item } from './item'
import { IHistoryList, INavigatorProps } from '../../../@types/interfaces'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ArrowDown, Trash2 } from 'lucide-react-native'
import colors from 'tailwindcss/colors'
import { HistoryContext } from '../../../contexts/history-context-provider'

export function List({ list, createdAt, id }: IHistoryList) {
  const { navigate } = useNavigation<INavigatorProps>()
  const { handleRemoveHistoryRecordById } = useContext(HistoryContext)
  const [isOpen, setIsOpen] = React.useState(false)

  const formattedDate = new Intl.DateTimeFormat('pt-BR').format(
    new Date(createdAt),
  )

  const cartTotal = useMemo(
    () =>
      list.reduce((acc, product) => {
        const qtd =
          Number(product.quantity) === 0 ? 1 : Number(product.quantity)
        return acc + Number(product.price) * qtd
      }, 0),
    [list.length],
  )

  return (
    <Animated.View
      className={'bg-gray-600 rounded-md  p-4'}
      entering={FadeIn}
      exiting={FadeOutUp}
    >
      <View className={'flex-row mb-2 justify-between items-center'}>
        <Text className={'text-white/40 font-bold'}>{formattedDate}</Text>
        <Text className={'text-blue-600 font-bold'}>Total R$ {cartTotal}</Text>
      </View>
      <View className={'flex  '}>
        {list.map((item, index) => {
          if (!isOpen && index > 4) {
            return <></>
          }

          return <Item key={item.id} product={item} />
        })}
      </View>

      <View className={'flex-row mt-8 justify-between items-center'}>
        <Button
          icon={<Trash2 color={colors.red['500']} size={24} />}
          className={'bg-transparent'}
          onPress={() => handleRemoveHistoryRecordById(id)}
        />
        {list.length > 5 && (
          <Button
            icon={<ArrowDown color={colors.blue['500']} size={24} />}
            className={`bg-transparent ${isOpen && 'rotate-180'}`}
            onPress={() => setIsOpen((prev) => !prev)}
          />
        )}

        <Button
          onPress={() =>
            navigate('home', {
              list,
              fromHistory: true,
            })
          }
          className={' w-fit '}
        >
          Reutilizar
        </Button>
      </View>
    </Animated.View>
  )
}
