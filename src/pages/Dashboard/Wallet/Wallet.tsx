import React from 'react';
import eyeIcon from '../../../assets/images/eyeIcon.png';
import CopyButton from '../../../components/common/CopyButton';
import TransactionsTable from '../../../components/TransactionsTable';
import './Wallet.scss';

const Wallet: React.FC<{ inputRef: React.RefObject<HTMLInputElement> }> = ({ inputRef }) => (
  <div className="Wallet dashboard-col-container">
    <div className="dashboard-left-col text-keysign-navy-blue-i Wallet__left">
      <div className="Wallet__small-heading">My Wallet Balance</div>
      <div className="Wallet__large-text">14,500</div>
      <div className="Wallet__right-mid">
        <div className="Wallet__small-heading">Wallet Address</div>
        <div className="Wallet__large-text">ku3edj58dej459sobhwe</div>
      </div>
      {/* Break this bit into its own component. So when view/hide is toggled, it only re-renders this bit */}
      <div className="Wallet__heading-actions-row">
        <div className="Wallet__small-heading">MY SIGNING KEY</div>
        <div className="Wallet__actions">
          <CopyButton name="Signing key" inputRef={inputRef} />
          <button className="small-action-button Wallet__toggle-key">
            <img src={eyeIcon} alt="eyeIcon" />
          </button>
        </div>
      </div>
      <div className="Wallet__large-text">
        <b>*****************</b>
        <div className="strip-input">
          <input value="ggfgfdgdfgegfg" ref={inputRef} />
        </div>
      </div>
    </div>
    <div className="dashboard-right-col Wallet__right">
      <TransactionsTable />
    </div>
  </div>
);

export default Wallet;
