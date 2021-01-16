import React from 'react';
import { NavLink } from 'react-router-dom';

import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="Layout">
      <div className="navBar">
        <NavLink className="navBar__Logo" to="/about">
          <img alt="Keysign Logo" className="navBar__Logo__img" src={'/'} />
        </NavLink>
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
    </div>
  );
};

export default Layout;
