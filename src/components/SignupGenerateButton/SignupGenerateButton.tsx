import React, { useState } from 'react';

import './SignupGenerateButton.scss';
import Expandable from '../common/Expandable';

const SignupGenerateButton = () => {
  const [showGenerate, setShowGenerate] = useState(false);
  return (
    <div className="SignupGenerateButton">
      <button className="button SignupGenerateButton_button" onClick={() => setShowGenerate(!showGenerate)}>
        Generate Wallet
      </button>
      <Expandable open={showGenerate}>GenerateWalletForm</Expandable>
    </div>
  );
};

export default SignupGenerateButton;
