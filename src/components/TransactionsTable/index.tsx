import React from 'react';

import TransactionsTable from './TransactionsTable';

const TransactionsTableContainer: React.FC = () => {
  // TODO:
  // const bank = await this.getBank();
  // const transactions = await axios.get(bank.url + '/bank_transactions', {
  //   params: { account_number: accountNumber },
  // });
  // const transactions = transactions.data.results;
  // Use passed in accountNumber to get all transactions and pass in to TransactionsTable
  const transactions = [
    {
      amount: '21000',
      balance_key: 'KU3efgfgdfgdfgttrtrqrges0bhwe',
      date_created: 'Jun 12, 2020',
      recipient: 'KU3efgfgdfgdfgttrtrqrges0bhwe',
      sender: 'KU3efgfgdfgdfgttrtrqrges0bhwe',
      signature: 'KU3efgfgdfgdfgttrtrqrges0bhwe',
    },
    {
      amount: '21000',
      balance_key: 'KU3efgfgdfgdfgttrtrqrges0bhwe',
      date_created: 'Jun 12, 2020',
      recipient: 'KU3efgfgdfgdfgttrtrqrges0bhwe',
      sender: 'KU3efgfgdfgdfgttrtrqrges0bhwe',
      signature: 'KU3efgfgdfgdfgttrtrqrges0bhwe',
    },
  ];
  return <TransactionsTable transactions={transactions} />;
};

export default TransactionsTableContainer;
