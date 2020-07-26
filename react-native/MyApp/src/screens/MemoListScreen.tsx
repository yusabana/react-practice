import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from 'App'
import { MemoList } from '../components/MemoList'
import { CircleButton } from '../elements/CircleButton'
import firebase from 'firebase'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Memo'>
  route: RouteProp<RootStackParamList, 'Memo'>
}

const MemoListScreen: React.FC<Props> = ({ navigation, route }) => {
  const handleNew = () => {
    const params = route.params

    console.log('PARAMSで', params)

    const db = firebase.firestore()
    const uid = params.currentUser.uid

    db.collection(`users/${uid}/memos`)
      .add({
        body: 'test memo2222',
        createdOn: '2020-07-26',
      })
      .then((docRef) => {
        console.log(docRef.id)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <>
      <MemoList navigation={navigation} />
      <CircleButton onPress={handleNew}>+</CircleButton>
    </>
  )
}

export { MemoListScreen }
