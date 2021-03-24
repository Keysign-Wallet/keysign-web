import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../redux/types';
import useLogout from '../../hooks/logout';
import Navigation from './Navigation';

const NavigationContainer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLoggedIn } = useSelector((state: ApplicationStore) => state.app);
  const { logout } = useLogout();
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY <= 0 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const className = `Navigation${isScrolled ? ' border-keysign-offwhite-i background-keysign-pale-blue' : ''}`;
  return <Navigation className={className} isLoggedIn={isLoggedIn} logout={logout} />;
};

export default NavigationContainer;
