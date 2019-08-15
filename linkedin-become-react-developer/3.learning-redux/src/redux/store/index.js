import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import { addDay, removeDay, setGoal } from '../actions';

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

store.dispatch(addDay('Heavenly', '2019-8-15'));
store.dispatch(removeDay('2019-8-15'));
store.dispatch(setGoal(5));

export default store;
