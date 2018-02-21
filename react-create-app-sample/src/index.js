import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Text from "./Text"
import Counter from "./Counter"

const view = () => (
  <div>
    <Hello name={33333} />
    <Text text="abcAAAAAA" />
    <Counter />
  </div>
)

ReactDOM.render(view(), document.getElementById("root"))
