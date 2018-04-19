import React from "react"
import { defaultProps, renameProps, compose } from "recompose"

const Enhance = compose(
  defaultProps({
    hello: "hello, Compose!!!!"
  }),
  renameProps({
    hello: "hogehoge"
  })
)
const App = ({ hogehoge }) => {
  return (
    <div>
      <h1>defaultProps: {hogehoge}</h1>
    </div>
  )
}

export default Enhance(App)
