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
import { MemoListScreen } from './src/screens/MemoListScreen'
import { AppBar } from './src/components/AppBar'
import { MemoDetailScreen } from './src/screens/MemoDetailScreen'

const Container = styled.View`
  flex: 1;
  background-color: #fffdf6;
  align-items: center;
  justify-content: flex-start;
  padding-top: 78px;
`

const App = () => {
  return (
    <Container>
      <AppBar />
      {/* <MemoListScreen /> */}
      <MemoDetailScreen />
    </Container>
  )
}

export default App
