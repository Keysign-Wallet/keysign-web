import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AddressDisplay from '../../../components/AddressDisplay';
import { RowType } from '../../../components/Table/types';
import Root from './DashboardRoot';
import { setHeaderElement } from '../../../redux/Dashboard/actionCreators';
import { ApplicationStore } from '../../../redux/types';

const RootContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const {
    user: { accountNumber, balance, usdRate },
  } = useSelector((state: ApplicationStore) => state);

  useEffect(() => {
    dispatch(setHeaderElement(<h1 className="text-keysign-dark DashboardRoot__heading">Dashboard</h1>));
    return () => {
      dispatch(setHeaderElement(null));
    };
  }, [dispatch]);

  const showMoreHandler = () => {
    push('/dashboard/wallet');
  };

  const rows: RowType[] = [
    {
      row: [
        () => <AddressDisplay address={accountNumber} />,
        balance.toLocaleString(),
        balance.toLocaleString(),
        `$${(usdRate * balance).toLocaleString()}`,
      ],
      rowProps: { className: 'DashboardRoot__row', onClick: showMoreHandler },
    },
  ];

  return <Root showMoreHandler={showMoreHandler} walletsRow={rows} />;
};

export default RootContainer;
