import React, { useCallback, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { getUserHistory } from '../../../utils/get-user-history'
import { List } from './list'
import { HistoryContext } from '../../../contexts/history-context-provider'
import Animated, { LinearTransition } from 'react-native-reanimated'
import { ListEmpty } from './list-empty'
export function HistoryList() {
  const { history, handleSetHistory } = useContext(HistoryContext)

  useFocusEffect(
    useCallback(() => {
      getUserHistory().then((data) => handleSetHistory(data.history))
    }, []),
  )

  return (
    <Animated.FlatList
      ListEmptyComponent={<ListEmpty />}
      itemLayoutAnimation={LinearTransition}
      className={'flex-1 mx-4 mb-4'}
      contentContainerStyle={{
        gap: 12,
      }}
      keyExtractor={(record) => `${record.createdAt}-${record.id}`}
      data={history}
      renderItem={({ item }) => {
        return <List createdAt={item.createdAt} list={item.list} id={item.id} />
      }}
    />
  )
}
