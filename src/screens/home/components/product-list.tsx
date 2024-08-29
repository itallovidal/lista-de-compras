import { useContext, useEffect, useRef } from 'react'
import { Product } from './product'
import { IParamProps, IProduct } from '../../../@types/interfaces'
import { GlobalContext } from '../../../contexts/global-context-provider'
import { ListEmpty } from './list-empty'
import { FlatList } from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'

interface IProductListProps {
  params: IParamProps | undefined
}

export function ProductList({ params }: IProductListProps) {
  const { list, importList, reuseList } = useContext(GlobalContext)
  const flatListRef = useRef<FlatList<IProduct>>(null)

  useEffect(() => {
    if (!params) return

    if (!params.fromHistory) {
      importList(params.list)
      return
    }

    reuseList(params.list as IProduct[])
  }, [params])

  return (
    <Animated.FlatList
      itemLayoutAnimation={LinearTransition}
      removeClippedSubviews={false}
      contentContainerStyle={{
        gap: 12,
        paddingBottom: 100,
      }}
      ref={flatListRef}
      ListEmptyComponent={<ListEmpty />}
      keyboardShouldPersistTaps={'always'}
      data={list}
      keyExtractor={(product) => product.id}
      renderItem={({ item, index }: { item: IProduct; index: number }) => (
        <Product
          productIndex={index}
          flatListRef={flatListRef}
          product={item}
        />
      )}
    />
  )
}
