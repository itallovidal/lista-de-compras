import React, { useContext } from 'react'
import { View } from 'react-native'
import { Item } from './item'
import { ListContext } from '../../../../contexts/list-context'

export function ListContent() {
  const { list, isOpen } = useContext(ListContext)

  return (
    <View className={'flex'}>
      {list.map((item, index) => {
        if (!isOpen && index > 4) {
          return null
        }

        return <Item key={item.id} product={item} />
      })}
    </View>
  )
}
