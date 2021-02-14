import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { URLS } from '../../constants';
import { ReactComponent as Arrow } from '../../assets/svgs/arrow.svg';
import DashboardRoot from './DashboardRoot';
import Wallet from './Wallet';
import './Dashboard.scss';

const Dashboard: React.FC = () => (
  <div className="Dashboard">
    <div className="Dashboard__top">
      {/* <h1 className="text-keysign-dark">Dashboard</h1> */}
      <div className="Dashboard__top-left">
        <button className="Dashboard__back-button border-keysign-dark-grey">
          <Arrow />
        </button>
      </div>
      <div className="keysign-default-border background-keysign-light Dashboard__total text-keysign-dark">
        <div className="total-caption">fiat equivalent</div>
        <div className="total-value">$345,876.908</div>
      </div>
    </div>
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
