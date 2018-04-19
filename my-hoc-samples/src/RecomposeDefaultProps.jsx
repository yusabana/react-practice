import React from "react"
import { defaultProps } from "recompose"

const enhance = defaultProps({
  hello: "hello, DefaultProps"
})

const App = ({ hello }) => {
  return (
    <div>
      <h1>defaultProps: {hello} </h1>
    </div>
  )
}

export default enhance(App)
