import React from "react"
import { compose, withProps, flattenProp } from "recompose"

const Enhance = compose(
  withProps({
    human: {
      name: "Ryo",
      age: 22,
      org: "VRize"
    }
  }),
  flattenProp("human") // これで human でネストしているものを平らにする
)

const App = ({ name, age, org }) => {
  return (
    <div>
      <h3>
        {name}/ age: {age}/ org: {org}
      </h3>
    </div>
  )
}

export default Enhance(App)
