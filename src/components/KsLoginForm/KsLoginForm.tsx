import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ReactComponent as LoginSvg } from '../../assets/svgs/login.svg';

import './KsLoginForm.scss';
import ExtensionHelperService from '../../services/extensionHelperService';
import BrowserStorageService from '../../services/browserStorageService';
import LoggerService from '../../services/loggerService';

const LOGIN_QUERY = gql`
  mutation login($accountNumber: String!) {
    login(accountNumber: $accountNumber) {
      token
      newUser
    }
  }
`;

const KsLoginForm: React.FC = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [login, { data }] = useMutation(LOGIN_QUERY);

  const validateLogin = () => {
    ExtensionHelperService.validateKSLogin(accountNumber).then(() => {
      login({ variables: { accountNumber } }).then((res: any) => {
        LoggerService.log(data);
        BrowserStorageService.setItem('token', res.data.login.token);
        BrowserStorageService.setItem('keysign', true);
        BrowserStorageService.setItem('accountNumber', accountNumber);
      });
    });
  };

  return (
    <div className="KsLoginForm">
      <h1 className="text-keysign-dark heading">Keysign Login</h1>
      <p className="paragraph">Hey there, welcome back</p>
      <div className="KsLoginForm__input-wrapper">
        <input
          type="text"
          className="input"
          placeholder="Account Number"
          onChange={(e) => {
            setAccountNumber(e.target.value);
          }}
        />
        <button className="button" onClick={validateLogin}>
          <LoginSvg />
        </button>
      </div>
    </div>
  );
};

export default KsLoginForm;
