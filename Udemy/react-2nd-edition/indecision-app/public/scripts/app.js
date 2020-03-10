"use strict";

console.log('App.js is running');
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
var React = React;
var template = React.createElement("div", null, React.createElement("h1", null, "Indecision App"), React.createElement("p", null, "This is some info"), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two")));
var templateTwo = React.createElement("div", null, React.createElement("h1", null, "Mohammed Elzanaty"), React.createElement("p", null, "Age: 26"), React.createElement("p", null, "Location: Egypt"));
render(templateTwo, document.getElementById('root'));
