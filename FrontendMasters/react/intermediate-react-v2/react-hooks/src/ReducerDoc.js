import React, { useReducer } from 'react';

const initialState = 0;

function init(initialCount) {
  return { count: initialCount };
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count: state.count + 1 });
    case 'DECREMENT':
      return Object.assign({}, state, { count: state.count - 1 });
    case 'RESET':
      return Object.assign({}, state, { count: action.payload });
    default:
      return new Error();
  }
};
const ReducerDocComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          <span role="img" aria-label="plus">
            ➕
          </span>
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          <span role="img" aria-label="minus">
            ➖
          </span>
        </button>

        <button onClick={() => dispatch({ type: 'RESET', payload: 0 })}>
          reset
        </button>
      </div>
    </>
  );
};

export default ReducerDocComponent;
