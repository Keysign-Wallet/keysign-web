import React from 'react';
import Table from '../../components/Table';
import AddressDisplay from '../../components/AddressDisplay';
import './Dashboard.scss';

const headings = ['name', 'address', 'tnbc', 'locked', 'usd equivalent'];
const rows = [
  ['wallet One', () => <AddressDisplay address="KU3efgfgdfgdfgttrtrqrges0bhwe" />, '14,500', '15,799', '$234,878'],
  ['wallet One', () => <AddressDisplay address="KU3efgfgdfgdfgttrtrqrges0bhwe" />, '14,500', '15,799', '$234,878'],
  ['wallet One', () => <AddressDisplay address="KU3efgfgdfgdfgttrtrqrges0bhwe" />, '14,500', '15,799', '$234,878'],
];

const Dashboard: React.FC = () => (
  <div className="Dashboard">
    <div className="Dashboard__top">
      <h1 className="text-keysign-dark">Dashboard</h1>
      <div className="keysign-default-border background-keysign-light Dashboard__total text-keysign-dark">
        <div className="total-caption">fiat equivalent</div>
        <div className="total-value">$345,876.908</div>
      </div>
    </div>
    <Table headings={headings} rows={rows} />
  </div>
);

export default Dashboard;
