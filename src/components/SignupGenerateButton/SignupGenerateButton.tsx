import React, { useState } from 'react';

import './SignupGenerateButton.scss';
import { createAccount } from '../../utils/tnb';
import Expandable from '../common/Expandable';

const SignupGenerateButton = () => {
  const [showGenerate, setShowGenerate] = useState(false);
  const account = createAccount();
  return (
    <div className="SignupGenerateButton">
      {!showGenerate && (
        <button className="button SignupGenerateButton_button" onClick={() => setShowGenerate(!showGenerate)}>
          Generate Wallet
        </button>
      )}
      <Expandable open={showGenerate} className="SignupGenerateButton_Expandable">
        <form className="LoginForm__form">
          <input type="text" className="input" value={account.accountNumberHex} />
          <input type="text" className="input" value={account.signingKeyHex} />
        </form>
        <p className="paragraph text-keysign-grey">
          Please copy your keys somewhere safe, if you lose these keys they cannot be recovered.
        </p>
        <button className="button SignupGenerateButton_Expandable_DownloadButton">Download Keys</button>
        <button
          onClick={() => setShowGenerate(!showGenerate)}
          className="button SignupGenerateButton_Expandable_DoneButton text-keysign-primary background-keysign-light"
        >
          Done
        </button>
      </Expandable>
    </div>
  );
};

export default SignupGenerateButton;
