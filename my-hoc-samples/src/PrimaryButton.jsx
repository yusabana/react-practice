import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"

// 独自でHOCのコンポーネントを作ってみる
// Wrappingしている

// WrappedComponentを引数で受取り、primary={true} を付与した WrappedeComponentを返すHOC
// const createPrimaryButton = WrappedComponent =>
//   class designedButtonComponent extends Component {
//     render() {
//       return <WrappedComponent {...this.props} primary={true} />
//     }
//   }
// ↓ こんな感じのfunctional component にできる
const createPrimaryButton = WrappedComponent => props => (
  <WrappedComponent {...props} primary={true} />
)

export const PrimaryButton = createPrimaryButton(RaisedButton)
