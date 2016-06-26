import { createStore, combineReducers } from 'redux'

// Action Creators
function addTodo(text) {
  return { type: 'ADD_TODO', text }
}
function completeTodo(id) {
  return { type: 'COMPLETE_TODO', id }
}

function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter }
}

// Reducer
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

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
    return action.filter
  default:
    return state
  }
}

const todoApp = combineReducers({ todos, visibilityFilter })

const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [
    { text: '原稿を書く', completed: true },
    { text: '燃えるゴミを捨てる', completed: false },
  ],
}
const store = createStore(todoApp, initialState)
store.subscribe(() => console.log(store.getState()))

// Action 発行
store.dispatch(addTodo('電球を替える'))
store.dispatch(addTodo('公共料金払う'))
store.dispatch(completeTodo(2))
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'))
