import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { URLS } from '../../../constants';
import { ApplicationStore } from '../../../redux/types';
import DashboardHeader from './DashboardHeader';

const DashboardHeaderContainer: React.FC = () => {
  const { headerElement } = useSelector((state: ApplicationStore) => state.dashboard);
  const {
    location: { pathname },
    goBack,
  } = useHistory();
  let path = pathname;
  if (path[path.length - 1] === '/') path = path.slice(0, -1);
  const showBackButton = path !== `${URLS.dashboard}`;

  return <DashboardHeader showBackButton={showBackButton} goBack={goBack} headerElement={headerElement} />;
};

export default DashboardHeaderContainer;
