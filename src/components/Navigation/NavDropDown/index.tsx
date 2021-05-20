import React, { useState } from 'react';
import NavDropDown from './NavDropDown';

const NavDropDownContainer: React.FC<{ loggedIn: boolean }> = ({ loggedIn }) => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  return <NavDropDown open={open} handler={handler} loggedIn={loggedIn} />;
};

export default NavDropDownContainer;
