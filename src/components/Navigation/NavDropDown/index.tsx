import React, { useState } from 'react';
import NavDropDown from './NavDropDown';

const NavDropDownContainer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  return <NavDropDown open={open} handler={handler} />;
};

export default NavDropDownContainer;
