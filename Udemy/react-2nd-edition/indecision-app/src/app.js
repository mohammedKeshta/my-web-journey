console.log('App.js is running');
const { render } = ReactDOM;
const React = React;

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

const user = {
  name: 'Mohammed Elzanaty',
  age: 26,
  location: 'Egypt, Cairo'
};

const templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

render(template, document.getElementById('root'));
