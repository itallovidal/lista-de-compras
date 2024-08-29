import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

interface IProduct {
  id: string
  name: string
  price: string
  quantity: string
}

type IImportProduct = Pick<IProduct, 'quantity' | 'name'>

interface IHistoryList {
  id: string
  createdAt: Date
  list: IProduct[]
}

type IAppRoutes = {
  home:
    | undefined
    | {
        list: IImportProduct[]
        fromHistory: boolean
      }
  importList: undefined
  history: undefined
}

interface INavigatorProps extends BottomTabNavigationProp<IAppRoutes> {}

interface IParamProps {
  list: IImportProduct[] | IProduct[]
  fromHistory: boolean
}
