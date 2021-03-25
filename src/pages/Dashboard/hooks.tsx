import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getPrimaryValidator, getBalance, getTransactions } from '../../redux/User/actionCreators';

export default () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const initalizeDashboard = useCallback(async () => {
    await dispatch(getPrimaryValidator());
    await dispatch(getBalance());
    await dispatch(getTransactions());
    setLoading(false);
  }, [dispatch]);

  return {
    initalizeDashboard,
    loading,
  };
};
