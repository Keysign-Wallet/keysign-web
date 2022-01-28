import React from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from 'unop-react-dropdown';
import { ReactComponent as ArrowSvg } from '../../../assets/svgs/downArrow.svg';
import { URLS } from '../../../constants';
import { mergeClasses } from '../../../utils/helpers';
import './NavDropDown.scss';

const NavDropDown: React.FC<{ open: boolean; handler: () => void; loggedIn: boolean }> = ({
  open,
  handler,
  loggedIn,
}) => (
  <DropDown
    delay={300}
    onAppear={handler}
    onDisappearStart={handler}
    closeOnClickOut
    closeOnDropdownClicked
    trigger={
      <button className="Navigation__right_menu_arrow">
        <ArrowSvg />
      </button>
    }
  >
    {loggedIn ? (
      <ul
        className={mergeClasses('NavDropDown background-keysign-light keysign-default-border', [
          !open,
          'NavDropDown__close',
        ])}
      >
        <li>
          <NavLink
            to="/account"
            activeClassName="text-keysign-primary-i"
            className="border-keysign-offwhite-i text-keysign-grey"
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            activeClassName="text-keysign-primary-i"
            className="border-keysign-offwhite-i text-keysign-grey"
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/security"
            activeClassName="text-keysign-primary-i"
            className="border-keysign-offwhite-i text-keysign-grey"
          >
            Security
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            activeClassName="text-keysign-primary-i"
            className="border-keysign-offwhite-i text-keysign-grey"
          >
            Delete Account
          </NavLink>
        </li>
      </ul>
    ) : (
      <>
        <ul
          className={mergeClasses('NavDropDown background-keysign-light keysign-default-border', [
            !open,
            'NavDropDown__close',
          ])}
        >
          <li>
            <NavLink
              to={URLS.faq}
              activeClassName="text-keysign-primary-i"
              className="border-keysign-offwhite-i text-keysign-grey"
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URLS.integration}
              activeClassName="text-keysign-primary-i"
              className="border-keysign-offwhite-i text-keysign-grey"
            >
              Integration
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URLS.contact}
              activeClassName="text-keysign-primary-i"
              className="border-keysign-offwhite-i text-keysign-grey"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </>
    )}
  </DropDown>
);

export default NavDropDown;
