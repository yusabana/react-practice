// reducer は state と action を引数に取って新しい state を返す純粋な関数

import { combineReducers } from 'redux' // combineReducerで place のキーで stateを東京タワーとして渡すことができる

/* 以下から関数の分け方は受け取る引数 state の内容によって切り替える */
// combineReducer するために state は文字列で 東京タワーを持っている
const place = (state = '東京タワー', action) => {
  console.log('action -=-> ', action)
  console.log('state -=-> ', state)

  switch (action.type) {
    case 'CHANGE_PLACE':
      return action.place // combineReducers を使う時は単純に更新したい値を返してあげればいい。Object.assign() はいらない
    default:
      return state
  }
}

const geocodeResult = (
  state = {
    address: '',
    location: { lat: 35.6585804, lng: 139.7454329 },
  },
  action
) => {
  switch (action.type) {
    case 'GEOCODE_FETCHED':
      return {
        address: action.address,
        location: action.location,
      }
    case 'CHANGE_ERROR_MESSAGE':
      return {
        address: action.message,
        location: { lat: 0, lng: 0 },
      }
    default:
      return state
  }
}

const hotels = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_HOTELS':
      console.log('BBBBBBBBBBBBBBBB')
      return action.hotels // combineReducers を使う時は単純に更新したい値を返してあげればいい。Object.assign() はいらない
    default:
      return state
  }
}

const sortKey = (state = 'price', action) => {
  switch (action.type) {
    case 'CHANGE_SORT_KEY':
      console.log('CCCCCCCCCCCCCCCCC')
      return action.sortKey
    default:
      return state
  }
}

export default combineReducers({ place, geocodeResult, hotels, sortKey }) // place と geocodeResult はstateのキーとなる
