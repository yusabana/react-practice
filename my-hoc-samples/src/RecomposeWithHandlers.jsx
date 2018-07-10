import React from "react"
import { compose, withState, withHandlers } from "recompose"

// withState と withHandlers で stateless function でカウンターができる

const Enhance = compose(
  withState("counter", "updateCounter", 0),
  withHandlers({
    increment: ({ updateCounter }) => val => updateCounter(counter => counter + val), // 明示的に 2 を引数で渡しているので2で受け取れる
    decrement: ({ updateCounter }) => event => updateCounter(counter => counter - 1), // eventはonClickのイベントハンドラに設定しているので受け取れる
    reset: ({ updateCounter }) => () => updateCounter(0) // event別に必要なければ受け取らなくてもよい
  })
)

const App = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => increment(2)}>Incliment</button> {/* こんな感じで無名関数でラップして上げることもできる */}
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Enhance(App)
