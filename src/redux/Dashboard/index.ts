import { Reducer } from 'redux';
import { DashboardInterface } from './types';
import * as actionTypes from './actionTypes';

const initalState: DashboardInterface = {
  headerElement: null,
  notifications: [],
};

const DashboardReducer: Reducer<DashboardInterface> = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SET_HEADER_ELEMENT:
      return { ...state, headerElement: action.payload.headerElement };
    case actionTypes.ADD_NOTIFICATION:
      return { ...state, notifications: [...state!.notifications, action.payload.notification] };
    default:
      return initalState;
  }
};

export default DashboardReducer;
