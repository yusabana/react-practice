import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// TODO: 一時的にsearch部分をReduxするためにSearchPageをマウントする
// import App from './components/App'
import SearchPage from './components/SearchPage'
import reducer from './reducers/'

const store = createStore(reducer)

// react単体の時は、 ReactDOM.render を直接呼んでいたが、 redux の state が変わったタイミングで
// renderを走らせたりしたいのでここではrenderを関数化する
const render = () => {
  const state = store.getState() // reduxのstoreから state を取り出す. redux のstoreにstateを登録するため

  console.log(state)
  ReactDOM.render(
    <SearchPage
      history={history}
      location={location}
      place={state.place}
      // store で dispatch 関数でアクションのオブジェクトを渡してアクションをを呼び出す
      onPlaceChange={place => store.dispatch({ type: 'CHANGE_PLACE', place })} // type キーは必須, placeはショートハンドで渡す
    />,
    document.querySelector('.container')
  )
}

render() // 初期表示でrenderする
store.subscribe(render) // storeをsubscribeしておきrenderを実行する
