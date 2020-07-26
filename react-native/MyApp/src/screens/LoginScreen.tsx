import * as React from 'react'
import styled from 'styled-components/native'
import { TouchableHighlight, Text } from 'react-native'
import firebase from 'firebase'
import { RootStackParamList } from 'App'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
`

const Title = styled.Text`
  align-self: center;
  font-size: 24px;
`

const TextField = styled.TextInput`
  height: 40px;
  background-color: #eee;
  margin-top: 16px;
  padding: 8px;
  border-color: #000;
  border-width: 0.5px;
`

const LoginButton = styled(TouchableHighlight)`
  margin-top: 16px;
  background-color: #e31676;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 70%;
  align-self: center;
`

const LoginButtonTitle = styled(Text)`
  color: #fff;
  font-size: 20px;
`

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>
  route: RouteProp<RootStackParamList, 'Login'>
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = async () => {
    // try-asyncパターン
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      if (!result.user) {
        throw new Error('userが存在しない')
      }

      console.log('Success', result, email, password)
      navigation.navigate('Memo', { currentUser: result.user })
    } catch (error) {
      console.log('Error', error, email, password)
      return
    }
  }

  return (
    <Container>
      <Title>ログイン</Title>
      <TextField
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="Email Address"
      />
      <TextField
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry={true}
      />
      <LoginButton
        activeOpacity={0.9}
        underlayColor="#c70f66"
        onPress={handleLogin}>
        <LoginButtonTitle>ログインする</LoginButtonTitle>
      </LoginButton>
    </Container>
  )
}

export { LoginScreen }
