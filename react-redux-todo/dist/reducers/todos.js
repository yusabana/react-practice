'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

exports.default = todos;