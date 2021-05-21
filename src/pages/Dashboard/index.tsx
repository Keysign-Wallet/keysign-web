import React, { useEffect } from 'react';
import Loader from '../../components/common/Loader';
import useDashboard from './hooks';
import Dashboard from './Dashboard';

const DashboardContainer: React.FC = () => {
  const { loading, initalizeDashboard } = useDashboard();
  useEffect(() => {
    initalizeDashboard();
  }, [initalizeDashboard]);
  return loading ? <Loader>Setting up your dashboard...</Loader> : <Dashboard />;
};

export default DashboardContainer;
