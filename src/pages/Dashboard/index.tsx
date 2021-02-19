import React, { useState } from 'react';
import DashboardContext from './DashboardContext';
import Dashboard from './Dashboard';

const DashboardContainer: React.FC = () => {
  const [headerEl, setHeaderEl] = useState<JSX.Element | null>(null);
  return (
    <DashboardContext.Provider value={{ headerEl, setHeaderEl }}>
      <Dashboard />
    </DashboardContext.Provider>
  );
};

export default DashboardContainer;
