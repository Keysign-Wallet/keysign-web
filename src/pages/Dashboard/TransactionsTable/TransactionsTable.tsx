import React from 'react';
import Table from '../../../components/Table';
import { shortenString } from '../../../utils/helpers';
import './TransactionsTable.scss';

const title = 'Transactions';
const headings = ['Sender', 'recipient', 'ammount', 'balance key', 'signature', 'date created'];
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

const TransactionsTable: React.FC = () => (
  <div className="TransactionsTable">
    <Table title={title} headings={headings} rows={rows} />
  </div>
);

export default TransactionsTable;
