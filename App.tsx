import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { AppRoutes } from './src/routes/appRoutes'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <View className={'bg-gray-700 flex-1 pt-12'}>
      <StatusBar translucent style={'light'} />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
