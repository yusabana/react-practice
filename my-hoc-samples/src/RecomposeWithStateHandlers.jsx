import React from "react"
import { withStateHandlers } from "recompose"

const Counter = withStateHandlers(
  ({ initialCounter = 0 }) => ({
    counter: initialCounter
  }),
  {
    increment: ({ counter }) => value => ({ counter: counter + value }),
    decrement: ({ counter }) => value => ({ counter: counter - value }),
    reset: (_, { initialCounter = 0 }) => () => ({ counter: initialCounter })
  }
)(({ counter, increment, decrement, reset }) => (
  <div>
    <h1>Counter: {counter}</h1>
    <butten onClick={() => increment(2)}>Inc</butten>
    <butten onClick={() => decrement(3)}>Dec</butten>
    <butten onClick={reset}>Reset</butten>
  </div>
))

export default Counter
