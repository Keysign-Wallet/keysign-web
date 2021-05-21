import { AppInterface } from './App/types';
import { DashboardInterface } from './Dashboard/types';
import { UserInterface } from './User/types';

export interface ApplicationStore {
  app: AppInterface;
  dashboard: DashboardInterface;
  user: UserInterface;
}
