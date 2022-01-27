import React from 'react';

import { Account } from 'thenewboston';
import LoggerService from '../../services/loggerService';
import useLogin from '../../hooks/login';

import LoginForm from './LoginForm';
import { InputsType } from './types';
import './LoginForm.scss';

const initialValues = { accountNumber: '', signingKey: '' };

const LoginFormContainer: React.FC = () => {
  const { loginSuccess } = useLogin();

  const loginHandler = (fieldValues: InputsType) => {
    const { accountNumber, signingKey } = fieldValues;
    if (Account.isValidPair(signingKey, accountNumber)) {
      loginSuccess(accountNumber, signingKey);
    } else {
      LoggerService.log('ERROR');
    }
  };

  return <LoginForm loginHandler={loginHandler} loading={false} initialValues={initialValues} />;
};

export default LoginFormContainer;
