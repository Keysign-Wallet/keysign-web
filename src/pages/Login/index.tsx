import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationStore } from '../../redux/types';
import Login from './Login';

const LoginContainer: React.FC = () => {
  const { isLoggedIn } = useSelector((state: ApplicationStore) => state.app);
  return <Login loggedIn={isLoggedIn} />;
};

export default LoginContainer;
