/*
 * Redux actions are nothing more than JavaScript objects.
 * Every action needs a type property for describing how the state should change.
 * It is a best practice to wrap every action within a function. Such function is an action creator.
 * */

import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = payload => ({ type: ADD_ARTICLE, payload });
