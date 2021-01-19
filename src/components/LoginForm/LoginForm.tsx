import React, { useState } from 'react';

import './LoginForm.scss';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import EncryptionService from '../../services/encryptionService';
import BrowserStorageService from '../../services/browserStorageService';

const LOGIN_QUERY = gql`
  mutation login($accountNumber: String!, $signingKey: String!) {
    login(accountNumber: $accountNumber, signingKey: $signingKey) {
      token
      newUser
    }
  }
`;

const LoginForm: React.FC = () => {
  const [login, { data }] = useMutation(LOGIN_QUERY);
  const [accountNumber, updateAccountNumber] = useState('');
  const [signingKey, updateSigningKey] = useState('');
  const loginHandler = (e: any) => {
    e.preventDefault();
    const encryptedPassword = EncryptionService.encryptData(signingKey);
    // console.log(EncryptionService.decryptData(encryptedPassword));
    login({ variables: { accountNumber, signingKey } })
      .then((res) => {
        console.log(res);
        console.log(data);
        BrowserStorageService.setItem('token', data.login.token);
        BrowserStorageService.setItem('signingKey', signingKey);
        BrowserStorageService.setItem('accountNumber', accountNumber);
        if (data.newUser) {
          // send them to account setup.
        } else {
          // send them to wallet page.
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
