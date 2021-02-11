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
        <form className="SignupGenerateButton_Expandable_form">
          <input
            type="text"
            className="input SignupGenerateButton_Expandable_form_input"
            value={account.accountNumberHex.toUpperCase()}
          />
          <input
            type="text"
            className="input SignupGenerateButton_Expandable_form_input"
            value={account.signingKeyHex.toUpperCase()}
          />
        </form>
        <p className="paragraph text-keysign-grey SignupGenerateButton_Expandable_keyswarning">
          Please copy your keys somewhere safe, if you lose these keys they cannot be recovered.
        </p>
        <button className="button SignupGenerateButton_Expandable_DownloadButton">Download Keys</button>
        <button
          onClick={() => setShowGenerate(!showGenerate)}
          className="button SignupGenerateButton_Expandable_DoneButton text-keysign-primary-i background-keysign-light-i border-keysign-grey-i"
        >
          Done
        </button>
      </Expandable>
    </div>
  );
};

export default SignupGenerateButton;
