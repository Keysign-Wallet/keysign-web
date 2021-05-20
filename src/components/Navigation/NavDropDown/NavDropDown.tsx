import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowSvg } from '../../../assets/svgs/downArrow.svg';
import { mergeClasses } from '../../../utils/helpers';
import DropDown from '../../common/DropDown';
import './NavDropDown.scss';

const NavDropDown: React.FC<{ open: boolean; handler: () => void, loggedIn: boolean }> = ({ open, handler }) => (
  <DropDown
    delay={300}
    onAppearStart={handler}
    onDisappearStart={handler}
    trigger={
      <button className="Navigation__right_menu_arrow">
        <ArrowSvg />
      </button>
    }
  >
    <ul
      className={mergeClasses(
        'NavDropDown background-keysign-light keysign-default-border',
        !open && 'NavDropDown__close'
      )}
    >
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
  </DropDown>
);

export default NavDropDown;
