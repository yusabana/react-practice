import React from "react"

class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventCount: 10,
      username: ""
    }

    // これしないと 例えばincrementメソッドで this.stateにアクセスできない...
    // イベントハンドラのメソッドの場合、thisがundefinedになるのでbindする必要あり
    //     Reactをes6で使う場合のbindの問題 - Qiita
    //     https://qiita.com/cubdesign/items/ee8bff7073ebe1979936
    //     ReactをES6で開発時のbindの問題 - Qiita
    //     https://qiita.com/konojunya/items/fc0cfa6a56821e709065
    this.increment = this.increment.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
  }

  increment() {
    this.setState({ eventCount: this.state.eventCount + 1 })
    //  JSXに直接書く場合は以下のようにする
    //  <button onMouseOver={() => this.setState({ eventCount: this.state.eventCount + 1 })}>
  }

  updateUsername(event) {
    console.log(event.nativeEvent)
    this.setState({ username: event.target.value })
    //    JSXに直接書く場合は以下のようにする
    //    <input onChange={event => this.setState({ username: event.target.value })} />
  }

  render() {
    return (
      <div>
        <p>There have been {this.state.eventCount} events</p>
        <p>
          <button onMouseOver={this.increment}>B</button>
        </p>
        <p>You typed: {this.state.username}</p>
        <p>
          <input onChange={this.updateUsername} />
        </p>
      </div>
    )
  }
}

// const state = { eventCount: 0, username: "" }
// const setState = newState => {
//   Object.assign(state, newState)
//   // 再描画したいがstateless componentじゃ無理??
// }

// setState({ eventCount: 11 })
// setState({ username: "BOB" })

// const Event = () => (
//   <div>
//     <p>There have been {state.eventCount} events</p>
//     <p>
//       <button onClick={() => setState({ eventCount: state.eventCount + 1 })}>B</button>
//     </p>
//     <p>You typed: {state.username}</p>
//     <p>
//       <input />
//     </p>
//   </div>
// )

export default Event
