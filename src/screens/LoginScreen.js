import { Box, Center, Image, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity, useColorScheme } from 'react-native'
import LoginForm from '../components/forms/LoginForm'
import { loginUser, useAuth } from '../contexts/AuthContext'
import Images from '../images/Images'

function LoginScreen ({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark'

  // Récupérer les identifiants et le token
  const { dispatch, state } = useAuth()
  const handleLogin = async (credentials) => {
    await loginUser(credentials, dispatch)
  }
  return (
    <Box>
      <Center>
        <Text>{JSON.stringify(state)}</Text>
        {/* Affichage du logo */}
        <Image source={isDarkMode ? Images.logoLight : Images.logoDark} size='2xl' resizeMode='contain' alt='App Logo' />
        <LoginForm onLogin={handleLogin} />
        {/* Lorsque l'on clique sur 'pas de compte' aller sur la page register */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Pas de compte ?</Text>
        </TouchableOpacity>
      </Center>
    </Box>
  )
}

export default LoginScreen
