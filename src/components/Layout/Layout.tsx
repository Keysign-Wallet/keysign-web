import React from 'react';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="Layout">
      <h1>NAVIGATION</h1>
      {children}
    </div>
  );
};

export default Layout;
