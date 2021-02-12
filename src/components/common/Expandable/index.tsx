import React, { useState, useRef, useEffect } from 'react';

import Expandable from './Expandable';

const ExpandableContainer: React.FC<{ open?: boolean; className?: string }> = ({
  open = false,
  className = '',
  children,
}) => {
  const [height, setHeight] = useState<number | undefined>(0);
  const expandableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expandableRef.current) {
      if (open && (height === 0 || expandableRef.current.clientHeight === 0)) {
        setHeight(expandableRef.current.scrollHeight);
      }
      if (height && !open && height > 0) {
        setHeight(0);
      }
    }
  }, [height, open]);

  const expandableClassName = `Expandable${className ? ` ${className}` : ''}`;

  return (
    <Expandable height={height} innerRef={expandableRef} className={expandableClassName}>
      {children}
    </Expandable>
  );
};

export default ExpandableContainer;
