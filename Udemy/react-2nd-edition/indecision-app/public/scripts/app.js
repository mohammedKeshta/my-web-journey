"use strict";

console.log('App.js is running');
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
var React = React;
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Tow']
};

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  console.log('Form Submitted');
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

var handleOnRemoveAll = function handleOnRemoveAll() {
  app.options = [];
  renderApp();
};

var handleMakeDecision = function handleMakeDecision() {
  var randomNumber = Math.floor(Math.random() * app.options.length);
  var randomOption = app.options[randomNumber];
  console.log(randomOption);
  renderApp();
};

function renderApp() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: handleMakeDecision
  }, "What should I do ?"), React.createElement("button", {
    onClick: handleOnRemoveAll
  }, "Remove All"), React.createElement("p", null, app.options && app.options.length ? "Here's your options" : 'No Options'), React.createElement("ol", null, app.options && app.options.map(function (option) {
    return React.createElement("li", {
      key: option
    }, option);
  })), React.createElement("form", {
    onSubmit: handleFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  render(template, document.getElementById('root'));
}

renderApp();