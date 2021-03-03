import { Action } from 'redux';

export interface DashboardInterface {
  headerElement: JSX.Element | null;
}

export interface SetHeaderElement extends Action {
  payload: {
    headerElement: JSX.Element | null;
  };
}
