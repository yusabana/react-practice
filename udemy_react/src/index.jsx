import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// TODO: 一時的にsearch部分をReduxするためにSearchPageをマウントする
// import App from './components/App'
import SearchPage from './containers/SearchPage'
import reducer from './reducers/'

// SearchPage側でreduxとつながっているのでここではシンプルにrenderするだけでよい
ReactDOM.render(
  <SearchPage history={history} location={location} store={createStore(reducer)} />,
  document.querySelector('.container')
)
