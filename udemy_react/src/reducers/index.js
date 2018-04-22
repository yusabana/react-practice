// reducer は state と action を引数に取って新しい state を返す純粋な関数
export default (state = { place: 'hoge' }, action) => {
  console.log('action -=-> ', action)
  console.log('state -=-> ', state)

  switch (action.type) {
    case 'CHANGE_PLACE':
      return Object.assign({}, state, { place: action.place })
    default:
      return state
  }
}
