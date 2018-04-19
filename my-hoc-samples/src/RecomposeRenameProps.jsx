import React from "react"
import { defaultProps, renameProps } from "recompose"

const enhance = defaultProps({
  hello: "hello, RenameProps"
})

const enhance2 = renameProps({
  hello: "hogehoge" // props.hello を props.hogehoge に変更する
})

const App = ({ hogehoge }) => {
  return (
    <div>
      <h1>defaultProps: {hogehoge}</h1>
    </div>
  )
}

export default enhance(enhance2(App))
