import React from 'react';
import TransactionsTable from '../TransactionsTable';
import './Wallet.scss';

const Wallet: React.FC = () => (
  <div className="Wallet dashboard-col-container">
    <div className="dashboard-left-col text-keysign-navy-blue-i Wallet__left">
      <div className="Wallet__small-heading">My Wallet Balance</div>
      <div className="Wallet__large-text">14,500</div>
      <div className="Wallet__right-mid">
        <div className="Wallet__small-heading">Wallet Address</div>
        <div className="Wallet__large-text">ku3edj58dej459sobhwe</div>
      </div>
      {/* Break this bit into its own component. So when view/hide is toggled, it only re-renders this bit */}
      <div>
        <div className="Wallet__small-heading">MY SIGNUP KEY</div>
        {/* <div></div> */}
      </div>
    </div>
    <div className="dashboard-right-col Wallet__right">
      <TransactionsTable />
    </div>
  </div>
);

export default Wallet;
