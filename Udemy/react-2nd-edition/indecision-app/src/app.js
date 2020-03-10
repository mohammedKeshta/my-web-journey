console.log('App.js is running');
const { render } = ReactDOM;
const React = React;

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
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

let count = 0;
// increment counter by one
let increment = () => {
  count++;
  renderCounterApp();
};
// decrement counter by one
let decrement = () => {
  count--;
  renderCounterApp();
};
// reset counter
let reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count {count}</h1>
      <button onClick={increment} style={{ marginRight: '10px' }}>
        ➕
      </button>
      <button onClick={decrement} style={{ marginRight: '10px' }}>
        ➖
      </button>
      <button onClick={reset}>🔪</button>
    </div>
  );

  render(templateTwo, document.getElementById('root'));
};

renderCounterApp();
