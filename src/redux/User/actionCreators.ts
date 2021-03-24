import { ActionCreator, Action } from 'redux';
import * as actionTypes from './actionTypes';
import { SetAccount } from './types';

export const setAccount: ActionCreator<SetAccount> = (accountNumber: string) => ({
  payload: {
    accountNumber,
  },
  type: actionTypes.USER_SET_ACCOUNT,
});

export const clearStore: ActionCreator<Action> = () => ({
  type: actionTypes.USER_CLEAR_STORE,
});
