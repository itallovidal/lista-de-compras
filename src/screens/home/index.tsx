import { View } from 'react-native'
import { FinishList } from './components/finish-list'
import { AddItemToList } from './components/add-item-to-list'
import { ProductList } from './components/product-list'
import GlobalContextProvider from '../../contexts/global-context-provider'
import { ListResume } from './components/list-resume'

export function Home() {
  return (
    <GlobalContextProvider>
      <View className={'flex-1 bg-gray-700'}>
        <FinishList />
        <AddItemToList />
        <ListResume />
        <ProductList />
      </View>
    </GlobalContextProvider>
  )
}
