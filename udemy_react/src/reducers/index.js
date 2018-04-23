// reducer は state と action を引数に取って新しい state を返す純粋な関数

import { combineReducers } from 'redux' // combineReducerで place のキーで stateを東京タワーとして渡すことができる

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
    default:
      return state
  }
}

export default combineReducers({ place, geocodeResult }) // place と geocodeResult はstateのキーとなる
