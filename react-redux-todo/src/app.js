import { createStore } from 'redux'
import todoApp from './reducers'
import * as actions from './actions'

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
store.dispatch(actions.addTodo('電球を替える'))
store.dispatch(actions.addTodo('公共料金払う'))
store.dispatch(actions.completeTodo(2))
store.dispatch(actions.setVisibilityFilter('SHOW_COMPLETED'))
