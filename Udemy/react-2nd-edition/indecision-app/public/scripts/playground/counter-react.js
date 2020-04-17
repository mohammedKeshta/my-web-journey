"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var React = React;

var Counter = /*#__PURE__*/function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this, props));
    _this.state = {
      count: _this.props.count
    };
    _this.increment = _this.increment.bind(_assertThisInitialized(_this));
    _this.decrement = _this.decrement.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    return _this;
  } // increment counter by one


  _createClass(Counter, [{
    key: "increment",
    value: function increment() {
      this.setState({
        count: this.state.count + 1
      });
    } // decrement counter by one

  }, {
    key: "decrement",
    value: function decrement() {
      this.setState({
        count: this.state.count - 1
      });
    } // reset counter

  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        count: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var count = this.state.count;
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
        onClick: this.increment,
        style: {
          marginRight: '10px'
        }
      }, "\u27951"), React.createElement("button", {
        onClick: this.decrement,
        style: {
          marginRight: '10px'
        }
      }, "\u27961"), React.createElement("button", {
        onClick: this.reset
      }, "\uD83D\uDD2A Reset"));
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  count: 0
}; // Render Component

ReactDOM.render(React.createElement(Counter, null), document.getElementById('root'));