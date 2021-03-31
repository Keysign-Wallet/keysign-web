import React, { FC } from 'react';

import Table from '../Table';
import { shortenString } from '../../utils/helpers';
import { TransactionType } from './types';

type TransactionsTableProps = {
  rowLimit?: number;
  transactions: TransactionType[];
  loading: boolean;
};

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions, rowLimit, loading }: TransactionsTableProps) => {
  const title = 'Transactions';
  const headings = ['Sender', 'Recipient', 'Amount', 'Balance Key', 'Signature', 'Date Created'];
  const rows = transactions.map((transaction) => ({
    row: [
      shortenString(4, 3, transaction.sender),
      shortenString(4, 3, transaction.recipient),
      Number(transaction.amount).toLocaleString(),
      shortenString(4, 3, transaction.balance_key),
      shortenString(4, 3, transaction.signature),
      transaction.date_created,
    ],
  }));
  return (
    <div className="TransactionsTable">
      <Table
        title={title}
        headings={headings}
        rows={rows}
        rowLimit={rowLimit}
        loading={loading}
        expectedRowCount={rows.length > 0 ? rows.length : 3}
      />
    </div>
  );
};

export default TransactionsTable;
