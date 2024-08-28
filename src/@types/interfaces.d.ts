import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

interface IProduct {
  id: string
  name: string
  price: string
  quantity: string
  picked: boolean
}

type IAppRoutes = {
  home: undefined
  // importList: undefined
  // popup: undefined
  // history: undefined
}

interface INavigatorProps extends BottomTabNavigationProp<IAppRoutes> {}
