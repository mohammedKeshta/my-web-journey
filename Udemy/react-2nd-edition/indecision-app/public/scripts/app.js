"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = React;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          subtitle = _this$props.subtitle;
      return React.createElement("div", null, React.createElement("h1", null, title), React.createElement("h2", null, subtitle));
    }
  }]);

  return Header;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component2) {
  _inherits(Action, _React$Component2);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, _getPrototypeOf(Action).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    value: function render() {
      var handlePick = this.props.handlePick;
      return React.createElement("div", null, React.createElement("button", {
        onClick: handlePick
      }, "What should I do?"));
    }
  }]);

  return Action;
}(React.Component);

var Options = /*#__PURE__*/function (_React$Component3) {
  _inherits(Options, _React$Component3);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          options = _this$props2.options,
          handleOnRemoveAll = _this$props2.handleOnRemoveAll;
      return React.createElement("div", null, React.createElement("button", {
        onClick: handleOnRemoveAll
      }, "\u274C Remove All"), options.length > 0 ? options.map(function (option, index) {
        return React.createElement(Option, {
          optionText: option,
          key: "option-".concat(index)
        });
      }) : React.createElement("h1", null, "There's no options right now ... try add one"));
    }
  }]);

  return Options;
}(React.Component);

var Option = /*#__PURE__*/function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var optionText = this.props.optionText;
      return React.createElement("div", null, React.createElement("p", null, optionText));
    }
  }]);

  return Option;
}(React.Component);

var AddOption = /*#__PURE__*/function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddOption).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          handleAddOption = _this$props3.handleAddOption,
          handleChange = _this$props3.handleChange,
          option = _this$props3.option;
      return React.createElement("div", null, React.createElement("form", {
        onSubmit: handleAddOption
      }, React.createElement("input", {
        type: "text",
        name: "option",
        onChange: handleChange,
        onBlur: handleChange,
        value: option
      }), React.createElement("button", {
        type: "submit"
      }, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

var App = /*#__PURE__*/function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hand of a computer.',
      options: ['Thing One', 'Thing Two', 'Thing Three'],
      option: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleOnRemoveAll = _this.handleOnRemoveAll.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var _this$state = this.state,
          option = _this$state.option,
          options = _this$state.options;
      this.setState({
        options: [].concat(_toConsumableArray(options), [option]),
        option: ''
      });
    }
  }, {
    key: "handleOnRemoveAll",
    value: function handleOnRemoveAll() {
      this.setState({
        options: []
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      console.log(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          title = _this$state2.title,
          subtitle = _this$state2.subtitle,
          options = _this$state2.options,
          option = _this$state2.option;
      return React.createElement("div", null, React.createElement(Header, {
        title: title,
        subtitle: subtitle
      }), React.createElement(Action, {
        handlePick: this.handlePick
      }), React.createElement(Options, {
        options: options,
        handleOnRemoveAll: this.handleOnRemoveAll
      }), React.createElement(AddOption, {
        handleAddOption: this.handleAddOption,
        handleChange: this.handleChange,
        option: option
      }));
    }
  }]);

  return App;
}(React.Component);

render(React.createElement(App, null), document.getElementById('root'));