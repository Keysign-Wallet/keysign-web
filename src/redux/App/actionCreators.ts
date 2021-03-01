import { ActionCreator } from 'redux';
import { SetIsLoggedIn } from './types';
import * as actionTypes from './actionTypes';

export const setIsLoggedIn: ActionCreator<SetIsLoggedIn> = (isLoggedIn: boolean) => ({
  payload: {
    isLoggedIn,
  },
  type: actionTypes.APP_SET_LOGGED_IN,
});
