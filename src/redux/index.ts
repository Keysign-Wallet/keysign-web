import { combineReducers } from 'redux';
import { ApplicationStore } from './types';
import appReducer from './App';
import dashboardReducer from './Dashboard';
import userReducer from './User';

export default combineReducers<ApplicationStore>({
  app: appReducer,
  dashboard: dashboardReducer,
  user: userReducer,
});
