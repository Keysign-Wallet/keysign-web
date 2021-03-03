import { AppInterface } from './App/types';
import { DashboardInterface } from './Dashboard/types';

export interface ApplicationStore {
  app: AppInterface;
  dashboard: DashboardInterface;
}
