import { Keyboard, View } from 'react-native'
import { FinishList } from './components/finish-list'
import { AddItemToList } from './components/add-item-to-list'
import { ProductList } from './components/product-list'
import GlobalContextProvider from '../../contexts/global-context-provider'
import { ListResume } from './components/list-resume'
import { useRoute } from '@react-navigation/native'
import { IImportProduct } from '../../@types/interfaces'

interface IParamProps {
  listToImport: IImportProduct[]
}

export function Home() {
  const { params } = useRoute()
  const routeParams = params as IParamProps | undefined

  return (
    <GlobalContextProvider>
      <View className={'flex-1 bg-gray-700'}>
        <FinishList />
        <AddItemToList />
        <ListResume />
        <ProductList listToImport={routeParams?.listToImport} />
      </View>
    </GlobalContextProvider>
  )
}
