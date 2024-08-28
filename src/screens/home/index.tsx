import { View } from 'react-native'
import { FinishList } from './components/finish-list'
import { AddItemToList } from './components/addItemToList'
import { ProductList } from './components/product-list'

export function Home() {
  return (
    <View className={'flex-1 bg-gray-700'}>
      <FinishList />
      <AddItemToList />
      <ProductList />
    </View>
  )
}
