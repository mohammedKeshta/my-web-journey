import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

/*
 * A reducer takes two parameters: the current state and an action.
 * Reducers produce the state of the application.
 * The only way to change the state is by sending a signal to the store.
 * This signal is an action.
 * "Dispatching an action” is the process of sending out a signal.
 * Reducer calculates the next state depending on the action type.
 * Moreover, it should return at least the initial state when no action type matches.
 * */
const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;
