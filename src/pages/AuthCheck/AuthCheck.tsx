import React, { useState } from 'react';

import './AuthCheck.scss';

import left from '../../assets/images/left-frame.png';
import right from '../../assets/images/right-frame.png';
import lock from '../../assets/svgs/2fa-lock.svg';

const AuthCheck: React.FC = () => {
  const [authCode, setAuthCode] = useState('');

  return (
    <div className="AuthCheck">
      <img src={left} alt="left" className="AuthCheck__top-left" />
      <img src={right} alt="right" className="AuthCheck__bottom-right" />
      <div className="AuthCheck__wrapper border-keysign-offwhite-i">
        <img src={lock} alt="lock" className="AuthCheck__lock" />
        <p className="heading">Enter the 6-digit code generated by Google authentication app.</p>
        <input
          type="text"
          className="input AuthCheck__input"
          placeholder="Account Number"
          value={authCode}
          onChange={(e) => {
            e.preventDefault();
            setAuthCode(e.target.value);
          }}
        />
        <button className="button AuthCheck__button">Confirm</button>
        <p className="text-keysign-grey">
          If you cannot receive a security code from google authentication app, you can get one by <b>text message.</b>
        </p>
      </div>
    </div>
  );
};

export default AuthCheck;
