import * as React from 'react'
import styled from 'styled-components/native'
import { StackHeaderTitleProps } from '@react-navigation/stack'

const StyledAppbar = styled.View`
  /* 背景色がヘッダー全体に適用できない */
  /* background-color: #265366; */
  width: 100%;
  align-self: center;
  height: 30px;
  justify-content: center;
  align-items: center;
`

const AppbarText = styled.Text`
  color: #fff;
`

type Props = StackHeaderTitleProps

const AppBar: React.FC<Props> = ({ children }) => {
  return (
    <StyledAppbar>
      <AppbarText>{children ? children : 'MEMOLIST'}</AppbarText>
    </StyledAppbar>
  )
}

export { AppBar }
