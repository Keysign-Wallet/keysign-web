import { ActionCreator } from 'redux';
import { SetHeaderElement, AddNotification, NotificationTypes, RemoveNotification } from './types';
import { makeid } from '../../utils/helpers';
import * as actionTypes from './actionTypes';

export const setHeaderElement: ActionCreator<SetHeaderElement> = (headerElement: JSX.Element | null) => ({
  payload: {
    headerElement,
  },
  type: actionTypes.SET_HEADER_ELEMENT,
});

export const addNotification: ActionCreator<AddNotification> = (
  content: JSX.Element | string,
  type?: NotificationTypes
) => ({
  payload: {
    notification: {
      content,
      id: makeid(10),
      type: type || NotificationTypes.SUCCESS,
    },
  },
  type: actionTypes.ADD_NOTIFICATION,
});

export const removeNotification: ActionCreator<RemoveNotification> = (id: string) => ({
  payload: {
    id,
  },
  type: actionTypes.REMOVE_NOTIFICATION,
});
