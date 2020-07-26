import * as React from 'react'
import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'
import { FlatList } from 'react-native-gesture-handler'

const StyledMemoList = styled.View`
  flex: 1;
  width: 100%;
  background-color: #fffdf6;
`

const MemoListItem = styled.View`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  background-color: #fff;
`
const MemoTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
`
const MemoDate = styled.Text`
  font-size: 12px;
  color: #a2a2a2;
`

export type MemoListItem = {
  id: string
  body: string
  createdAt: Date
}

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Memo'>
  memoList: MemoListItem[]
}

const renderListItem: (
  navigation: StackNavigationProp<RootStackParamList, 'Memo'>,
  memo: MemoListItem,
) => React.ReactElement = (navigation, memo) => {
  const { id, body, createdAt } = memo

  return (
    <TouchableHighlight
      key={id}
      onPress={() => {
        navigation.navigate('MemoDetail')
      }}>
      <MemoListItem>
        <MemoTitle>{body}</MemoTitle>
        <MemoDate>{createdAt}</MemoDate>
      </MemoListItem>
    </TouchableHighlight>
  )
}

const MemoList: React.FC<Props> = ({ navigation, memoList }) => {
  return (
    <StyledMemoList>
      <FlatList
        data={memoList}
        renderItem={({ item }) => {
          return renderListItem(navigation, item)
        }}
      />
    </StyledMemoList>
  )
}

export { MemoList }
