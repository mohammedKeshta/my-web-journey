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
