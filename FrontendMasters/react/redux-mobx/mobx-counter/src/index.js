import React from 'react';
import { render } from 'react-dom';

import './styles.scss';

const Counter = ({ count }) => {
  return (
    <main className="Counter">
      <p className="count">{count.value}</p>
      <section className="controls">
        <button onClick={count.increment}>Increment</button>
        <button onClick={count.decrement}>Decrement</button>
      </section>
    </main>
  );
};

render(<Counter count={0} />, document.getElementById('root'));
