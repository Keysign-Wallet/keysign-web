import React from 'react';
import { ReactComponent as LoginSvg } from '../../assets/svgs/login.svg';
import Button from '../common/Button';

const KsLoginForm: React.FC<{ validateLogin: () => void }> = ({ validateLogin }) => {
  return (
    <div className="KsLoginForm">
      <h1 className="text-keysign-dark heading">Keysign Login</h1>
      <p className="paragraph">Hey there, welcome back</p>
      <div className="KsLoginForm__input-wrapper">
        <Button onClick={validateLogin} className="KsLoginForm__button">
          Extension login <LoginSvg />
        </Button>
      </div>
    </div>
  );
};

export default KsLoginForm;
