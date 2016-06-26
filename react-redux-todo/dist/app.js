'use strict';

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [{ text: '原稿を書く', completed: true }, { text: '燃えるゴミを捨てる', completed: false }]
};
var store = (0, _redux.createStore)(_reducers2.default, initialState);
store.subscribe(function () {
  return console.log(store.getState());
});

// Action 発行
store.dispatch(actions.addTodo('電球を替える'));
store.dispatch(actions.addTodo('公共料金払う'));
store.dispatch(actions.completeTodo(2));
store.dispatch(actions.setVisibilityFilter('SHOW_COMPLETED'));