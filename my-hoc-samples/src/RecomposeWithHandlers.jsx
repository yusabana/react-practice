import React from "react"
import { compose, withState, withHandlers } from "recompose"

// withState と withHandlers で stateless function でカウンターができる

const Enhance = compose(
  withState("counter", "updateCounter", 0),
  withHandlers({
    increment: ({ updateCounter }) => () => updateCounter(counter => counter + 1),
    decrement: ({ updateCounter }) => () => updateCounter(counter => counter - 1),
    reset: ({ updateCounter }) => () => updateCounter(0)
  })
)

const App = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Incliment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Enhance(App)
