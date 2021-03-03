import React from 'react';
import TransactionsTable from '../../../components/TransactionsTable';
import './Transfer.scss';

const Transfer: React.FC = () => (
  <div className="Transfer dashboard-col-container">
    <div className="dashboard-left-col text-keysign-navy-blue-i Transfer__left">
      <div className="Transfer__heading heading">Transfer</div>
      <div className="Transfer__subheading paragraph text-keysign-grey">Send coins to another account.</div>
      <div className="Transfer__keysign">
        <input className="input Transfer__amount-input" placeholder="0" type="number" />
        <input className="input Transfer__account-input" placeholder="Wallet Address" type="text" />
        <button className="button Transfer__button">Send Via Keysign</button>
      </div>
      <hr />
      <div className="Transfer__normal">
        <input className="input Transfer__amount-input" placeholder="0" type="number" />
        <input className="input Transfer__account-input" placeholder="Wallet Address" type="text" />
        <button className="button Transfer__button">Send</button>
      </div>
    </div>
    <div className="dashboard-right-col Transfer__right">
      <TransactionsTable />
    </div>
  </div>
);

export default Transfer;
