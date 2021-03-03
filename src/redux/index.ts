import { combineReducers } from 'redux';
import { ApplicationStore } from './types';
import appReducer from './App';
import dashboardReducer from './Dashboard';

export default combineReducers<ApplicationStore>({
  app: appReducer,
  dashboard: dashboardReducer,
});
