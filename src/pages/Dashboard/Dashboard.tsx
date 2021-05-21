import React from 'react';
import { Router, Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
// import { URLS } from '../../constants';
import DashboardHeader from './DashboardHeader';
import DashboardRoot from './DashboardRoot';
import Wallet from './Wallet';
import Transfer from './Transfer';
import Notifications from './Notifications';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <div className="Dashboard">
      <Notifications />
      <DashboardHeader />
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path={`${match.url}/wallet`} component={Wallet} />
            <Route exact path={`${match.url}/transfer`} component={Transfer} />
            <Route exact path={`${match.url}/`} component={DashboardRoot} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Dashboard;
