import { useContext, useEffect } from 'react'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import { Product } from './product'
import { IImportProduct, IProduct } from '../../../@types/interfaces'
import { GlobalContext } from '../../../contexts/global-context-provider'
import { ListEmpty } from './list-empty'

interface IProductListProps {
  listToImport: IImportProduct[] | undefined
}

export function ProductList({ listToImport }: IProductListProps) {
  const { list, importList } = useContext(GlobalContext)

  useEffect(() => {
    if (listToImport && list.length === 0) {
      importList(listToImport)
    }
  }, [listToImport])

  return (
    <KeyboardAwareFlatList
      contentContainerStyle={{
        gap: 12,
      }}
      // style={{ height: height - 200 }}
      ListEmptyComponent={<ListEmpty />}
      extraScrollHeight={130}
      enableOnAndroid={true}
      keyboardShouldPersistTaps={'always'}
      data={list}
      keyExtractor={(product) => product.id}
      renderItem={({ item }: { item: IProduct; index: number }) => (
        <Product key={item.id} product={item} />
      )}
    />
  )
}
