import React from 'react';
import { ReactComponent as LoginSvg } from '../../assets/svgs/login.svg';

const KsLoginForm: React.FC<{ validateLogin: () => void }> = ({ validateLogin }) => {
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
