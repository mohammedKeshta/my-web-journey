"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = React;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;
  return React.createElement("div", null, React.createElement("h1", null, title), subtitle && React.createElement("h2", null, subtitle));
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  var handlePick = props.handlePick,
      hasOptions = props.hasOptions;
  return React.createElement("div", null, React.createElement("button", {
    onClick: handlePick,
    disabled: hasOptions
  }, "What should I do?"));
};

var Options = function Options(_ref2) {
  var options = _ref2.options,
      handleOnRemove = _ref2.handleOnRemove;
  return React.createElement("div", null, React.createElement("button", {
    onClick: handleOnRemove
  }, "\u274C Remove All"), options.length > 0 ? options.map(function (option, index) {
    return React.createElement("div", {
      style: {
        'display': 'flex'
      }
    }, React.createElement(Option, {
      optionText: option,
      key: "option-".concat(index)
    }), React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return handleOnRemove(option);
      }
    }, "\u274C"));
  }) : React.createElement("h1", null, "There's no options right now ... try add one"));
};

var Option = function Option(_ref3) {
  var optionText = _ref3.optionText;
  return React.createElement("div", null, React.createElement("p", null, optionText));
};

var AddOption = /*#__PURE__*/function (_React$Component) {
  _inherits(AddOption, _React$Component);

  function AddOption(props) {
    var _this;

    _classCallCheck(this, AddOption);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this.state = {
      option: '',
      error: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleOnSubmit = _this.handleOnSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddOption, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleOnSubmit",
    value: function handleOnSubmit(e) {
      e.preventDefault();
      var error = this.props.handleAddOption(this.state.option.trim());
      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          error = _this$state.error,
          option = _this$state.option;
      return React.createElement("div", null, error && React.createElement("h1", null, error), React.createElement("form", {
        onSubmit: this.handleOnSubmit
      }, React.createElement("input", {
        type: "text",
        name: "option",
        onChange: this.handleChange,
        onBlur: this.handleChange,
        onFocus: function onFocus() {
          return _this2.setState(function () {
            return {
              error: '',
              option: ''
            };
          });
        },
        value: option
      }), React.createElement("button", {
        type: "submit"
      }, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

var App = /*#__PURE__*/function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    var _this3;

    _classCallCheck(this, App);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this3.state = {
      subtitle: 'Put your life in the hand of a computer.',
      options: _this3.props.options
    };
    _this3.handleAddOption = _this3.handleAddOption.bind(_assertThisInitialized(_this3));
    _this3.handleOnRemove = _this3.handleOnRemove.bind(_assertThisInitialized(_this3));
    _this3.handlePick = _this3.handlePick.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var jsonStr = localStorage.getItem('options');
        var options = JSON.parse(jsonStr);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {
        console.error(e.message);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: "handleOnRemove",
    value: function handleOnRemove(id) {
      this.setState(function (prevState) {
        return {
          options: typeof id === 'string' ? prevState.options.filter(function (option) {
            return option !== id;
          }) : []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var options = this.state.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      var option = options[randomIndex];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      var options = this.state.options;

      if (!option) {
        return 'Enter valid value to add item';
      } else if (options.indexOf(option) > -1) {
        return 'This item already exist please enter another option';
      }

      this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [option])
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          subtitle = _this$state2.subtitle,
          options = _this$state2.options;
      var hasOptions = options.length === 0;
      return React.createElement("div", null, React.createElement(Header, {
        subtitle: subtitle
      }), React.createElement(Action, {
        handlePick: this.handlePick,
        hasOptions: hasOptions
      }), React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }), React.createElement(Options, {
        options: options,
        handleOnRemove: this.handleOnRemove
      }));
    }
  }]);

  return App;
}(React.Component);

App.defaultProps = {
  options: []
};
render(React.createElement(App, null), document.getElementById('root'));
