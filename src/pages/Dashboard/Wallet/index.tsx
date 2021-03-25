import React, { useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Transfer } from '../../../assets/svgs/transfer.svg';
import { setHeaderElement } from '../../../redux/Dashboard/actionCreators';
import { ApplicationStore } from '../../../redux/types';
import Wallet from './Wallet';

const WalletContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { user } = useSelector((state: ApplicationStore) => state);
  const signingKeyRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

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
  return <Wallet addressRef={addressRef} signingKeyRef={signingKeyRef} address={user.accountNumber} />;
};

export default WalletContainer;
