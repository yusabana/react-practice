function todos(state = [], action) {
  switch(action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      { text: action.text, completed: false },
    ]

  case 'COMPLETE_TODO':
    let tmp_state = [...state]
    tmp_state[action.id].completed = true
    return tmp_state

  default:
    return state
  }
}

export default todos
