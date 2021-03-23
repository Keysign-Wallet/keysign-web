import React from 'react';
import Button from '../common/Button';
import { LoginFormType } from './types';

const LoginForm: React.FC<LoginFormType> = ({ onChange, values, loginHandler, loading }) => {
  return (
    <div className="LoginForm">
      <h1 className="text-keysign-dark heading">Login</h1>
      <h2 className="text-keysign-grey paragraph">Welcome to Keysign</h2>
      <form className="LoginForm__form">
        <div className="LoginForm__inputs-wrapper">
          <input
            type="text"
            className="input"
            placeholder="Account Number"
            value={values.accountNumber}
            onChange={onChange}
            name="accountNumber"
          />
          <input
            type="text"
            className="input"
            placeholder="Signing Key"
            value={values.signingKey}
            onChange={onChange}
            name="signingKey"
          />
        </div>
        <Button onClick={loginHandler} loading={loading}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
