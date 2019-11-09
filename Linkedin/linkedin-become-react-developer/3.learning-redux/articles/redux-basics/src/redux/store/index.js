import { createStore } from 'redux';
import rootReducer from '../reducers';

/*
 * Store is the result of createStore
 * createStore takes a reducer as the first argument
 * Reducers produce the state of your application.
 * */
const store = createStore(rootReducer);

export default store;
