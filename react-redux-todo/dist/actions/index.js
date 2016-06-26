'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.completeTodo = completeTodo;
exports.setVisibilityFilter = setVisibilityFilter;
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