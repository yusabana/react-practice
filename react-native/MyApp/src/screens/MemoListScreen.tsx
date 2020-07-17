import * as React from 'react'
import { MemoList } from '../components/MemoList'
import { CircleButton } from '../elements/CircleButton'

const MemoListScreen = () => {
  return (
    <>
      <MemoList />
      <CircleButton>+</CircleButton>
    </>
  )
}

export { MemoListScreen }
