import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="Layout">
      <div className="navBar">
        <NavLink className="navBar__Logo" to="/about">
          <img alt="Keysign Logo" className="navBar__Logo__img" src={logo} />
        </NavLink>
        <span className="heading">Keysign</span>
        <ul className="navBar__items-list text-keysign-grey">
          <li>
            <NavLink to="/faq" activeClassName="selected">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/integration" activeClassName="selected">
              Integration
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="selected">
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink to="/login" activeClassName="selected" className="navBar__button-link-1">
          <button className="button">Login</button>
        </NavLink>
        <NavLink to="/downloads" activeClassName="selected" className="navBar__button-link-2">
          <button className="button">Download</button>
        </NavLink>
      </div>
      {children}
    </div>
  );
};

export default Layout;
