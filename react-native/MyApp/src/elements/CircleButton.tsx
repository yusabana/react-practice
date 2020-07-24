import styled from 'styled-components/native'
import React from 'react'
import {
  StyleProp,
  ViewStyle,
  TouchableHighlight,
  TouchableWithoutFeedbackProps,
} from 'react-native'

type StyledProps = {
  color: 'light' | 'dark'
}

type Props = {
  onPress: TouchableWithoutFeedbackProps['onPress']
  style?: StyleProp<ViewStyle>
  color?: StyledProps['color']
  children: React.ReactNode
}

const Container = styled(TouchableHighlight)`
  position: absolute;
  bottom: 32px;
  right: 32px;

  width: 48px;
  height: 48px;
  border-radius: 24px;
`

const StyledButton = styled.View<StyledProps>`
  background-color: ${({ color }) => (color === 'light' ? '#fff' : '#e31676')};
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.2);
`

const CircleButtonTitle = styled.Text<StyledProps>`
  font-size: 24px;
  color: ${({ color }) => (color === 'light' ? '#e31676' : '#fff')};
  line-height: 24px;
`

const CircleButton: React.FC<Props> = ({
  children,
  onPress,
  style,
  color = 'dark',
}) => {
  return (
    <Container style={style} onPress={onPress}>
      <StyledButton color={color}>
        <CircleButtonTitle color={color}>{children}</CircleButtonTitle>
      </StyledButton>
    </Container>
  )
}

export { CircleButton }
