import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Center, extendTheme, NativeBaseProvider, useColorMode, useColorModeValue } from 'native-base'
import React from 'react'
import {
  StatusBar,
  useColorScheme
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'
import { AuthProvider } from './contexts/AuthContext'
import Navigator from './navigation/Navigator'
import { getTheme } from './theme/Theme'

const Wrapper = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark'
  const bg = useColorModeValue('gray.200', 'gray.800')

  return (
    <Center flex={1} bg={bg}>{children}</Center>
  )
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const theme = getTheme(isDarkMode)

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: isDarkMode ? '#0F172A' : '#fff'
    }
  }

  return (
    <AuthProvider>
      <NativeBaseProvider theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer theme={navigationTheme}>
          <NativeBaseProvider theme={theme}>
            <Navigator />
          </NativeBaseProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  )
}

export default App
