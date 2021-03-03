import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AddressDisplay from '../../../components/AddressDisplay';
import { RowType } from '../../../components/Table/types';
import Root from './DashboardRoot';
import { setHeaderElement } from '../../../redux/Dashboard/actionCreators';

const RootContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(setHeaderElement(<h1 className="text-keysign-dark">Dashboard</h1>));
    return () => {
      dispatch(setHeaderElement(null));
    };
  }, [dispatch]);

  const showMoreHandler = () => {
    push('/Dashboard/wallet');
  };

  const rows: RowType[] = [
    {
      row: [
        'wallet One',
        () => <AddressDisplay address="KU3efgfgdfgdfgttrtrqrges0bhwe" />,
        '14,500',
        '15,799',
        '$234,878',
      ],
      rowProps: { className: 'DashboardRoot__row', onClick: showMoreHandler },
    },
  ];

  return <Root showMoreHandler={showMoreHandler} walletsRow={rows} />;
};

export default RootContainer;
