import React from 'react';
import Table from '../../components/Table';
import './Dashboard.scss';

const Dashboard: React.FC = () => (
  <div className="Dashboard">
    <div className="Dashboard__top">
      <h1 className="text-keysign-dark">Dashboard</h1>
      <div className="keysign-default-border background-keysign-light Dashboard__total text-keysign-dark">
        <div className="total-caption">fiat equivalent</div>
        <div className="total-value">$345,876.908</div>
      </div>
    </div>
    <Table />
  </div>
);

export default Dashboard;
