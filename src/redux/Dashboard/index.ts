import { Reducer } from 'redux';
import { DashboardInterface } from './types';
import * as actionTypes from './actionTypes';

const initalState: DashboardInterface = {
  headerElement: null,
};

const DashboardReducer: Reducer<DashboardInterface> = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_HEADER_ELEMENT:
      return { ...state, headerElement: action.payload.headerElement };
    default:
      return initalState;
  }
};

export default DashboardReducer;
