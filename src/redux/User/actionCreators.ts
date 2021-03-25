import { ActionCreator, Action, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { PrimaryValidator } from 'thenewboston';
import axios from 'axios';
import { ApplicationStore } from '../types';
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

export const getPrimaryValidator = (): ThunkAction<any, ApplicationStore, void, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.USER_GET_PRIMARY_VALIDATOR_REQUESTED });

    const {
      user: {
        bank: { bank },
      },
    } = getState();

    await bank
      .getConfig()
      .then(({ primary_validator }) => {
        const primaryValidator = new PrimaryValidator(
          `${primary_validator.protocol}://${primary_validator.ip_address}${
            primary_validator.port === null ? '' : `:${primary_validator.port}`
          }`
        );
        return dispatch({ payload: { primaryValidator }, type: actionTypes.USER_GET_PRIMARY_VALIDATOR_SUCCESSFUL });
      })
      .catch((error) => {
        return dispatch({ payload: { error }, type: actionTypes.USER_GET_PRIMARY_VALIDATOR_FAILED });
      });
  };
};

export const getBalance = (): ThunkAction<any, ApplicationStore, void, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.USER_GET_BALANCE_REQUESTED });

    const {
      user: {
        accountNumber,
        bank: { primaryValidator },
      },
    } = getState();

    await primaryValidator!
      .getAccountBalance(accountNumber)
      .then(({ balance }) => {
        return dispatch({ payload: { balance: balance || 0 }, type: actionTypes.USER_GET_BALANCE_SUCCESSFUL });
      })
      .catch((error) => {
        return dispatch({ payload: { error }, type: actionTypes.USER_GET_BALANCE_FAILED });
      });
  };
};

export const getTransactions = (): ThunkAction<any, ApplicationStore, void, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch({ type: actionTypes.USER_GET_TRANSACTIONS_REQUESTED });

    const {
      user: {
        accountNumber,
        bank: { bank },
      },
    } = getState();

    axios
      .get(`${bank.url}/bank_transactions`, {
        params: { account_number: accountNumber },
      })
      .then(({ data: { results } }) => {
        return dispatch({ payload: { transactions: results }, type: actionTypes.USER_GET_TRANSACTIONS_SUCCESSFUL });
      })
      .catch((error) => {
        return dispatch({ payload: { error }, type: actionTypes.USER_GET_TRANSACTIONS_FAILED });
      });
  };
};
