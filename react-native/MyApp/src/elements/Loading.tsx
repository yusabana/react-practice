import * as React from 'react'
import styled from 'styled-components/native'
import { View, Text, ActivityIndicator } from 'react-native'

const Container = styled(View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  align-items: center;
  justify-content: center;
  background-color: rgba(221, 221, 221, 0.8);
  margin-top: -24px; /* 若干ずらす */
`

const LoadingText = styled(Text)`
  margin-top: 10px;
  font-size: 24px;
`

const Loading = ({ text = 'Loading...' }) => {
  return (
    <Container>
      <ActivityIndicator size="large" />
      <LoadingText>{text}</LoadingText>
    </Container>
  )
}

export { Loading }
