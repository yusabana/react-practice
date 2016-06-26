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
function todos() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [{ text: action.text, completed: false }]);

    case 'COMPLETE_TODO':
      var tmp_state = [].concat(_toConsumableArray(state));
      tmp_state[action.id].completed = true;
      return tmp_state;

    default:
      return state;
  }
}

function visibilityFilter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

var todoApp = (0, _redux.combineReducers)({ todos: todos, visibilityFilter: visibilityFilter });

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