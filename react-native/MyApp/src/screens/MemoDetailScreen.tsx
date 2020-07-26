import * as React from 'react'
import styled from 'styled-components/native'
import { CircleButton } from '../elements/CircleButton'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'App'
import { RouteProp } from '@react-navigation/native'
import { Memo } from 'src/types'

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

const BodyText = styled.Text`
  line-height: 24px;
  font-size: 16px;
`

const StyledCircleButton = styled(CircleButton)`
  top: 75px;
  bottom: auto;
`

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'MemoDetail'>
  route: RouteProp<RootStackParamList, 'MemoDetail'>
}

const MemoDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  // detailで扱うmemoの情報と更新時のコールバック(returnMemo)を定義
  const [memo, setMemo] = React.useState(route.params.memo)
  const returnMemo = (m: Memo) => {
    setMemo(m)
  }

  const handleEditButton = React.useCallback(() => {
    navigation.navigate('MemoEdit', { memo, returnMemo })
  }, [navigation, memo])

  return (
    <Container>
      <Header>
        <HeaderTitle>メモ詳細</HeaderTitle>
        <HeaderDate>{memo.createdAt.format('YYYY-MM-DD HH:mm')}</HeaderDate>
      </Header>

      <Body>
        <BodyText>{memo.body}</BodyText>
      </Body>

      <StyledCircleButton color="light" onPress={handleEditButton}>
        E
      </StyledCircleButton>
    </Container>
  )
}

export { MemoDetailScreen }
