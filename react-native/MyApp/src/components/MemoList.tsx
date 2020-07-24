import * as React from 'react'
import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'

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
type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Memo'>
}

const MemoList: React.FC<Props> = ({ navigation }) => {
  return (
    <StyledMemoList>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('MemoDetail')
        }}>
        <MemoListItem>
          <MemoTitle>講座のアイテム</MemoTitle>
          <MemoDate>2020/06/10</MemoDate>
        </MemoListItem>
      </TouchableHighlight>

      <MemoListItem>
        <MemoTitle>講座のアイテム</MemoTitle>
        <MemoDate>2020/06/10</MemoDate>
      </MemoListItem>

      <MemoListItem>
        <MemoTitle>講座のアイテム</MemoTitle>
        <MemoDate>2020/06/10</MemoDate>
      </MemoListItem>

      <MemoListItem>
        <MemoTitle>講座のアイテム</MemoTitle>
        <MemoDate>2020/06/10</MemoDate>
      </MemoListItem>
    </StyledMemoList>
  )
}

export { MemoList }
