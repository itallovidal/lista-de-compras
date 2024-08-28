import React from 'react'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import { Product } from './Product'

const list = [
  {
    id: 1,
    name: 'banana',
    price: '10',
    quantity: '2',
    picked: true,
  },
  {
    id: 2,
    name: 'pera',
    price: '4',
    quantity: '1',
    picked: true,
  },
]

export function ProductList() {
  return (
    <KeyboardAwareFlatList
      contentContainerStyle={{
        gap: 12,
      }}
      // style={{ height: height - 200 }}
      // ListEmptyComponent={<EmptyListComponent />}
      extraScrollHeight={130}
      enableOnAndroid={true}
      keyboardShouldPersistTaps={'always'}
      data={list}
      keyExtractor={(product) => product.id}
      renderItem={({ item }: { item: IProduct; index: number }) => (
        <Product key={item.id} product={item} />
      )}
    ></KeyboardAwareFlatList>
  )
}
