import React from 'react';

import './Toggler.scss';

type TogglerProps = {
  togglerStatusClass: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Toggler: React.FC<TogglerProps> = ({ onClick, togglerStatusClass }) => {
  return (
    <button className={togglerStatusClass} onClick={onClick}>
      <div className="background-keysign-light" />
    </button>
  );
};

export default Toggler;
