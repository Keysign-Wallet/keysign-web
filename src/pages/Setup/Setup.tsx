import React from 'react';

import Toggler from '../../components/common/Toggler';

import './Setup.scss';

const Setup: React.FC = () => {
  return (
    <div className="Setup">
      <div className="Setup__wrapper border-keysign-ash">
        <h1 className="heading">You’re almost done</h1>
        <p className="paragraph">Finish setting up your account</p>
        <form className="Setup__form">
          {/* <input type="text" className="input" placeholder="Username" /> */}
          <input type="text" className="input" placeholder="Email" />
        </form>
        <div className="Setup__toggler-row">
          <span className="text-keysign-dark">
            Setup 2FA<span className="text-keysign-grey"> (Optional)</span>
          </span>
          <Toggler />
        </div>
        <button className="button">Complete Setup</button>
      </div>
    </div>
  );
};

export default Setup;
