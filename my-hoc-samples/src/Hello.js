import React, { Fragment } from "react"
// import RaisedButton from 'material-ui/RaisedButton'

import FlatButton from "material-ui/FlatButton"
import IconButton from "material-ui/IconButton"

const Hello = ({ name }) => (
  <Fragment>
    <h1>Hello {name}!</h1>
    <FlatButton label="Default" />
    <IconButton iconClassName="muidocs-icon-custom-github" />
  </Fragment>
)

export default Hello
