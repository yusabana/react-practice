import React, { Fragment, Component } from "react"
import { render } from "react-dom"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Hello from "./Hello"
import { PrimaryButton } from "./PrimaryButton"
import RecomposeDefaultProps from "./RecomposeDefaultProps"
import RecomposeRenameProps from "./RecomposeRenameProps"
import RecomposeCompose from "./RecomposeCompose"
import RecomposeWithProps from "./RecomposeWithProps"
import RecomposeWithState from "./RecomposeWithState"
import RecomposeWithHandlers from "./RecomposeWithHandlers"
import RecomposeWithStateHandlers from "./RecomposeWithStateHandlers"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

const App = () => (
  <MuiThemeProvider>
    <Fragment>
      <h1>HOCサンプル</h1>
      <ul>
        <li>
          <a href="https://qiita.com/ryo_t/items/b5bfbf70c97c85461689">
            Reactのコンポーネントをステートレスに！！！recomposeとは？ ~0からreact習得記 day 09~ -
            Qiita
          </a>
        </li>
        <li>
          APIリファレンス:
          <a href="https://github.com/acdlite/recompose/blob/master/docs/API.md">
            https://github.com/acdlite/recompose/blob/master/docs/API.md
          </a>
        </li>
        <li>
          <a href="https://qiita.com/terrierscript/items/275dc41d0705f63ba95f">
            Recompose でいい感じに Higher-order Components(HoCs)を作る - Qiita
          </a>
        </li>
        <li>
          <a href="https://qiita.com/terrierscript/items/275dc41d0705f63ba95f">
            Recompose でいい感じに Higher-order Components(HoCs)を作る - Qiita
          </a>
        </li>
      </ul>

      <div style={styles}>
        <p>material-ui はHOCを利用して利用可能</p>
        <Hello name="UG" />
        <PrimaryButton label="abc" />
      </div>

      <RecomposeDefaultProps />
      <RecomposeRenameProps />
      <RecomposeCompose />
      <RecomposeWithProps />
      <RecomposeWithState />
      <RecomposeWithHandlers />
      <RecomposeWithStateHandlers />
    </Fragment>
  </MuiThemeProvider>
)

render(<App />, document.getElementById("root"))
