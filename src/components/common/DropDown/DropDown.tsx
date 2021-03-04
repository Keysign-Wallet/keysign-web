import React from 'react';
import { mergeClasses } from '../../../utils/helpers';
import { DropDownProps } from './types';
import './DropDown.scss';

const DropDown: React.FC<DropDownProps> = ({
  children,
  trigger,
  handleClick,
  handleMouseLeave,
  handleMouseOver,
  show,
  style,
}) => (
  <div
    className={mergeClasses('DropDown', show && 'reveal-drop-down-menu')}
    onMouseLeave={handleMouseLeave}
    onMouseOver={handleMouseOver}
    onFocus={() => {}}
    role="button"
    tabIndex={0}
  >
    {React.cloneElement(trigger, { onClick: handleClick })}

    <ul className="drop-down-menu" style={style}>
      {children}
    </ul>
  </div>
);

export default DropDown;
