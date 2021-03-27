import { Reducer } from 'redux';
import { Bank } from 'thenewboston';
import { UserInterface, RequestStates } from './types';
import * as getPVHandlers from './handlers/getPrimaryValidator';
import * as getBalanceHandlers from './handlers/getBalance';
import * as getTransactionsHandlers from './handlers/getTransactions';
import * as transferHandlers from './handlers/transfer';
import * as actionTypes from './actionTypes';

const defaultRequestState: RequestStates = {
  failed: false,
  requesting: false,
  success: false,
};

const initalState: UserInterface = {
  accountNumber: '',
  balance: 0,
  bank: { bank: new Bank('http://13.57.215.62'), name: '', primaryValidator: null },
  requestStates: {
    balance: { ...defaultRequestState },
    primaryValidator: { ...defaultRequestState },
    transactions: { ...defaultRequestState },
    transfer: { ...defaultRequestState },
  },
  transactions: [],
  usdRate: 0.03,
};

const userReducer: Reducer<UserInterface> = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.USER_SET_ACCOUNT:
      return { ...state, accountNumber: action.payload.accountNumber };
    case actionTypes.USER_CLEAR_STORE:
      return { ...initalState };

    // GET PRIMARY VALIDATOR
    case actionTypes.USER_GET_PRIMARY_VALIDATOR_REQUESTED:
      return getPVHandlers.requested(state);
    case actionTypes.USER_GET_PRIMARY_VALIDATOR_SUCCESSFUL:
      return getPVHandlers.success(state, action);
    case actionTypes.USER_GET_PRIMARY_VALIDATOR_FAILED:
      return getPVHandlers.failed(state, action);

    // GET BALANCE
    case actionTypes.USER_GET_BALANCE_REQUESTED:
      return getBalanceHandlers.requested(state);
    case actionTypes.USER_GET_BALANCE_SUCCESSFUL:
      return getBalanceHandlers.success(state, action);
    case actionTypes.USER_GET_BALANCE_FAILED:
      return getBalanceHandlers.failed(state, action);

    // GET TRANSACTIONS
    case actionTypes.USER_GET_TRANSACTIONS_REQUESTED:
      return getTransactionsHandlers.requested(state);
    case actionTypes.USER_GET_TRANSACTIONS_SUCCESSFUL:
      return getTransactionsHandlers.success(state, action);
    case actionTypes.USER_GET_TRANSACTIONS_FAILED:
      return getBalanceHandlers.failed(state, action);

    // TRANSFER COINS
    case actionTypes.USER_TRANSFER_REQUESTED:
      return transferHandlers.requested(state);
    case actionTypes.USER_TRANSFER_SUCCESSFUL:
      return transferHandlers.success(state);
    case actionTypes.USER_TRANSFER_FAILED:
      return transferHandlers.failed(state, action);
    default:
      return state;
  }
};

export default userReducer;
