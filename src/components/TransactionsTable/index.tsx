import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../redux/types';
import { toReadableDate } from '../../utils/helpers';

import TransactionsTable from './TransactionsTable';

const TransactionsTableContainer: React.FC<{ rowLimit?: number }> = ({ rowLimit }) => {
  const {
    user: { transactions },
  } = useSelector((state: ApplicationStore) => state);

  const preparedTransactions = () => {
    return transactions.map(({ amount, recipient, block: { balance_key, created_date, sender, signature } }) => ({
      amount,
      balance_key,
      date_created: toReadableDate(created_date),
      recipient,
      sender,
      signature,
    }));
  };

  return <TransactionsTable transactions={preparedTransactions()} rowLimit={rowLimit} />;
};

export default TransactionsTableContainer;
