import React from "react"
import PropTypes from "prop-types"

// const props = {
//   paddingLeft: 40
// }
// classNameは指定されないときにundefinedがでてしまうので空文字をデフォルトで設定
// Boxコンポーネント引数の ...rest は残りの引数を受け取る
const Box = ({ style, size, className = "", ...rest }) => {
  const sizeClassName = size ? `box-${size}` : ""
  return (
    <div>
      <div
        className={`box ${className} ${sizeClassName}`.trim()}
        style={{ paddingLeft: 20, ...style }}
        {...rest}
      />
    </div>
  )
}

export default Box
