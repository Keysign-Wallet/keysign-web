import React from 'react';
import CopyButton from '../../../components/common/CopyButton';
import TransactionsTable from '../../../components/TransactionsTable';
import { shortenString } from '../../../utils/helpers';
import { WalletViewProps } from './types';
import './Wallet.scss';

const Wallet: React.FC<WalletViewProps> = ({
  addressRef,
  balance,
  // signingKeyRef,
  address,
}) => (
  <div className="Wallet dashboard-col-container">
    <div className="dashboard-left-col text-keysign-navy-blue-i Wallet__left">
      <div className="Wallet__small-heading">My Wallet Balance</div>
      <div className="Wallet__large-text">{balance.toLocaleString()}</div>
      <div className="Wallet__right-mid">
        <div className="Wallet__heading-actions-row">
          <div className="Wallet__small-heading">Wallet Address</div>
          <div className="Wallet__actions">
            <CopyButton name="Address" inputRef={addressRef} />
          </div>
        </div>
        <div className="Wallet__large-text">
          {shortenString(7, 7, address)}
          <div className="strip-input">
            <input value={address} ref={addressRef} />
          </div>
        </div>
      </div>
    </div>
    <div className="dashboard-right-col Wallet__right">
      <TransactionsTable />
    </div>
  </div>
);

export default Wallet;
