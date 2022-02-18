import React, { useState } from 'react'
import { Box, Button, FormControl, Input, WarningOutlineIcon } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

function LoginForm({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box w='80%'>
      <FormControl>
        <FormControl.Label>Email</FormControl.Label>
        <Input placeholder='test@my-digital-school.org' />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl>
        <FormControl.Label>Mot de passe</FormControl.Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          InputRightElement={
            <Button
              size='xs'
              rounded='none'
              w='1/6'
              h='full'
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Icon name='eye' size={25} /> : <Icon name='eye-off' size={25} />}
            </Button>
          }
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon />}>
          Une erreur s'est produite
        </FormControl.ErrorMessage>
      </FormControl>
      <Button size='md' onPress={onLogin}>Se connecter</Button>
    </Box>
  )
}
export default LoginForm
