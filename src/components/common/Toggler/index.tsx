import React, { useState } from 'react';

import Toggler from './Toggler';

type TogglerEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

type TogglerContainerProps = {
  isOn?: boolean;
  onToggleOn?: (e?: TogglerEvent) => void;
  onToggleOff?: (e?: TogglerEvent) => void;
  onToggle?: (e?: TogglerEvent) => void;
};

const TogglerContainer: React.FC<TogglerContainerProps> = ({ isOn = false, onToggle, onToggleOff, onToggleOn }) => {
  const [on, setOn] = useState(isOn);
  const togglerStatusClass = `Toggler ${on ? 'background-keysign-primary Toggler__on' : 'background-keysign-ash-dark'}`;

  const onTogglerClick = (e: TogglerEvent) => {
    if (on) {
      if (onToggleOff) onToggleOff(e);
    } else if (onToggleOn) onToggleOn(e);
    if (onToggle) onToggle(e);
    setOn(!on);
  };

  return <Toggler togglerStatusClass={togglerStatusClass} onClick={onTogglerClick} />;
};

export default TogglerContainer;
