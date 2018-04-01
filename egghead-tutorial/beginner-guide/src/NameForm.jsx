import React from 'react'

class NameForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    console.log({target: event.target})

    console.log(event.target[0].value)
    console.log(event.target.elements.username.value) // elementsから取得
    console.log(this.inputNode.value) // refを参照する
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            ref={node => this.inputNode = node}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

export default NameForm
