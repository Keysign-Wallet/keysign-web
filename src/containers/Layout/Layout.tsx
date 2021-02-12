import React from 'react';
import Navigation from '../../components/Navigation';

import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="Layout">
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
