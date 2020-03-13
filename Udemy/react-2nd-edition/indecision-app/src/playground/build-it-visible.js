const { render } = ReactDOM;
const React = React;

let visibility = false;

const handleToggle = () => {
  visibility = !visibility;
  renderToggle();
};

function renderToggle() {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={handleToggle}>
        {visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {visibility && <p>Hey, these are some details you can now see!</p>}
    </div>
  );
  render(jsx, document.getElementById('root'));
}

renderToggle();
