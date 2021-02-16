import React from 'react';
import { ReactComponent as PlusIcon } from '../../../assets/svgs/plusicon.svg';
import './AddWalletButton.scss';

const AddWalletButton: React.FC = () => (
  <button className="AddWalletButton text-keysign-primary">
    <div className="background-keysign-pale-blue AddWalletButton__icon">
      <PlusIcon />
    </div>
    <h2>Add Wallet</h2>
  </button>
);

export default AddWalletButton;
