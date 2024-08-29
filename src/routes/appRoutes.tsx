import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import colors from 'tailwindcss/colors'
import { Home } from '../screens/home'
import { ImportList } from '../screens/import-list'
import { History } from '../screens/history'
import { Download, House, History as LucideHistory } from 'lucide-react-native'
import { IAppRoutes } from '../@types/interfaces'

const { Navigator, Screen } = createBottomTabNavigator<IAppRoutes>()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue['600'],
        tabBarInactiveTintColor: colors.gray['200'],
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: '#202024',
          borderTopWidth: 0,
          paddingBottom: 56,
          paddingTop: 36,
          height: 'auto',
        },
      }}
    >
      <Screen
        name={'home'}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <House color={'white'} />,
        }}
      />

      <Screen
        name={'importList'}
        component={ImportList}
        options={{
          headerShown: false,
          tabBarIcon: () => <Download color={'white'} />,
        }}
      />

      <Screen
        name={'history'}
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: () => <LucideHistory color={'white'} />,
        }}
      />
    </Navigator>
  )
}

// {/* <Screen name={'popup'} component={PendingList} options={{headerShown: false, presentation: 'transparentModal', animation: 'fade' }} /> */}
