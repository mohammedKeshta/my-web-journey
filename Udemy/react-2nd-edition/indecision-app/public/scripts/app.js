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
var user = {
  name: 'Mohammed Elzanaty',
  age: 26,
  // job: 'Senior Software Engineer',
  location: 'Egypt, Cairo'
};
var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name ? user.name : 'Antonymous'), React.createElement("p", null, "Age: ", user.age), user.job && React.createElement("p", null, "Job: ", user.job), React.createElement("p", null, "Location: ", user.location || 'Unknown'));
render(template, document.getElementById('root'));
