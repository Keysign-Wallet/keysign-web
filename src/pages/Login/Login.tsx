import React from 'react';

import LoginForm from '../../components/LoginForm';
import KsLoginForm from '../../components/KsLoginForm';

import human from '../../assets/images/human-at-door.png';
import './Login.scss';
import ExtensionHelperService from '../../services/extensionHelperService';

const Login: React.FC = () => {
  const downloadText = 'You must download keysign';
  const checkExtension = async () => {
    const extensionExists = await ExtensionHelperService.checkIfExtensionExists();
    return extensionExists;
  };
  checkExtension();
  const extensionExists = false;
  console.log(extensionExists);
  return (
    <div className="Login">
      <div className="border-keysign-ash Login__wrapper">
        <div className="Login__illustration">
          <img src={human} alt="human-illustration" />
        </div>
        <div className="Login__right-wrapper">
          <LoginForm />
          <hr className="border-keysign-ash" />
          <KsLoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
