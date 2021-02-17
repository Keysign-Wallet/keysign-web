import React, { useContext, useEffect } from 'react';
import DashboardContext from '../DashboardContext';
import Root from './DashboardRoot';

const RootContainer: React.FC = () => {
  const { setHeaderEl } = useContext(DashboardContext);
  useEffect(() => {
    setHeaderEl(<h1 className="text-keysign-dark">Dashboard</h1>);
    return () => setHeaderEl(null);
  }, [setHeaderEl]);
  return <Root />;
};

export default RootContainer;
