import React from 'react'

// stateを扱いたい
class StopWatch extends React.Component {
  state = { lapse: 0, running: false, showStopWatch: true }

  handleRunClick = () => {
    // setStateメソッドに関数を渡す時は新しいstateのオブジェクトをreturnしてあげる
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse
        this.timer = setInterval(() => {  // 最初スタートした時はここでlapseが初期セットされる
          this.setState(
            {
              lapse: Date.now() - startTime
            },
            () => {
              console.log(this.state.lapse)
            }
          )
        })
      }
      return { running: !state.running }
    })
  }

  handleClearClick = () => {
    clearInterval(this.timer)
    this.setState({ lapse: 0, running: false })
  }

  handleChangeCheckbox = (event) => {
    this.setState({ showStopWatch: event.target.checked })
  }

  componentWillUnmount() {
    // unmount の動かし方がわからない... ↓で チェックボックスでやってみたけど駄目や
    console.log('aaaaaa UNMOUNT !!!!!!!')
    clearInterval(this.timer)
  }

  render() {
    // const {lapse, running} = this.props // this.propsとすることで classで受け取れる
    const {lapse, running, showStopWatch} = this.state
    const buttonStyles = {
      border: '1px solid #ccc',
      background: 'yellow',
      fontSize: '2em',
      padding: 15,
      margin: 5,
      width: 200,
    }

    return (
      <div style={{textAlign: 'center'}}>
        <input type='checkbox' checked={this.state.showStopWatch} onChange={this.handleChangeCheckbox} />
        <label>Display?</label>
        {
          (() => {
            if (showStopWatch) {
              return (
                <div>
                  <label style={{ fontSize: '5em', display: 'block'}}>{lapse} ms</label>
                  <button onClick={this.handleRunClick} style={buttonStyles}>{running ? 'Stop' : 'Start'}</button>
                  <button onClick={this.handleClearClick} style={buttonStyles}>Clear</button>
                </div>
              )
            } else {
              return null
            }
          })()  // <= 表示のために即時関数で実行している
        }
      </div>
    )
  }
}


// stateのないpropsから受け取るだけのコンポーネント
// const buttonStyles = {
//   border: '1px solid #ccc',
//   background: 'yellow',
//   fontSize: '2em',
//   padding: 15,
//   margin: 5,
//   width: 200,
// }
//
// const StopWatch = ({lapse, running}) => (
//   <div style={{textAlign: 'center'}}>
//     <label style={{ fontSize: '5em', display: 'block'}}>{lapse} ms</label>
//     <button style={buttonStyles}>{running ? 'Stop' : 'Start'}</button>
//     <button style={buttonStyles}>Clear</button>
//   </div>
// )
//
export default StopWatch
