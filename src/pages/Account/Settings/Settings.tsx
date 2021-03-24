import React, { useState } from 'react';
import AdornedInput from '../../../components/common/AdornedInput/AdornedInput';
import './Settings.scss';

const Settings: React.FC = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Settings">
      <h2 className="heading">Email Change</h2>
      <AdornedInput
        text="Email Address"
        value={email}
        callback={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />
      <AdornedInput
        text="Confirm Email Address"
        value={confirmEmail}
        callback={(e) => {
          e.preventDefault();
          setConfirmEmail(e.target.value);
        }}
      />
      <AdornedInput
        text="Password"
        type="password"
        value={password}
        callback={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
      />
      <button className="button">Save</button>
    </div>
  );
};

export default Settings;
