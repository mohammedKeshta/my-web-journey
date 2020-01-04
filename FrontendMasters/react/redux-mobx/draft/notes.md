Let's get compose out of the way first, it's just a helper

```js
const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

const makeLouderAndBoldAndRepeatThreeTimes = redux.compose(embolden, repeatThreeTimes, makeLouder);

makeLouderAndBoldAndRepeatThreeTimes('hello');
```

It just makes a new function that takes a value and runs it through the rest.

```js
const initialState = { result: 0 };

const calculatorReducer = (state = initialState, action = {}) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      result: state.result + action.value
    };
  }
  return state;
};
```

Okay, let's create a store!

```js
const store = createStore(calculatorReducer);
```

Let's subscribe to events!

```js
const subscriber = () => console.log(`Subscriber!' ${store.getState().result}`);

let unsubscribe = store.subscribe(subscriber);
```

EXERCISE: Implement the other actions!

Answer:

```js
const initialState = { result: 0 };

const calculatorReducer = (state = initialState, action = {}) => {
  if (action.type === 'ADD') {
    return {
      ...state,
      result: state.result + action.value
    };
  }

  if (action.type === 'SUBTRACT') {
    return {
      ...state,
      result: state.result + action.value
    };
  }

  if (action.type === 'MULTIPLY') {
    return {
      ...state,
      result: state.result + action.value
    };
  }

  if (action.type === 'DIVIDE') {
    return {
      ...state,
      result: state.result + action.value
    };
  }
  return state;
};
```

So, everything in one store, eh?

```js
const initialErrorMessageState = { message: '' };

let errorMessageReducer = (state = initialErrorMessageState, action) => {
  if (action.type === 'SET_ERROR_MESSAGE') return { message: action.message };
  if (action.type === 'CLEAR_ERROR_MESSAGE') return { message: '' };
  return state;
};

let combinedReducers = redux.combineReducers({ calculatorReducer, errorMessageReducer });

const store = createStore(combinedReducers);

store.dispatch({
  type: 'SET_ERROR_MESSAGE',
  message: 'This aggression will not stand.'
});

store.getState();
```

Oh no, it looks like our object properties are weird.

```js
const store = createStore(
  combineReducers({
    calculator: calculatorReducer,
    error: errorMessageReducer
  })
);

store.getState();
```

Much better.

What about action creators?

```js
const add = value => ({ type: 'ADD', value });
```

A lot of times you'll see people assign action types to constants.

```js
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

const setError = message => ({ type: SET_ERROR_MESSAGE, message });
const clearError = () => ({ type: CLEAR_ERROR_MESSAGE });
```

If we wanted to do this just for one. We write it by hand:

```js
const bindActionCreator = (action, dispatch) => (...args) => dispatch(action(...args));
```

Let's say we were using a framework where we passed in an option props, it would be cool to bind them to `store.dispatch` and just be able to use them, right?

```js
const errorActions = {
  set: setError,
  clear: clearError
};

const errors = bindActionCreators(errorActions, dispatch);
```

If we felt like it, we could even implement an overly simple version ourselves:

```js
const bindActionCreators = (actions, dispatch) => {
  return Object.keys(actions).reduce((boundActions, key) => {
    boundActions[key] = bindActionCreator(actions[key], dispatch);
    return boundActions;
  }, {});
};
```

Can you implement this with our calculator values?

```js
const add = value => ({ type: 'ADD', value });
const subtract = value => ({ type: 'SUBTRACT', value });
const multiply = value => ({ type: 'MULTIPLY', value });
const divide = value => ({ type: 'DIVIDE', value });

const calc = bindActionCreators({ add, subtract, multiply, divide }, store.dispatch);
```

Now I can do cool things like…

```js
calc.add(4);

store.getState();
```

We can also step in the middle… with middleware!

```js
const logger = ({ getState }) => {
  return next => action => {
    console.log('I am about to dispatch:', action);

    const returnValue = next(action);

    console.log('I am done with the reducer', getState());

    return returnValue;
  };
};
```

There are some rules here.

- Logger gets an object with two methods: `dispatch` and `getState`
- It returns a function that takes the next thing in the `chain`.
- And then it gets the `action`.

So, you get the action, the next piece of middleware, and the about to getState and dispatch.

Very cool.
