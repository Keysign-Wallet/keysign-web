import { Action } from 'redux';
import { PrimaryValidator, Bank } from 'thenewboston';
// import { ThunkAction } from 'redux-thunk';

export interface BankInterface {
  bank: Bank;
  name: string;
  primaryValidator: null | PrimaryValidator;
}

export interface UserInterface {
  balance: number;
  bank: BankInterface;
  accountNumber: string;
  transactions: [];
  requestStates: {
    balance: RequestStates;
    primaryValidator: RequestStates;
    transactions: RequestStates;
  };
}

export interface SetAccount extends Action {
  payload: {
    accountNumber: string;
  };
}

export interface RequestStates {
  requesting: boolean;
  failed: any;
  success: boolean;
}
