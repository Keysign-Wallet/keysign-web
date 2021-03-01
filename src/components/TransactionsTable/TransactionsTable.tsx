import React, { FC } from 'react';

import Table from '../Table';
import { shortenString } from '../../utils/helpers';

type TransactionsTableProps = {
  transactions: {
    sender: string;
    recipient: string;
    amount: string;
    balance_key: string;
    signature: string;
    date_created: string;
  }[];
};

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions }: TransactionsTableProps) => {
  const title = 'Transactions';
  const headings = ['Sender', 'Recipient', 'Amount', 'Balance Key', 'Signature', 'Date Created'];
  const rows = transactions.map((transaction) => [
    shortenString(4, 3, transaction.sender),
    shortenString(4, 3, transaction.recipient),
    transaction.amount,
    shortenString(4, 3, transaction.balance_key),
    shortenString(4, 3, transaction.signature),
    transaction.date_created,
  ]);
  return (
    <div className="TransactionsTable">
      <Table title={title} headings={headings} rows={rows} />
    </div>
  );
};

export default TransactionsTable;
