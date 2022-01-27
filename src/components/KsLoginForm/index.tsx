import React from 'react';

// import { useMutation } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import useLogin from '../../hooks/login';

import './KsLoginForm.scss';
import ExtensionHelperService from '../../services/extensionHelperService';
import LoggerService from '../../services/loggerService';
import KsLoginForm from './KsLoginForm';

// const LOGIN_QUERY = gql`
//   mutation login($accountNumber: String!) {
//     login(accountNumber: $accountNumber) {
//       token
//       newUser
//     }
//   }
// `;

const KsLoginFormContainer: React.FC = () => {
  // const [login] = useMutation(LOGIN_QUERY);
  const { loginSuccess } = useLogin();

  const validateLogin = () => {
    ExtensionHelperService.validateKSLogin('').then((ksLoginResponse) => {
      const accountNumber = ksLoginResponse?.data?.result?.accountNumber;

      if (ksLoginResponse?.success !== true || accountNumber?.length !== 64) {
        LoggerService.log('login failed');
      } else {
        // login({ variables: { accountNumber } })
        //   .then((res: any) => {
        loginSuccess(accountNumber);
        // })
        // .catch((res) => {
        //   LoggerService.log(`graphql login api request failed: ${res}`);
        // });
      }
    });
  };

  return <KsLoginForm validateLogin={validateLogin} />;
};

export default KsLoginFormContainer;
