import React, { useContext, useEffect } from 'react';
import { ReactComponent as Transfer } from '../../../assets/svgs/transfer.svg';
import DashboardContext from '../DashboardContext';
import Wallet from './Wallet';

const WalletContainer: React.FC = () => {
  const { setHeaderEl } = useContext(DashboardContext);
  useEffect(() => {
    setHeaderEl(
      <button className="TransferButton button">
        <Transfer />
        Transfer
      </button>
    );
    return () => setHeaderEl(null);
  }, [setHeaderEl]);
  return <Wallet />;
};

export default WalletContainer;
