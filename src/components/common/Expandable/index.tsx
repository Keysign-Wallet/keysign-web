import React, { useState, useRef, useEffect } from 'react';

import Expandable from './Expandable';

const ExpandableContainer: React.FC<{ open?: boolean; className?: string }> = ({
  open = false,
  className = '',
  children,
}) => {
  const clientHeight = useRef(0);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const expandableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (expandableRef.current) {
      if (height === undefined) {
        clientHeight.current = expandableRef.current.clientHeight;
        setHeight(0);
      }
      if (open && height === 0) {
        setHeight(clientHeight.current);
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
