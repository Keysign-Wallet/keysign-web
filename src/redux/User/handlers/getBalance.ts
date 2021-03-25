import { AnyAction } from 'redux';
import { UserInterface } from '../types';

export const requested = (state: UserInterface): UserInterface => ({
  ...state,
  requestStates: {
    ...state.requestStates,
    balance: { failed: false, requesting: true, success: false },
  },
});

export const success = (state: UserInterface, action: AnyAction): UserInterface => ({
  ...state,
  balance: action.payload.balance,
  requestStates: {
    ...state.requestStates,
    balance: {
      failed: false,
      requesting: false,
      success: true,
    },
  },
});

export const failed = (state: UserInterface, action: AnyAction): UserInterface => ({
  ...state,
  requestStates: {
    ...state.requestStates,
    balance: {
      failed: action.payload.error,
      requesting: false,
      success: false,
    },
  },
});
