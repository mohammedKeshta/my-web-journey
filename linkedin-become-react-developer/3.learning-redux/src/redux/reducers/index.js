import {
  ADD_DAY,
  ADD_ERROR,
  CANCEL_FETCHING,
  CHANGE_SUGGESTIONS,
  CLEAR_ERROR,
  CLEAR_SUGGESTIONS,
  FETCH_RESORT_NAMES,
  REMOVE_DAY,
  SET_GOAL
} from '../constants/action-types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  allSkiDays: [
    {
      resort: 'Kirkwood',
      date: '2016-12-7',
      powder: true,
      backcountry: false
    },
    {
      resort: 'Squaw Valley',
      date: '2016-12-8',
      powder: false,
      backcountry: false
    },
    {
      resort: 'Mt Tallac',
      date: '2016-12-9',
      powder: false,
      backcountry: true
    }
  ],
  goal: 10,
  errors: [],
  resortNames: {
    fetching: false,
    suggestions: ['Squaw Valley', 'Snowbird', 'Stowe', 'Steamboat']
  }
};

// Goal
export const goal = (state = INITIAL_STATE.goal, action) =>
  action.type === SET_GOAL ? parseInt(action.payload) : state.goal;
// All Ski Days
export const allSkyDays = (state = INITIAL_STATE.allSkiDays, action) => {
  switch (action.type) {
    case ADD_DAY:
      const HAS_DAY = state.some(skiDay => skiDay.date === action.payload.date);
      return HAS_DAY ? state : [...state, action.payload].sort((a, b) => new Date(b.date) - new Date(a.date));
    case REMOVE_DAY:
      return state.filter(skiDay => skiDay !== action.payload);
    default:
      return state;
  }
};
// Fetching
export const fetching = (state = INITIAL_STATE.resortNames.fetching, action) => {
  switch (action.type) {
    case FETCH_RESORT_NAMES:
      return true;
    case CANCEL_FETCHING:
      return false;
    case CHANGE_SUGGESTIONS:
      return false;
    default:
      return state;
  }
};

export const suggestions = (state = INITIAL_STATE.resortNames.suggestions, action) => {
  switch (action.type) {
    case CLEAR_SUGGESTIONS:
      return [];
    case CHANGE_SUGGESTIONS:
      return action.payload;
    default:
      return state;
  }
};

// Errors
export const errors = (state = INITIAL_STATE.errors, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return [...state, action.payload];
    case CLEAR_ERROR:
      return state.filter((message, i) => i === action.payload);
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  allSkyDays,
  goal,
  errors,
  resortNames: combineReducers({ fetching, suggestions })
});

export default rootReducer;
