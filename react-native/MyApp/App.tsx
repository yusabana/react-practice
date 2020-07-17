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

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  align-items: center;
  justify-content: center;
  padding-top: 78px;
`

const App = () => {
  return (
    <Container>
      <AppBar />
      <MemoListScreen />
    </Container>
  )
}

export default App
