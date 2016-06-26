'use strict';

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Action Creators
function addTodo(text) {
  return { type: 'ADD_TODO', text: text };
}
function completeTodo(id) {
  return { type: 'COMPLETE_TODO', id: id };
}

function setVisibilityFilter(filter) {
  return { type: 'SET_VISIBILITY_FILTER', filter: filter };
}

// Reducer
function todoApp(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [].concat(_toConsumableArray(state.todos), [{ text: action.text, completed: false }])
      });

    case 'COMPLETE_TODO':
      var tmp_state = Object.assign({}, state);
      tmp_state.todos[action.id].completed = true;
      return tmp_state;

    case 'SET_VISIBILITY_FILTER':
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });

    default:
      return state;
  }
}

var initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [{ text: '原稿を書く', completed: true }, { text: '燃えるゴミを捨てる', completed: false }]
};
var store = (0, _redux.createStore)(todoApp, initialState);
store.subscribe(function () {
  return console.log(store.getState());
});

// Action 発行
store.dispatch(addTodo('電球を替える'));
store.dispatch(addTodo('公共料金払う'));
store.dispatch(completeTodo(2));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));