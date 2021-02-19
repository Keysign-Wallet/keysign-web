import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Navigation.scss';

const Navigation: React.FC<{ className: string }> = ({ className }) => (
  <div className={className}>
    <div className="Navigation__inner">
      <NavLink className="Navigation__Logo" to="/">
        <img alt="Keysign Logo" className="Navigation__Logo__img" src={logo} />
      </NavLink>
      <span className="heading">Keysign</span>
      <ul className="Navigation__items-list text-keysign-grey">
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
      <NavLink to="/login" activeClassName="selected" className="Navigation__button-link-1">
        <button className="button">Login</button>
      </NavLink>
      <NavLink to="/downloads" activeClassName="selected" className="Navigation__button-link-2">
        <button className="button">Download</button>
      </NavLink>
    </div>
  </div>
);

export default Navigation;
