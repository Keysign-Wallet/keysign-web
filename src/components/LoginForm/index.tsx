import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Account } from 'thenewboston';
import LoggerService from '../../services/loggerService';
import useLogin from '../../hooks/login';

import LoginForm from './LoginForm';
import { InputsType } from './types';
import './LoginForm.scss';

const LOGIN_QUERY = gql`
  mutation login($accountNumber: String!) {
    login(accountNumber: $accountNumber) {
      token
      newUser
    }
  }
`;

const initialValues = { accountNumber: '', signingKey: '' };

const LoginFormContainer: React.FC = () => {
  const [login, { loading }] = useMutation(LOGIN_QUERY);
  const { loginSuccess } = useLogin();

  const loginHandler = (fieldValues: InputsType) => {
    const { accountNumber, signingKey } = fieldValues;
    if (Account.isValidPair(signingKey, accountNumber)) {
      login({ variables: { accountNumber } })
        .then(() => {
          loginSuccess(accountNumber, signingKey);
        })
        .catch((err) => {
          LoggerService.log(err);
        });
    }
  };

  return <LoginForm loginHandler={loginHandler} loading={loading} initialValues={initialValues} />;
};

export default LoginFormContainer;
