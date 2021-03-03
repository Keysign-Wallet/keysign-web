import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoggerService from '../../services/loggerService';
import useLogin from '../../hooks/login';
import { checkValidSignInPair } from '../../utils/tnb';

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

const LoginFormContainer: React.FC = () => {
  const [login] = useMutation(LOGIN_QUERY);
  const { loginSuccess } = useLogin();

  const [fieldValues, setFieldValues] = useState<InputsType>({ accountNumber: '', signingKey: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { accountNumber, signingKey } = fieldValues;
    e.preventDefault();
    if (checkValidSignInPair(signingKey, accountNumber)) {
      login({ variables: { accountNumber } })
        .then((res) => {
          loginSuccess(res, accountNumber, signingKey);
        })
        .catch((err) => {
          LoggerService.log(err);
        });
    }
  };

  return <LoginForm onChange={onChange} values={fieldValues} loginHandler={loginHandler} />;
};

export default LoginFormContainer;
