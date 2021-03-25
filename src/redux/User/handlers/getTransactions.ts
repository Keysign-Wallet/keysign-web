import { AnyAction } from 'redux';
import { UserInterface } from '../types';

export const requested = (state: UserInterface): UserInterface => ({
  ...state,
  requestStates: {
    ...state.requestStates,
    transactions: { failed: false, requesting: true, success: false },
  },
});

export const success = (state: UserInterface, action: AnyAction): UserInterface => ({
  ...state,
  requestStates: {
    ...state.requestStates,
    transactions: {
      failed: false,
      requesting: false,
      success: true,
    },
  },
  transactions: action.payload.transactions,
});

export const failed = (state: UserInterface, action: AnyAction): UserInterface => ({
  ...state,
  requestStates: {
    ...state.requestStates,
    transactions: {
      failed: action.payload.error,
      requesting: false,
      success: false,
    },
  },
});
