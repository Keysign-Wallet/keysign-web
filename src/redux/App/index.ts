import { Reducer } from 'redux';
import { AppInterface } from './types';
import * as actionTypes from './actionTypes';

const initalState: AppInterface = {
  isLoggedIn: false,
};

const AppReducer: Reducer<AppInterface> = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.APP_LOG_USER_IN:
      return { ...state, isLoggedIn: true };
    case actionTypes.APP_LOG_USER_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default AppReducer;
