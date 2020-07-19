import { Text } from 'react-native'
import * as React from 'react'
import styled from 'styled-components/native'
import { CircleButton } from '../elements/CircleButton'

const Container = styled.View`
  flex: 1;
  width: 100%;
`
const Header = styled.View`
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 100px;
  background-color: #17313c;
`

const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`
const HeaderDate = styled.Text`
  margin-top: 4px;
  font-size: 12px;
  color: #fff;
`

const Body = styled.View`
  padding: 40px 20px 20px;
  background-color: #fff;
  flex: 1;
`

const StyledCircleButton = styled(CircleButton)`
  top: 75px;
  bottom: auto;
`

const MemoDetailScreen = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>講座のアイデア</HeaderTitle>
        <HeaderDate>Yeasterday</HeaderDate>
      </Header>

      <Body>
        <Text>講座のアイデアです。本文です。 すよね</Text>
      </Body>

      <StyledCircleButton color="light">+</StyledCircleButton>
    </Container>
  )
}

export { MemoDetailScreen }
