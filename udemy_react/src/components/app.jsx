/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react'

import Greeting from './greeting'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { name: 'John' }
  }

  handleNameChange(name) {
    this.setState({ name })
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleNameChange(e.targe.value)}
          type="text"
          value={this.state.name}
        />
        <Greeting name={this.state.name} />
        <button onClick={() => this.handleNameChange('Bob')}>Bob</button>
      </div>
    )
  }
}

export default App
