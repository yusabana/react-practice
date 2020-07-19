import styled from 'styled-components/native'
import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

type StyledProps = {
  color: 'light' | 'dark'
}

type Props = {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  color?: StyledProps['color']
}

const StyledButton = styled.View<StyledProps>`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  background-color: ${({ color }) => (color === 'light' ? '#fff' : '#e31676')};
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.2);
`

const CircleButtonTitle = styled.Text<StyledProps>`
  font-size: 24px;
  color: ${({ color }) => (color === 'light' ? '#e31676' : '#fff')};
  line-height: 24px;
`

const CircleButton: React.FC<Props> = ({ children, style, color = 'dark' }) => {
  return (
    <StyledButton style={style} color={color}>
      <CircleButtonTitle color={color}>{children}</CircleButtonTitle>
    </StyledButton>
  )
}

export { CircleButton }
