import React from 'react';

import { ReactComponent as LoginSvg } from '../../assets/svgs/login.svg';

import './KsLoginForm.scss';

const KsLoginForm: React.FC = () => (
  <div className="KsLoginForm">
    <h1 className="text-keysign-dark heading">Keysign Login</h1>
    <p className="paragraph">Hey there, welcome back</p>
    <div className="KsLoginForm__input-wrapper">
      <input type="text" className="input" placeholder="Account Number" />
      <button className="button">
        <LoginSvg />
      </button>
    </div>
  </div>
);

export default KsLoginForm;
