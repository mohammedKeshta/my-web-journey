console.log('App.js is running');
const { render } = ReactDOM;
const React = React;

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  // options: ['One', 'Tow']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>
      {app.options && app.options.length > 0
        ? "Here's your options"
        : 'No Options'}
    </p>
  </div>
);

const user = {
  name: 'Mohammed Elzanaty',
  age: 26,
  // job: 'Senior Software Engineer',
  location: 'Egypt, Cairo'
};

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Antonymous'}</h1>
    <p>Age: {user.age}</p>
    {user.job && <p>Job: {user.job}</p>}
    <p>Location: {user.location || 'Unknown'}</p>
  </div>
);

render(template, document.getElementById('root'));
