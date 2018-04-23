import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// TODO: 一時的にsearch部分をReduxするためにSearchPageをマウントする
// import App from './components/App'
import SearchPage from './components/SearchPage'
import reducer from './reducers/'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// SearchPage側でreduxとつながっているのでここではシンプルにrenderするだけでよい
ReactDOM.render(
  <Provider store={store}>
    <SearchPage history={history} location={location} />
  </Provider>,
  document.querySelector('.container'),
)
