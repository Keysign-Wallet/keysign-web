import React from 'react';

export type DashboardContextType = {
  headerEl: JSX.Element | null;
  setHeaderEl: (el: JSX.Element | null) => void;
};

export default React.createContext<DashboardContextType>({
  headerEl: null,
  setHeaderEl: () => {},
});
