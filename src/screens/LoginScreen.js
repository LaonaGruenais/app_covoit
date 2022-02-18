import { Box, Center, Image, Text } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import LoginForm from '../components/forms/LoginForm'
import Images from '../images/Images'

function LoginScreen({ navigation }) {
  return (
    <Box style={{ height: 500 }}>
      <Center>
        {/* Affichage du logo */}
        <Image source={Images.logoLight} size='2xl' resizeMode='contain' alt='App Logo' />
        <LoginForm />
        {/* Lorsque l'on clique sur 'pas de compte' aller sur la page register */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text>Pas de compte ?</Text>
        </TouchableOpacity>
      </Center>
    </Box>
  )
}

export default LoginScreen
