// import { StatusBar } from 'expo-status-bar'
import { Home } from './src/screens/home'
import { View } from 'react-native'

export default function App() {
  return (
    <View className={'bg-gray-700 flex-1 pt-12'}>
      <Home />
    </View>
  )
}
