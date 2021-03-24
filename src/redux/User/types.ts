import { Action } from 'redux';

export interface BankInterface {
  name: string;
  url: string;
}

export interface UserInterface {
  balance: number;
  banks: BankInterface[];
  activeBank: BankInterface;
  accountNumber: string;
}

export interface SetAccount extends Action {
  payload: {
    accountNumber: string;
  };
}
