/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'

const Container = styled.View`
  flex: 1;
  /* background-color: papayawhip; */
  align-items: center;
  justify-content: center;
  /* width: 350px; */
  padding-top: 78px;
`

const Appbar = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding-top: 30px;
  background-color: #265366;
  justify-content: center;
  align-items: center;
`

const AppbarText = styled.Text`
  color: #fff;
`

const MemoList = styled.View`
  background-color: #eee;
  width: 100%;
  flex: 1;
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

const MemoAddButton = styled.View`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  background-color: #e31676;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`

const MemoAddButtonTitle = styled.Text`
  font-size: 32px;
  color: #fff;
  line-height: 32px;
  /* background-color: #ddd; */
`

const App = () => {
  return (
    <Container>
      <Appbar>
        <View>
          <AppbarText>MEMOT</AppbarText>
        </View>
      </Appbar>

      <MemoList>
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
      </MemoList>

      <MemoAddButton>
        <MemoAddButtonTitle>+</MemoAddButtonTitle>
      </MemoAddButton>
    </Container>
  )
}

export default App
