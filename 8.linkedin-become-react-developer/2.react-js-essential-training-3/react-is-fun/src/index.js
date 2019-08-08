import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  backgroundColor: 'orange',
  fontSize: '60px',
  textAlign: 'center',
  padding: '15px',
  color: 'white'
};
const element = React.createElement(
  'h1',
  {
    className: 'title',
    id: 'header',
    style: style
  },
  'Hello World!'
);

ReactDOM.render(element, document.getElementById('root'));
