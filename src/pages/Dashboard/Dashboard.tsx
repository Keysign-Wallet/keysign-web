import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { URLS } from '../../constants';
import DashboardHeader from './DashboardHeader';
import DashboardRoot from './DashboardRoot';
import Wallet from './Wallet';
import './Dashboard.scss';

const Dashboard: React.FC = () => (
  <div className="Dashboard">
    <DashboardHeader />
    <div>
      <Router>
        <Switch>
          <Route exact path={`${URLS.dashboard}/wallet`} component={Wallet} />
          <Route exact path={`${URLS.dashboard}/`} component={DashboardRoot} />
        </Switch>
      </Router>
    </div>
  </div>
);

export default Dashboard;
