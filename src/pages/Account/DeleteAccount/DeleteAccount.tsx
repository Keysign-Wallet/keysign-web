import React, { useState } from 'react';
import AdornedInput from '../../../components/common/AdornedInput/AdornedInput';
import './DeleteAccount.scss';

const DeleteAccount: React.FC = () => {
  const [email, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="Settings">
      <h2 className="heading">Delete Account</h2>
      <AdornedInput
        text="Password"
        value={email}
        callback={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
      />
      <AdornedInput
        text="Password"
        type="password"
        value={confirmPassword}
        callback={(e) => {
          e.preventDefault();
          setConfirmPassword(e.target.value);
        }}
      />
      <button className="button">Confirm</button>
    </div>
  );
};

export default DeleteAccount;
