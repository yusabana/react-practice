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
const EditInput = styled.TextInput`
  background-color: #fff;
  flex: 1;
  padding: 32px 16px 16px;
  font-size: 16px;
`

const StyledCircleButton = styled(CircleButton)`
  top: 8px;
`

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MemoEdit'>
  route: RouteProp<RootStackParamList, 'MemoEdit'>
}

const MemoEditScreen: React.FC<Props> = ({ navigation, route }) => {
  const {
    memo: { id, body, createdAt },
    returnMemo,
  } = route.params
  const [editBody, setEditBody] = React.useState(body)
  const handlePress = async () => {
    const db = firebase.firestore()
    const { currentUser } = firebase.auth()

    const docRef = db.collection(`users/${currentUser!.uid}/memos`).doc(id)

    try {
      const updatedDocRef = await docRef.update({
        body: editBody,
      })
      console.log('UPDATED', docRef, updatedDocRef)
      returnMemo({ id, body: editBody, createdAt }) // detail側のMemoを更新する
      navigation.goBack()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <EditInput value={editBody} multiline={true} onChangeText={setEditBody} />

      <StyledCircleButton onPress={handlePress} color="light">
        D
      </StyledCircleButton>
    </Container>
  )
}

export { MemoEditScreen }
