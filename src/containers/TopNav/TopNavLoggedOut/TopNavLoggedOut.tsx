import React from 'react';
import './TopNavLoggedOut.scss';
import { NavLink } from 'react-router-dom';

const TopNavLoggedOut: React.FC = () => {
  return (
    <div className="navBar">
      <NavLink className="navBar__Logo" to="/about">
        <img alt="Keysign Logo" className="navBar__Logo__img" src={'/'} />
      </NavLink>
      <h1>Keysign</h1>
      <ul className="navBar__items-list">
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
      <NavLink to="/login" activeClassName="selected">
        <button>Login</button>
      </NavLink>
      <NavLink to="/downloads" activeClassName="selected">
        <button>Download</button>
      </NavLink>
    </div>
  );
};

export default TopNavLoggedOut;
