import React from 'react';

import './Toggler.scss';

type TogglerProps = {
  togglerStatusClass: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Toggler: React.FC<TogglerProps> = ({ onClick, togglerStatusClass }) => {
  return (
    <button className="Toggler" onClick={onClick}>
      <div className={togglerStatusClass} />
    </button>
  );
};

export default Toggler;
