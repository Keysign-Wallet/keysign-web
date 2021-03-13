import { Action } from 'redux';

export enum NotificationTypes {
  SUCCESS = 'SUCCESS',
  INFORMATIONAL = 'INFORMATIONAL',
  WARNING = 'WARNING',
  DESTRUCTIVE = 'DESTRUCTIVE',
}

export type NotificationType = {
  id: string;
  content: JSX.Element | string;
  type: NotificationTypes;
};

export interface DashboardInterface {
  headerElement: JSX.Element | null;
  notifications: NotificationType[];
}

export interface SetHeaderElement extends Action {
  payload: {
    headerElement: JSX.Element | null;
  };
}

export interface AddNotification extends Action {
  payload: {
    notification: NotificationType;
  };
}

export interface RemoveNotification extends Action {
  payload: {
    id: string;
  };
}
