import * as React from 'react'
import styled from 'styled-components/native'
import { CircleButton } from '../elements/CircleButton'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'
import { RouteProp } from '@react-navigation/native'
import firebase from 'firebase'

const Container = styled.View`
  flex: 1;
  width: 100%;
`
const CreateInput = styled.TextInput`
  background-color: #fff;
  flex: 1;
  padding: 32px 16px 16px;
  font-size: 16px;
`

const StyledCircleButton = styled(CircleButton)`
  top: 8px;
`

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MemoCreate'>
  route: RouteProp<RootStackParamList, 'MemoCreate'>
}

const MemoCreateScreen: React.FC<Props> = ({ navigation, route }) => {
  const [body, setBody] = React.useState('')

  const handlePress = () => {
    const db = firebase.firestore()
    const uid = route.params.uid

    db.collection(`users/${uid}/memos`)
      .add({
        body: body,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log(docRef.id)
        navigation.goBack()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Container>
      <CreateInput value={body} multiline={true} onChangeText={setBody} />
      <StyledCircleButton onPress={handlePress}>✓</StyledCircleButton>
    </Container>
  )
}

export { MemoCreateScreen }
