import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from 'App'
import { MemoList } from '../components/MemoList'
import { CircleButton } from '../elements/CircleButton'
import firebase from 'firebase'
import { Memo } from 'src/types'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Memo'>
  route: RouteProp<RootStackParamList, 'Memo'>
}

const useMemoListData = () => {
  const [memoList, setMemoList] = React.useState<Memo[]>([])

  React.useEffect(() => {
    const { currentUser } = firebase.auth()
    const db = firebase.firestore()

    db.collection(`users/${currentUser!.uid}/memos`)
      .get()
      .then((snapshot) => {
        let newMemoList: Memo[] = []
        snapshot.forEach((doc) => {
          const { body, createdAt } = doc.data()
          newMemoList.push({ id: doc.id, createdAt: createdAt.seconds, body })
        })

        setMemoList(newMemoList)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return { memoList }
}

const MemoListScreen: React.FC<Props> = ({ navigation /*, route*/ }) => {
  const handleNew = () => {
    // const params = route.params
    navigation.navigate('MemoCreate')
  }

  const { memoList } = useMemoListData()

  return (
    <>
      <MemoList memoList={memoList} navigation={navigation} />
      <CircleButton onPress={handleNew}>+</CircleButton>
    </>
  )
}

export { MemoListScreen }
