import React from "react"
// import PropTypes from "prop-types"

const time = new Date().toLocaleTimeString()
const Timer = () => (
  <div>
    It is
    <input value={time} />
    <input value={time} />
  </div>
)

export default Timer
