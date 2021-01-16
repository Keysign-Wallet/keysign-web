import React from 'react';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="Layout">
      <div className="navBar">
        <h1>Keysign</h1>
        <ul className="navBar__items-list">
          <li>FAQ</li>
          <li>Integration</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
        <button>Download</button>
      </div>
      {children}
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Layout;
