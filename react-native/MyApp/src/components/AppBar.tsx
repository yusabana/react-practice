import * as React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const Appbar = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 78px;
  padding-top: 30px;
  background-color: #265366;
  justify-content: center;
  align-items: center;
`

const AppbarText = styled.Text`
  color: #fff;
`

type Props = {
  children?: never
}

const AppBar: React.FC<Props> = () => {
  return (
    <Appbar>
      <View>
        <AppbarText>MEMOT</AppbarText>
      </View>
    </Appbar>
  )
}

export { AppBar }
