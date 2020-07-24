import * as React from 'react'
import styled from 'styled-components/native'
import { CircleButton } from '../elements/CircleButton'

const Container = styled.View`
  flex: 1;
  width: 100%;
`
const EditInput = styled.TextInput`
  background-color: #fff;
  flex: 1;
  padding: 32px 16px 16px;
  font-size: 16px;
`

const StyledCircleButton = styled(CircleButton)``

const MemoEditScreen = () => {
  const [body, setBody] = React.useState('あいうえお')
  return (
    <Container>
      <EditInput value={body} multiline={true} onChangeText={setBody} />

      <StyledCircleButton color="light">Edit</StyledCircleButton>
    </Container>
  )
}

export { MemoEditScreen }
