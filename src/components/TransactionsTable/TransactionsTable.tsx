import React, { FC } from 'react';

import Table from '../Table';
import { shortenString } from '../../utils/helpers';

type TransactionsTableProps = {
  transactions: {
    sender: string;
    recipient: string;
    amount: number;
    balance_key: string;
    signature: string;
    date_created: string;
  }[];
};

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions }: TransactionsTableProps) => {
  const title = 'Transactions';
  const headings = ['Sender', 'Recipient', 'Amount', 'Balance Key', 'Signature', 'Date Created'];
  const rows = [
    [
      shortenString(4, 3, 'KU3efgfgdfgdfgttrtrqrges0bhwe'),
      shortenString(4, 3, 'KU3efgfgdfgdfgttrtrqrges0bhwe'),
      '26,000',
      shortenString(4, 3, 'KU3efgfgdfgdfgttrtrqrges0bhwe'),
      shortenString(4, 3, 'KU3efgfgdfgdfgttrtrqrges0bhwe'),
      'Jun 12, 2020',
    ],
  ];
  // eslint-disable-next-line no-console
  console.log(transactions);
  return (
    <div className="TransactionsTable">
      <Table title={title} headings={headings} rows={rows} />
    </div>
  );
};

export default TransactionsTable;
