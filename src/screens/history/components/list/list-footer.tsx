import React, { useContext } from 'react'
import { View } from 'react-native'
import { Button } from '../../../../global-components/button'
import { ArrowDown, Trash2 } from 'lucide-react-native'
import colors from 'tailwindcss/colors'
import { HistoryContext } from '../../../../contexts/history-context-provider'
import { useNavigation } from '@react-navigation/native'
import { INavigatorProps } from '../../../../@types/interfaces'
import { ListContext } from '../../../../contexts/list-context'

export function ListFooter() {
  const { handleRemoveHistoryRecordById } = useContext(HistoryContext)
  const { navigate } = useNavigation<INavigatorProps>()
  const { list, handleDetails, listID, isOpen } = useContext(ListContext)

  return (
    <View className={'flex-row mt-8 justify-between items-center'}>
      <Button
        icon={<Trash2 color={colors.red['500']} size={24} />}
        className={'bg-transparent'}
        onPress={() => handleRemoveHistoryRecordById(listID)}
      />
      {list.length > 5 && (
        <Button
          icon={<ArrowDown color={colors.blue['500']} size={24} />}
          className={`bg-transparent ${isOpen && 'rotate-180'}`}
          onPress={() => handleDetails()}
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
  )
}
