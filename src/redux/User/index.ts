import { Reducer } from 'redux';
import { UserInterface } from './types';
import * as actionTypes from './actionTypes';

const initalState: UserInterface = {
  accountNumber: '',
  activeBank: { name: '', url: '' },
  balance: 0,
  banks: [],
};

const userReducer: Reducer<UserInterface> = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.USER_SET_ACCOUNT:
      return { ...state, accountNumber: action.payload.accountNumber };
    case actionTypes.USER_CLEAR_STORE:
      return { ...initalState };
    default:
      return state;
  }
};

export default userReducer;
