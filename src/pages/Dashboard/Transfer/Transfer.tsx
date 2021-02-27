import React from 'react';
import TransactionsTable from '../../../components/TransactionsTable';
import './Transfer.scss';

const Transfer: React.FC = () => (
  <div className="Transfer dashboard-col-container">
    <div className="dashboard-left-col text-keysign-navy-blue-i Transfer__left">
      <div className="Transfer__heading heading">Transfer</div>
      <div className="Transfer__subheading paragraph text-keysign-grey">Send coins to another account.</div>
      <input className="input Transfer__input" placeholder="0" type="number" />
      <button className="button">Send Via Keysign</button>

      <input className="input Transfer__input" placeholder="0" type="number" />
      <button className="button">Send</button>
    </div>
    <div className="dashboard-right-col Transfer__right">
      <TransactionsTable />
    </div>
  </div>
);

export default Transfer;
