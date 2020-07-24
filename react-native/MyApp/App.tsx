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
import { AppBar } from './src/components/AppBar'
import { LoginScreen } from './src/screens/LoginScreen'
// import { MemoListScreen } from './src/screens/MemoListScreen'
// import { MemoDetailScreen } from './src/screens/MemoDetailScreen'
// import { MemoEditScreen } from './src/screens/MemoEditScreen'

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
      {/* <MemoDetailScreen /> */}
      {/* <MemoEditScreen /> */}
      <LoginScreen />
    </Container>
  )
}

export default App
