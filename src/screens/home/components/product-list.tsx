import { useContext, useEffect, useRef } from 'react'
import { Product } from './product'
import { IImportProduct, IProduct } from '../../../@types/interfaces'
import { GlobalContext } from '../../../contexts/global-context-provider'
import { ListEmpty } from './list-empty'
import { FlatList } from 'react-native'
import Animated, {
  FadeIn,
  LinearTransition,
  SlideOutRight,
} from 'react-native-reanimated'
interface IProductListProps {
  listToImport: IImportProduct[] | undefined
}

export function ProductList({ listToImport }: IProductListProps) {
  const { list, importList } = useContext(GlobalContext)
  const flatListRef = useRef<FlatList<IProduct>>(null)

  useEffect(() => {
    if (listToImport && list.length === 0) {
      importList(listToImport)
    }
  }, [listToImport])

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
          key={item.id}
          product={item}
        />
      )}
    />
  )
}
