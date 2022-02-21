import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import HomeScreen from '../screens/HomeScreen'
import LinesScreen from '../screens/LinesScreen'
import AuthScreen from '../screens/LoginScreen'
import ModalScreen from '../screens/ModalScreen'
import ProfileScreen from '../screens/ProfileScreen'
import RegisterScreen from '../screens/RegisterScreen'
import TabBar from './TabBar'

const MainNavigator = createBottomTabNavigator()
const AuthNavigator = createNativeStackNavigator()

// Ajouter des écrans
function AuthStack () {
  return (
    <AuthNavigator.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthNavigator.Screen name='Login' component={AuthScreen} />
      <AuthNavigator.Screen name='Register' component={RegisterScreen} />
    </AuthNavigator.Navigator>
  )
}

function MainTabNavigator () {
  return (
    <MainNavigator.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <MainNavigator.Group>
        <MainNavigator.Screen name='Home' options={{ tabBarIcon: 'home' }} component={HomeScreen} />
        <MainNavigator.Screen name='Lines' options={{ tabBarIcon: 'analytics' }} component={LinesScreen} />
        <MainNavigator.Screen name='Profile' options={{ tabBarIcon: 'person' }} component={ProfileScreen} />
      </MainNavigator.Group>
      <MainNavigator.Group screenOptions={{ presentation: 'modal' }}>
        <MainNavigator.Screen name='Modal' component={ModalScreen} />
      </MainNavigator.Group>
    </MainNavigator.Navigator>
  )
}

function Navigator () {
  // quand on click sur 'se connecter' met à jour les identifiants / token
  const { state } = useAuth()
  console.log(state)
  // si j'ai un user et un token alors page home sinon page d'authentification
  if (state.user && state.token) {
    return (
      <MainTabNavigator />
    )
  } else {
    return (
      <AuthStack />
    )
  }
}

export default Navigator
