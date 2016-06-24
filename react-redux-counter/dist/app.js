'use strict';

var _redux = require('redux');

// Action Creators
function incrementCounter() {
  return { type: 'INCREMENT_COUNTER' };
}
function decrementCounter() {
  return { type: 'DECREMENT_COUNTER' };
}

// Reducer
function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { counter: 0 } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { counter: state.counter + 1 };
    case 'DECREMENT_COUNTER':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

var store = (0, _redux.createStore)(counter);
store.subscribe(function () {
  return console.log(store.getState());
});

// Action 発行
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());