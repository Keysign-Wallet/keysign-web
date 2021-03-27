import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationStore } from '../../../../redux/types';
import { transfer, getBalance, getTransactions } from '../../../../redux/User/actionCreators';

export default () => {
  const dispatch = useDispatch();
  const {
    user: {
      requestStates: {
        transfer: { requesting },
      },
    },
  } = useSelector((state: ApplicationStore) => state);

  const transferCoins = useCallback(
    async (recipient: string, amount: number, keysign = false) => {
      await dispatch(transfer(recipient, amount, keysign));
      dispatch(getBalance());
      dispatch(getTransactions());
    },
    [dispatch]
  );

  return {
    requesting,
    transferCoins,
  };
};
