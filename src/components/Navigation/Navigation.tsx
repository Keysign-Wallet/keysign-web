import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import NavDropDown from './NavDropDown';
import { URLS } from '../../constants';
import { ReactComponent as LogoutSvg } from '../../assets/svgs/logout.svg';
import './Navigation.scss';

const Navigation: React.FC<{ className: string; isLoggedIn: boolean; logout: () => void }> = ({
  className,
  isLoggedIn,
  logout,
}) => (
  <div className={className}>
    <div className="Navigation__inner">
      <NavLink className="Navigation__Logo" to={URLS.landing}>
        <img alt="Keysign Logo" className="Navigation__Logo__img" src={logo} />
      </NavLink>
      <span className="heading">Keysign</span>
      {/* This is the nav that shows when the user is not logged */}
      {!isLoggedIn ? (
        <>
          <ul className="Navigation__items-list text-keysign-grey">
            <li>
              <NavLink to={URLS.faq} activeClassName="selected">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to={URLS.integration} activeClassName="selected">
                Integration
              </NavLink>
            </li>
            <li>
              <NavLink to={URLS.contact} activeClassName="selected">
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink to={URLS.login} activeClassName="selected" className="Navigation__button-link-1">
            <button className="button">Login</button>
          </NavLink>
          <NavLink to={URLS.downloads} activeClassName="selected" className="Navigation__button-link-2">
            <button className="button">Download</button>
          </NavLink>
          <NavDropDown loggedIn={false} />
        </>
      ) : (
        <>
          <ul className="Navigation__items-list text-keysign-grey">
            <li>
              <NavLink to={URLS.dashboard} activeClassName="selected">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={URLS.downloads} activeClassName="selected">
                Download
              </NavLink>
            </li>
          </ul>
          <div className="Navigation__right">
            <div className="Navigation__right_menu">
            <NavLink to={URLS.account} activeClassName="selected">
                Account
              </NavLink>
              <div className="Navigation__right_menu_line background-keysign-offwhite" />
              <button className="Navigation__right_menu_logout" onClick={logout}>
                <LogoutSvg />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
);

export default Navigation;
