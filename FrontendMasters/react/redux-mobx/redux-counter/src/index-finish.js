import React from 'react';
import { render } from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import './styles.scss';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const initialState = { count: 0 };

// Reducer
const counterReducer = (state = initialState, action) => {
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

// Actions
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });

// Store
const store = createStore(counterReducer);

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

const mapStateToProps = ({ count }) => ({ count });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment, decrement, reset }, dispatch);

const CounterWrapper = connect(mapStateToProps, mapDispatchToProps)(Counter);
render(
  <Provider store={store}>
    <CounterWrapper />
  </Provider>,
  document.getElementById('root'),
);
