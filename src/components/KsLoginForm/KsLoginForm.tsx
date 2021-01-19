import React, { useState } from 'react';

import { ReactComponent as LoginSvg } from '../../assets/svgs/login.svg';

import './KsLoginForm.scss';
import ExtensionHelperService from '../../services/extensionHelperService';

const KsLoginForm: React.FC = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const validateLogin = () => {
    ExtensionHelperService.validateKSLogin(accountNumber).then((r) => console.log(r));
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
