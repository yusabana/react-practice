import React from "react"
import PropTypes from "prop-types"

const Hello = props => <h1>!!!Hello Hi {props.name}</h1>

Hello.propTypes = {
  name: PropTypes.string.isRequired
}

Hello.defaultProps = {
  name: 'ほげ'
}

export default Hello
