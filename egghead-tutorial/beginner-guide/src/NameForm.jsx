import React from 'react'

class NameForm extends React.Component {
  state = {error: this.props.getErrorMessage('')}

  handleSubmit = event => {
    event.preventDefault()
    console.log({target: event.target})
    console.log(event.target[0].value)
    console.log(event.target.elements.username.value) // elementsから取得

    const value = event.target.elements.username.value
    const error = this.props.getErrorMessage(value)
    if (error) {
      alert(`error: ${error}`)
    } else {
      alert(`success: ${value}`)
    }
  }

  handleChange = event => {
    const {value} = event.target

    console.log(event.target.value)
    console.log(this.props.getErrorMessage(value))

    this.setState({
      error: this.props.getErrorMessage(value)
    })
  }

  // componentDidMount() {
  //   this.setState({
  //
  //   })
  // }

  render() {
    const {error} = this.state
    // console.log(this.state['error'])
    console.log(this.state)

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} name="username" />
        </label>
        {error ? (<div style={{color: 'red'}}>{error}</div>) : null}
        <button disabled={Boolean(error)}>Submit</button>
      </form>
    )
  }
}

export default NameForm
