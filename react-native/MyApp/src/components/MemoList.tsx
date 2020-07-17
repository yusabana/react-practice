import * as React from 'react'
import styled from 'styled-components/native'

const StyledMemoList = styled.View`
  flex: 1;
  background-color: #eee;
  width: 100%;
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

const MemoList: React.FC = () => {
  return (
    <StyledMemoList>
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

      <MemoListItem>
        <MemoTitle>講座のアイテム</MemoTitle>
        <MemoDate>2020/06/10</MemoDate>
      </MemoListItem>
    </StyledMemoList>
  )
}

export { MemoList }
