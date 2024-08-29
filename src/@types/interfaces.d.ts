import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

interface IProduct {
  id: string
  name: string
  price: string
  quantity: string
  picked: boolean
}

type IImportProduct = Pick<IProduct, 'quantity' | 'name'>

type IAppRoutes = {
  home:
    | undefined
    | {
        listToImport: IImportProduct[]
      }
  importList: undefined
  // popup: undefined
  // history: undefined
}

interface INavigatorProps extends BottomTabNavigationProp<IAppRoutes> {}
