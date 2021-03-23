import { ActionCreator, Action } from 'redux';
// import { } from './types';
import * as actionTypes from './actionTypes';

export const logUserIn: ActionCreator<Action> = () => ({
  type: actionTypes.APP_LOG_USER_IN,
});

export const logUserOut: ActionCreator<Action> = () => ({
  type: actionTypes.APP_LOG_USER_OUT,
});
