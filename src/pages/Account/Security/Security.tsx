import React, { useState } from 'react';
import AdornedInput from '../../../components/common/AdornedInput/AdornedInput';
import './Security.scss';

const Security: React.FC = () => {
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="Security">
      <h2 className="heading">Update Two-Factor Authentication</h2>
      <AdornedInput
        text="2FA Code"
        value={code}
        callback={(e) => {
          e.preventDefault();
          setCode(e.target.value);
        }}
      />
      <button className="button">Save</button>
    </div>
  );
};

export default Security;
