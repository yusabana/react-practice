/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppBar } from './src/components/AppBar'
import { LoginScreen } from './src/screens/LoginScreen'
import { MemoListScreen } from './src/screens/MemoListScreen'
import { MemoDetailScreen } from './src/screens/MemoDetailScreen'
import { MemoEditScreen } from './src/screens/MemoEditScreen'
import { SignupScreen } from './src/screens/SignupScreen'

export type RootStackParamList = {
  Memo: undefined
  MemoDetail: undefined
  MemoEdit: undefined
  Login: undefined
  Signup: undefined
}
const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitle: (props) => <AppBar {...props} />,
          headerStyle: { backgroundColor: '#265366' },
          headerTintColor: '#fff',
          headerBackTitle: '',
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Memo" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
