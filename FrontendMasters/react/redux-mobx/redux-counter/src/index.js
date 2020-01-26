import React from 'react';
import { render } from 'react-dom';
import './styles.scss';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const initialState = { count: 0 };

// Actions
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
};

const mapsStateToProps = ({ count }) => ({ count });
const mapsDispatchToProps = { increment, decrement, reset };

const CounterContainer = connect(
  mapsStateToProps,
  mapsDispatchToProps,
)(Counter);

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
);
