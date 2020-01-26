import { combineReducers } from 'redux';

import users from './user-reducer';
import cards from './card-reducer';
import lists from './list-reducer';

const rootReducer = combineReducers({
  users,
  cards,
  lists,
});

export default rootReducer;
