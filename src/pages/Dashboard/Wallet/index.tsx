import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Transfer } from '../../../assets/svgs/transfer.svg';
import { setHeaderElement } from '../../../redux/Dashboard/actionCreators';
import Wallet from './Wallet';

const WalletContainer: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setHeaderElement(
        <button className="TransferButton button">
          <Transfer />
          Transfer
        </button>
      )
    );
    return () => {
      dispatch(setHeaderElement(null));
    };
  }, [dispatch]);
  return <Wallet />;
};

export default WalletContainer;
