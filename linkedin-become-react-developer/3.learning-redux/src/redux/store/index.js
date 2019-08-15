import { createStore } from 'redux';
import rootReducer from '../reducers';
import { ADD_DAY } from '../constants/action-types';

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: ADD_DAY,
  payload: {
    resort: 'Mt Shasta',
    date: '2016-10-28',
    powder: false,
    backcountry: true
  }
});

export default store;
