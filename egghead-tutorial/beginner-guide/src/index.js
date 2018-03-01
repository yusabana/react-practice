import React from "react"
import { render } from "react-dom"
// import PropTypes from "prop-types"
import Timer from "./Timer"
import Box from "./Box"
import Event from "./Event"

const Message = props => <div>{props.children}</div>
const App = () => (
  <div className="container">
    <Message>Hello World</Message>
    <Timer />
    <Box size="small" style={{ backgroundColor: "lightblue" }}>
      Small Box
    </Box>
    <Event />
  </div>
)
render(<App />, document.getElementById("root"))
