import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ReactComponent as Transfer } from '../../../assets/svgs/transfer.svg';
import { setHeaderElement } from '../../../redux/Dashboard/actionCreators';
import Wallet from './Wallet';

const WalletContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleClick = useCallback(() => {
    push('/dashboard/transfer');
  }, [push]);

  useEffect(() => {
    dispatch(
      setHeaderElement(
        <button className="TransferButton button" onClick={handleClick}>
          <Transfer />
          Transfer
        </button>
      )
    );
    return () => {
      dispatch(setHeaderElement(null));
    };
  }, [dispatch, handleClick]);
  return <Wallet />;
};

export default WalletContainer;
