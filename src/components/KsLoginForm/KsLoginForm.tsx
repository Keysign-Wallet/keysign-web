import React from 'react';
import { useHistory } from 'react-router-dom';

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
  const [login, { data }] = useMutation(LOGIN_QUERY);
  const history = useHistory();

  const validateLogin = () => {
    ExtensionHelperService.validateKSLogin().then((ksLoginResponse) => {
      const accountNumber = ksLoginResponse?.data?.result.accountNumber;

      if (ksLoginResponse?.success !== true || accountNumber?.length !== 64) {
        LoggerService.log('login failed');
      } else {
        login({ variables: { accountNumber } })
          .then((res: any) => {
            LoggerService.log(data);
            BrowserStorageService.setItem('token', res.data.login.token);
            BrowserStorageService.setItem('keysign', true);
            BrowserStorageService.setItem('accountNumber', accountNumber);
            if (res.data.login.newUser === true) {
              // send them to account setup.
              history.push('/setup');
            } else {
              // send them to wallet page.
              history.push('/wallet');
            }
          })
          .catch((res) => {
            LoggerService.log(`graphql login api request failed: ${res}`);
          });
      }
    });
  };

  return (
    <div className="KsLoginForm">
      <h1 className="text-keysign-dark heading">Keysign Login</h1>
      <p className="paragraph">Hey there, welcome back</p>
      <div className="KsLoginForm__input-wrapper">
        <button className="button" onClick={validateLogin}>
          <LoginSvg />
        </button>
      </div>
    </div>
  );
};

export default KsLoginForm;
