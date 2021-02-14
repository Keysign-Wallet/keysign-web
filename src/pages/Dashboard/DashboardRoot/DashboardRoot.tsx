import React from 'react';
import Table from '../../../components/Table';
import AddressDisplay from '../../../components/AddressDisplay';
import AddWalletButton from '../AddWalletButton';
import TransactionsTable from '../TransactionsTable';
import './DashboardRoot.scss';

const title = () => <AddWalletButton />;
const headings = ['name', 'address', 'tnbc', 'locked', 'usd equivalent'];
const rows = [
  ['wallet One', () => <AddressDisplay address="KU3efgfgdfgdfgttrtrqrges0bhwe" />, '14,500', '15,799', '$234,878'],
  ['wallet One', () => <AddressDisplay address="KU3efgfgdfgdfgttrtrqrges0bhwe" />, '14,500', '15,799', '$234,878'],
  ['wallet One', () => <AddressDisplay address="KU3efgfgdfgdfgttrtrqrges0bhwe" />, '14,500', '15,799', '$234,878'],
];

const DashboardRoot: React.FC = () => (
  <div className="DashboardRoot">
    <Table headings={headings} rows={rows} title={title} />
    <div className="DashboardRoot__Transactions-table">
      <TransactionsTable />
    </div>
  </div>
);

export default DashboardRoot;
