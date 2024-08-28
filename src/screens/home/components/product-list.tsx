import React, { useContext } from 'react'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import { Product } from './product'
import { IProduct } from '../../../@types/interfaces'
import { GlobalContext } from '../../../contexts/global-context-provider'

export function ProductList() {
  const { list } = useContext(GlobalContext)

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
