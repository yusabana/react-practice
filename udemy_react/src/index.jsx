import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// applyMiddleware で middleware を使いつつredux-devtoolsを利用する
import { composeWithDevTools } from 'redux-devtools-extension'

// TODO: 一時的にsearch部分をReduxするためにSearchPageをマウントする
// import App from './components/App'
import SearchPage from './components/SearchPage'
import reducer from './reducers/'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// SearchPage側でreduxとつながっているのでここではシンプルにrenderするだけでよい
ReactDOM.render(
  <Provider store={store}>
    <SearchPage history={history} location={location} />
  </Provider>,
  document.querySelector('.container')
)
