import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowSvg } from '../../../assets/svgs/downArrow.svg';
import { mergeClasses } from '../../../utils/helpers';
import DropDown from '../../common/DropDown';
import './NavDropDown.scss';
import { URLS } from '../../../constants';

const NavDropDown: React.FC<{ open: boolean; handler: () => void; loggedIn: boolean }> = ({
  open,
  handler,
  loggedIn,
}) => (
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
    {loggedIn ? (
      <>
        <ul
          className={mergeClasses(
            'NavDropDown background-keysign-light keysign-default-border',
            !open && 'NavDropDown__close'
          )}
        >
          <li>
            <NavLink
              to={URLS.dashboard}
              activeClassName="text-keysign-primary-i"
              className="border-keysign-offwhite-i text-keysign-grey"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URLS.downloads}
              activeClassName="text-keysign-primary-i"
              className="border-keysign-offwhite-i text-keysign-grey"
            >
              Download
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URLS.account}
              activeClassName="text-keysign-primary-i"
              className="border-keysign-offwhite-i text-keysign-grey"
            >
              Account
            </NavLink>
          </li>
        </ul>
      </>
    ) : (
      <>
        <ul
          className={mergeClasses(
            'NavDropDown background-keysign-light keysign-default-border',
            !open && 'NavDropDown__close'
          )}
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
