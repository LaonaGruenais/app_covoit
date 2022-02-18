import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  useColorScheme
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'
import Navigator from './navigation/Navigator'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <NativeBaseProvider>
          <Navigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
