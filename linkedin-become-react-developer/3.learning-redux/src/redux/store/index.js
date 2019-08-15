import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import { ADD_DAY } from '../constants/action-types';

const consoleMessages = store => next => action => {
  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`);
  console.log('ski days', store.getState().allSkiDays.length);
  result = next(action);

  let { allSkiDays, goal, errors, resortNames } = store.getState();

  console.log(`

		ski days: ${allSkiDays.length}
		goal: ${goal}
		fetching: ${resortNames.fetching}
		suggestions: ${resortNames.suggestions}
		errors: ${errors.length}

	`);

  console.groupEnd();

  return result;
};

const store = applyMiddleware(consoleMessages)(createStore)(rootReducer);

export default store;
