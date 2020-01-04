const redux = require('redux');

const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

const makeLouderAndBoldAndRepeatThreeTimes = redux.compose(
  embolden,
  repeatThreeTimes,
  makeLouder,
);

makeLouderAndBoldAndRepeatThreeTimes('hello');

const initialCalculatorState = { result: 0 };

const calculatorReducer = (state = initialCalculatorState, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, result: state.result + action.payload.value };
    case 'SUBTRACT':
      return { ...state, result: state.result - action.payload.value };
    case 'MULTIPLY':
      return { ...state, result: state.result * action.payload.value };
    case 'DIVIDE':
      return { ...state, result: state.result / action.payload.value };
    default:
      return state;
  }
};

const initialErrorMessageState = { message: 'No Error' };
const errorMessageReducer = (state = initialErrorMessageState, action) => {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':
      return { ...state, message: action.payload.message };
    case 'CLEAR_ERROR_MESSAGE':
      return { ...state, message: '' };
    default:
      return state;
  }
};

const combinedReducers = redux.combineReducers({
  calculator: calculatorReducer,
  error: errorMessageReducer,
});

const store = redux.createStore(combinedReducers);

const subscriber = () =>
  console.log(`Subscribe ${JSON.stringify(store.getState())}`);
const unsubscriber = store.subscribe(subscriber);

// Calculator Actions
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';

add = value => ({ type: ADD, payload: { value } });
subtract = value => ({ type: SUBTRACT, payload: { value } });
multiply = value => ({ type: MULTIPLY, payload: { value } });
divide = value => ({ type: DIVIDE, payload: { value } });

const calc = redux.bindActionCreators(
  { add, subtract, multiply, divide },
  store.dispatch,
);

calc.add(2);
calc.subtract(1);
calc.multiply(4);
calc.divide(2);

// Error Message Action
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

setErrorAction = message => ({
  type: SET_ERROR_MESSAGE,
  payload: { message },
});
clearErrorAction = message => ({
  type: CLEAR_ERROR_MESSAGE,
  payload: { message },
});

const errorActions = { set: setErrorAction, clear: clearErrorAction };

const errors = redux.bindActionCreators(errorActions, store.dispatch);

errors.set('This aggression will not stand.');
errors.clear('');

// stop listening to store
unsubscriber();
