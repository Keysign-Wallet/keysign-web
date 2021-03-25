import React, { useEffect } from 'react';
import useDashboard from './hooks';
import Dashboard from './Dashboard';

const DashboardContainer: React.FC = () => {
  const { loading, initalizeDashboard } = useDashboard();
  useEffect(() => {
    initalizeDashboard();
  }, [initalizeDashboard]);
  return loading ? (
    <div>
      <h1>LOADING</h1>
    </div>
  ) : (
    <Dashboard />
  );
};

export default DashboardContainer;
