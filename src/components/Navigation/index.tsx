import React, { useState } from 'react';
import Navigation from './Navigation';

const NavigationContainer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY <= 0 && isScrolled) {
      setIsScrolled(false);
    }
  });
  const className = `Navigation${isScrolled ? ' border-keysign-offwhite-i background-keysign-pale-blue' : ''}`;
  return <Navigation className={className} />;
};

export default NavigationContainer;
