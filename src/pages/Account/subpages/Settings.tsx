import React, { useState } from 'react';
import './Settings.scss';

const Settings: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="Settings">
      <p className="paragraph text-keysign-grey">Email Change</p>
      <input
        type="text"
        className="input"
        placeholder="Email Address"
        value={email}
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        className="input"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
      />
    </div>
  );
};

export default Settings;
