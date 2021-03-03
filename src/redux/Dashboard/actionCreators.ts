import { ActionCreator } from 'redux';
import { SetHeaderElement } from './types';
import * as actionTypes from './actionTypes';

export const setHeaderElement: ActionCreator<SetHeaderElement> = (headerElement: JSX.Element | null) => ({
  payload: {
    headerElement,
  },
  type: actionTypes.SET_HEADER_ELEMENT,
});
