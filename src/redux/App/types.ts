import { Action } from 'redux';

export interface AppInterface {
  isLoggedIn: boolean;
}

export interface SetIsLoggedIn extends Action {
  payload: {
    isLoggedIn: boolean;
  };
}
