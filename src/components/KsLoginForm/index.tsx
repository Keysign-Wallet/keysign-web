import React from 'react';
import useLogin from '../../hooks/login';

import './KsLoginForm.scss';
import ExtensionHelperService from '../../services/extensionHelperService';
import LoggerService from '../../services/loggerService';
import KsLoginForm from './KsLoginForm';

const KsLoginFormContainer: React.FC = () => {
  const { loginSuccess } = useLogin();

  const validateLogin = () => {
    ExtensionHelperService.validateKSLogin('').then((ksLoginResponse) => {
      const accountNumber = ksLoginResponse?.data?.result?.accountNumber;
      if (ksLoginResponse?.success !== true || accountNumber?.length !== 64) {
        LoggerService.log('login failed');
      } else {
        loginSuccess(accountNumber);
      }
    });
  };

  return <KsLoginForm validateLogin={validateLogin} />;
};

export default KsLoginFormContainer;
