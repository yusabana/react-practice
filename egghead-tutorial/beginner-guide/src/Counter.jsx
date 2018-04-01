import React from 'react'

class Counter extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { count: 0 }
    // パターン2
    // this.handleClick = this.handleClick.bind(this)
  }

  // パターン2
  // handleClick() {
  //   this.setState(({count}) => ({
  //     count: count + 1
  //   }))
  // }

  // パターン3
  handleClick = () => {
    this.setState(({count}) => ({
      count: count + 1
    }))
  }

  render() {
    return (
      <button
        // onClick={this.handleClick.bind(this)}
        onClick={this.handleClick}
      >
        {this.state.count}
      </button>
    )
  }
}

export default Counter