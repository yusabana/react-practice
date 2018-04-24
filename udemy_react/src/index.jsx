import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// applyMiddleware で middleware を使いつつredux-devtoolsを利用する
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App'
import reducer from './reducers/'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// SearchPage側でreduxとつながっているのでここではシンプルにrenderするだけでよい
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
)
