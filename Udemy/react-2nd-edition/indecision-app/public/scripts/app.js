"use strict";

console.log('App.js is running');
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
var React = React;
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info' // options: ['One', 'Tow']

};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options && app.options.length > 0 ? "Here's your options" : 'No Options'));
var count = 0; // increment counter by one

var increment = function increment() {
  count++;
  renderCounterApp();
}; // decrement counter by one


var decrement = function decrement() {
  count--;
  renderCounterApp();
}; // reset counter


var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Count ", count), React.createElement("button", {
    onClick: increment,
    style: {
      marginRight: '10px'
    }
  }, "\u2795"), React.createElement("button", {
    onClick: decrement,
    style: {
      marginRight: '10px'
    }
  }, "\u2796"), React.createElement("button", {
    onClick: reset
  }, "\uD83D\uDD2A"));
  render(templateTwo, document.getElementById('root'));
};

renderCounterApp();