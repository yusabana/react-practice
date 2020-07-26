import * as React from 'react'
import styled from 'styled-components/native'
import { CircleButton } from '../elements/CircleButton'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'
import { RouteProp } from '@react-navigation/native'

const Container = styled.View`
  flex: 1;
  width: 100%;
`
const EditInput = styled.TextInput`
  background-color: #fff;
  flex: 1;
  padding: 32px 16px 16px;
  font-size: 16px;
`

const StyledCircleButton = styled(CircleButton)``

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MemoEdit'>
  route: RouteProp<RootStackParamList, 'MemoEdit'>
}

const MemoEditScreen: React.FC<Props> = ({ navigation }) => {
  const [body, setBody] = React.useState('あいうえお')

  return (
    <Container>
      <EditInput value={body} multiline={true} onChangeText={setBody} />

      <StyledCircleButton onPress={navigation.goBack} color="light">
        D
      </StyledCircleButton>
    </Container>
  )
}

export { MemoEditScreen }
