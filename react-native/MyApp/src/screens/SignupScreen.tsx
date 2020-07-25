import * as React from 'react'
import styled from 'styled-components/native'
import { TouchableHighlight, Text } from 'react-native'
import firebase from 'firebase'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'
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

const SignupButton = styled(TouchableHighlight)`
  margin-top: 16px;
  background-color: #e31676;
  height: 48px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 70%;
  align-self: center;
`

const SignupButtonTitle = styled(Text)`
  color: #fff;
  font-size: 20px;
`
type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Signup'>
  route: RouteProp<RootStackParamList, 'Signup'>
}

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = React.useCallback(async () => {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log('Error', error)
        return
      })

    if (!result) {
      return
    }

    console.log('Result', result)
    navigation.navigate('Memo')
  }, [email, password, navigation])

  return (
    <Container>
      <Title>メンバー登録</Title>
      <TextField
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="Email"
      />
      <TextField
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry={true}
      />
      <SignupButton
        activeOpacity={0.4}
        underlayColor="#c70f66"
        onPress={handleSubmit}>
        <SignupButtonTitle>登録する</SignupButtonTitle>
      </SignupButton>
    </Container>
  )
}

export { SignupScreen }
