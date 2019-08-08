import React from 'react';
import ReactDOM from 'react-dom';

const style = {
  backgroundColor: 'orange',
  fontSize: '60px',
  textAlign: 'center',
  padding: '15px',
  color: 'white'
};
const element = (
  <div style={style}>
    <h1 id="heading-element">Hello World!</h1>
    <p>We'r glad your 're here</p>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
