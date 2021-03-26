import React from 'react';
import Table from '../../../components/Table';
import { RowType } from '../../../components/Table/types';
import AddWalletButton from '../AddWalletButton';
import TransactionsTable from '../../../components/TransactionsTable';
import './DashboardRoot.scss';

const title = () => <AddWalletButton />;
const headings = ['address', 'tnbc', 'locked', 'usd equivalent'];

const DashboardRoot: React.FC<{ showMoreHandler: () => void; walletsRow: RowType[] }> = ({
  showMoreHandler,
  walletsRow,
}) => (
  <div className="DashboardRoot">
    <Table headings={headings} rows={walletsRow} title={title} />
    <div className="DashboardRoot__Transactions-table">
      <TransactionsTable rowLimit={1} />
    </div>
    <div className="DashboardRoot__table-bottom keysign-default-border">
      <button className="button" onClick={showMoreHandler}>
        Show More
      </button>
    </div>
  </div>
);

export default DashboardRoot;
