import React, { useState } from 'react';

import './LoginForm.scss';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';
import BrowserStorageService from '../../services/browserStorageService';
import LoggerService from '../../services/loggerService';
import EncryptionService from '../../services/encryptionService';
import { checkValidSignInPair } from '../../utils/handshake';

const LOGIN_QUERY = gql`
  mutation login($accountNumber: String!) {
    login(accountNumber: $accountNumber) {
      token
      newUser
    }
  }
`;

const LoginForm: React.FC = () => {
  const [login, { data }] = useMutation(LOGIN_QUERY);
  const history = useHistory();

  const [accountNumber, updateAccountNumber] = useState('');
  const [signingKey, updateSigningKey] = useState('');
  const loginHandler = (e: any) => {
    e.preventDefault();
    if (checkValidSignInPair(signingKey, accountNumber)) {
      login({ variables: { accountNumber } })
        .then((res) => {
          LoggerService.log(res);
          LoggerService.log(data);
          BrowserStorageService.setItem('token', data.login.token);
          const encryptedSigningKey = EncryptionService.encryptData(signingKey);
          BrowserStorageService.setItem('signingKey', encryptedSigningKey);
          BrowserStorageService.setItem('keysign', false);
          BrowserStorageService.setItem('accountNumber', accountNumber);
          if (res.data.login.newUser === true) {
            // send them to account setup.
            history.push('/setup');
          } else {
            // send them to wallet page.
            history.push('/wallet');
          }
        })
        .catch((err) => {
          LoggerService.log(err);
        });
    }
  };

  return (
    <div className="LoginForm">
      <h1 className="text-keysign-dark heading">Login</h1>
      <h2 className="text-keysign-grey paragraph">Welcome to Keysign</h2>
      <form className="LoginForm__form">
        <div className="LoginForm__inputs-wrapper">
          <input
            type="text"
            className="input"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => {
              e.preventDefault();
              updateAccountNumber(e.target.value);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder="Signing Key"
            value={signingKey}
            onChange={(e) => updateSigningKey(e.target.value)}
          />
        </div>
        <button className="button" onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
