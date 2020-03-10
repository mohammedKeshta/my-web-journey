console.log('App.js is running');
const { render } = ReactDOM;
const React = React;

const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Tow']
};

const handleFormSubmit = e => {
  e.preventDefault();
  console.log('Form Submitted');
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const handleOnRemoveAll = () => {
  app.options = [];
  renderApp();
};

function renderApp() {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button onClick={handleOnRemoveAll}>Remove All</button>
      <p>
        {app.options && app.options.length
          ? "Here's your options"
          : 'No Options'}
      </p>
      <ol>
        {app.options &&
          app.options.map(option => <li key={option}>{option}</li>)}
      </ol>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  render(template, document.getElementById('root'));
}
renderApp();
