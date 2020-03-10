console.log('App.js is running');
const { render } = ReactDOM;
const React = React;

const template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const templateTwo = (
  <div>
    <h1>Mohammed Elzanaty</h1>
    <p>Age: 26</p>
    <p>Location: Egypt</p>
  </div>
);

render(templateTwo, document.getElementById('root'));
