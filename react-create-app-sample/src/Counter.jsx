import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>+</button>
        {this.state.count}
        <button onClick={() => this.setState(state => ({ count: state.count - 1 }))}>-</button>
      </div>
    )
  }
}

export const Hoge = props => <div>Text: {props.text}</div>

export default Counter
