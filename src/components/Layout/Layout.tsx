import React from 'react';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="Layout">
      <div className="navBar">
        <h1>Navigation Bat</h1>
      </div>
      {children}
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Layout;
