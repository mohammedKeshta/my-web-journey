"use strict";

console.log('App.js is running');
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
var React = React;
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), React.createElement("p", null, app.subtitle));
var user = {
  name: 'Mohammed Elzanaty',
  age: 26,
  location: 'Egypt, Cairo'
};
var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name), React.createElement("p", null, "Age: ", user.age), React.createElement("p", null, "Location: ", user.location));
render(template, document.getElementById('root'));
