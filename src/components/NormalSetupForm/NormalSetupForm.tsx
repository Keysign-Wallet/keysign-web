import React from 'react';

import Toggler from '../common/Toggler';

import './NormalSetupForm.scss';

const NormalSetupForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  return (
    <div className="NormalSetupForm">
      <h1 className="heading">You’re almost done</h1>
      <p className="paragraph">Finish setting up your account</p>
      <form className="NormalSetupForm__form">
        {/* <input type="text" className="input" placeholder="Username" /> */}
        <input type="text" className="input" placeholder="Email" />
      </form>
      <div className="NormalSetupForm__toggler-row">
        <span className="text-keysign-dark">
          Setup 2FA<span className="text-keysign-grey"> (Optional)</span>
        </span>
        <Toggler onToggle={onToggle} />
      </div>
      <button className="button">Complete Setup</button>
    </div>
  );
};

export default NormalSetupForm;
