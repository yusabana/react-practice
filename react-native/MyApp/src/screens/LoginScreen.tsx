import * as React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import firebase from 'firebase'
import { RootStackParamList } from 'App'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, CommonActions } from '@react-navigation/native'
import {} from 'react-native-gesture-handler'

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

const LoginButtonContainer = styled(TouchableHighlight)`
  margin-top: 16px;
  background-color: #e31676;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 70%;
  align-self: center;
`

const LoginButtonText = styled(Text)`
  color: #fff;
  font-size: 20px;
`

const SignupContainer = styled(TouchableOpacity)`
  margin-top: 20px;
  align-self: center;
`

const SignupText = styled(Text)`
  font-size: 16px;
`

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>
  route: RouteProp<RootStackParamList, 'Login'>
}

/**
 * TODO: 未ログイン状態のときにアクセスを制限するしょり
 */
const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = React.useState('user3@example.com')
  const [password, setPassword] = React.useState('password')

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

      // ログイン後にnavigationをリセットしつつ、履歴の開始をMemoとする
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Memo' }],
        }),
      )
    } catch (error) {
      console.log('Error', error, email, password)
      return
    }
  }

  const handleRegister = () => {
    navigation.navigate('Signup')
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
      <LoginButtonContainer
        activeOpacity={0.9}
        underlayColor="#c70f66"
        onPress={handleLogin}>
        <LoginButtonText>ログインする</LoginButtonText>
      </LoginButtonContainer>

      <SignupContainer onPress={handleRegister}>
        <SignupText>会員登録する</SignupText>
      </SignupContainer>
    </Container>
  )
}

export { LoginScreen }
