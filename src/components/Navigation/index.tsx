import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationStore } from '../../redux/types';
import { logUserOut } from '../../redux/App/actionCreators';
import Navigation from './Navigation';

const NavigationContainer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: ApplicationStore) => state.app);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY <= 0 && isScrolled) {
      setIsScrolled(false);
    }
  });
  const logout = () => {
    dispatch(logUserOut());
  };
  const className = `Navigation${isScrolled ? ' border-keysign-offwhite-i background-keysign-pale-blue' : ''}`;
  return <Navigation className={className} isLoggedIn={isLoggedIn} logout={logout} />;
};

export default NavigationContainer;
