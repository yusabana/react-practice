import React from "react"
import { compose, withState } from "recompose"

// withState()はStateName、StateUpdateName、InitialStateと3つの引数を取ります。

const Enhance = compose(withState("counter", "updateCounter", 0))

const App = ({ counter, updateCounter }) => {
  return (
    <div>
      <h1>withState Count: {counter}</h1>
      <button onClick={() => updateCounter(counter + 1)}>式 Incliment</button>
      <button onClick={() => updateCounter(counter => counter + 1)}>関数 Incliment</button>
    </div>
  )
}

export default Enhance(App)
