import { AnyAction } from 'redux';
import { UserInterface } from '../types';

export const requested = (state: UserInterface): UserInterface => ({
  ...state,
  requestStates: {
    ...state.requestStates,
    primaryValidator: { failed: false, requesting: true, success: false },
  },
});

export const success = (state: UserInterface, action: AnyAction): UserInterface => ({
  ...state,
  bank: { ...state.bank, primaryValidator: action.payload.primaryValidator },
  requestStates: {
    ...state.requestStates,
    primaryValidator: {
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
    primaryValidator: {
      failed: action.payload.error,
      requesting: false,
      success: false,
    },
  },
});
