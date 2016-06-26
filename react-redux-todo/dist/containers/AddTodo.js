'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTodo = function AddTodo(_ref) {
  var dispatch = _ref.dispatch;

  var input = void 0;

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    dispatch((0, _actions.addTodo)(input.value));
    input.value = '';
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: onSubmit },
      _react2.default.createElement('input', { ref: function ref(node) {
          input = node;
        } }),
      _react2.default.createElement(
        'button',
        { type: true },
        'Add Todo'
      )
    )
  );
};

AddTodo = (0, _reactRedux.connect)()(AddTodo);
exports.default = AddTodo;