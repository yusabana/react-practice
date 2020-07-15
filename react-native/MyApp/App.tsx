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

const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  align-items: center;
  justify-content: center;
  width: 350px;
`

const StyledText = styled.Text`
  color: red;
  font-size: 14px;
`

const App = () => {
  return (
    <StyledView>
      <StyledText>Hello, World.</StyledText>
      <StyledText>Hello, World.</StyledText>
      <StyledText>Hello, World.</StyledText>
      <StyledText>Hello, World.</StyledText>
    </StyledView>
  )
}

export default App
