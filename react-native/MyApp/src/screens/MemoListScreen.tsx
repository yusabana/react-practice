import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from 'App'
import { MemoList } from '../components/MemoList'
import { CircleButton } from '../elements/CircleButton'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Memo'>
  route: RouteProp<RootStackParamList, 'Memo'>
}

const MemoListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <MemoList navigation={navigation} />
      <CircleButton onPress={() => {}}>+</CircleButton>
    </>
  )
}

export { MemoListScreen }
