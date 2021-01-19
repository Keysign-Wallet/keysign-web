import React from 'react';

import './Expandable.scss';

const Expandable: React.FC<{
  height: number | undefined;
  innerRef: React.RefObject<HTMLDivElement>;
  className?: string;
}> = ({ children, height, innerRef, className }) => {
  return (
    <div className={className} style={{ height }} ref={innerRef}>
      {children}
    </div>
  );
};

export default Expandable;
