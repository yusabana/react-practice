import styled from 'styled-components/native'
import * as React from 'react'

const StyledButton = styled.View`
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

const CircleButtonTitle = styled.Text`
  font-size: 32px;
  color: #fff;
  line-height: 32px;
  /* background-color: #ddd; */
`

type Props = {
  children: React.ReactNode
}

const CircleButton: React.FC<Props> = ({ children }) => {
  return (
    <StyledButton>
      <CircleButtonTitle>{children}</CircleButtonTitle>
    </StyledButton>
  )
}

export { CircleButton }
