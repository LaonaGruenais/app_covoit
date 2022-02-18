import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AuthScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const MainNavigator = createBottomTabNavigator()
const AuthNavigator = createNativeStackNavigator()

// Ajouter des écrans
function AuthStack() {
  return (
    <AuthNavigator.Navigator>
      <AuthNavigator.Screen name='Login' component={AuthScreen} />
      <AuthNavigator.Screen name='Register' component={RegisterScreen} />
    </AuthNavigator.Navigator>
  )
}

function Navigator() {
  return (
    <AuthStack />
  )
}

export default Navigator
