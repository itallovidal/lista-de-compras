import React, { useCallback, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getUserHistory } from '../../../utils/get-user-history'
import { List } from './list'
import { HistoryContext } from '../../../contexts/history-context-provider'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { HistoryFlatListEmpty } from './history-flat-list-empty'
import { Text } from 'react-native'

export function HistoryFlatlist() {
  const { history, handleSetHistory } = useContext(HistoryContext)

  console.log('-----')
  console.log(JSON.stringify(history))
  console.log('-----')

  useFocusEffect(
    useCallback(() => {
      getUserHistory().then((data) => handleSetHistory(data.history))
    }, []),
  )

  return (
    <>
      <Text className={'mx-4 text-white'}>{history.length}</Text>

      <Animated.FlatList
        ListEmptyComponent={<HistoryFlatListEmpty />}
        itemLayoutAnimation={LinearTransition}
        className={'flex-1 bg-blue-400 mx-4 mb-4'}
        contentContainerStyle={{
          gap: 12,
        }}
        data={history}
        renderItem={({ item }) => {
          console.log('renderizando...')
          console.log(item)
          return (
            <List
              key={item.id}
              createdAt={item.createdAt}
              list={item.list}
              id={item.id}
            />
          )
        }}
      />
    </>
  )
}
