import React from 'react';

import LoginForm from '../../components/LoginForm';

import human from '../../assets/images/human-at-door.png';
import './Login.scss';

const Login: React.FC = () => (
  <div className="Login">
    <div className="border-keysign-ash Login__wrapper">
      <div className="Login__illustration">
        <img src={human} alt="human-illustration" />
      </div>
      <div className="Login__right-wrapper">
        <LoginForm />
        <hr className="border-keysign-ash" />
      </div>
    </div>
  </div>
);

export default Login;
