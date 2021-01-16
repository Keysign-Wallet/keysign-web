import React from 'react';

import './LoginForm.scss';

const LoginForm: React.FC = () => (
  <div className="LoginForm">
    <h1 className="text-keysign-dark heading">Login</h1>
    <h2 className="text-keysign-grey paragraph">Welcome to Keysign</h2>
    <form className="LoginForm__form">
      <div className="LoginForm__inputs-wrapper">
        <input type="text" className="input" placeholder="Account Number" />
        <input type="text" className="input" placeholder="Signing Key" />
      </div>
      <button className="button">login</button>
    </form>
  </div>
);

export default LoginForm;
