import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import colors from 'tailwindcss/colors'
import { Home } from '../screens/home'
import { House } from 'lucide-react-native'
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

      {/* <Screen name={'popup'} component={PendingList} options={{headerShown: false, presentation: 'transparentModal', animation: 'fade' }} /> */}

      {/* <Screen */}
      {/*  name={'importList'} */}
      {/*  component={ImportList} */}
      {/*  options={{ */}
      {/*    headerShown: false, */}
      {/*    tabBarIcon: ({ color }) => <Icon as={<Export color={'#ffffff'} />} />, */}
      {/*  }} */}
      {/* /> */}

      {/* <Screen name={'history'} */}
      {/*        component={ImportList} */}
      {/*        options={{ */}
      {/*            headerShown: false, */}
      {/*            tabBarIcon: ({color})=> <Icon as={ClockClockwise} color={color}/> */}
      {/* }}/> */}
    </Navigator>
  )
}
