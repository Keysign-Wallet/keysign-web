import React from 'react';
import { useHistory } from 'react-router-dom';
import { URLS } from '../../../constants';
import DashboardHeader from './DashboardHeader';

const DashboardHeaderContainer: React.FC = () => {
  const {
    location: { pathname },
    goBack,
  } = useHistory();
  let path = pathname;
  if (path[path.length - 1] === '/') path = path.slice(0, -1);
  const showBackButton = path !== `${URLS.dashboard}`;

  return <DashboardHeader showBackButton={showBackButton} goBack={goBack} />;
};

export default DashboardHeaderContainer;
