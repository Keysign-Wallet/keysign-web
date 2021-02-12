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
          <p className="SignupGenerateButton_Expandable_form_label text-keysign-grey">Account Number</p>
          <input
            type="text"
            className="input SignupGenerateButton_Expandable_form_input"
            name="SignupGenerateButton_Expandable_form_accountNumber"
            readOnly
            value={account.accountNumberHex.toUpperCase()}
          />
          <p className="SignupGenerateButton_Expandable_form_label text-keysign-grey">Signing Key</p>
          <input
            type="text"
            className="input SignupGenerateButton_Expandable_form_input"
            name="SignupGenerateButton_Expandable_form_signingKey"
            readOnly
            value={account.signingKeyHex.toUpperCase()}
          />
        </form>
        <p className="paragraph text-keysign-grey SignupGenerateButton_Expandable_keyswarning">
          Please copy your keys somewhere safe, if you lose these keys they cannot be recovered.
        </p>
        <button
          className="button SignupGenerateButton_Expandable_DownloadButton"
          onClick={() => {
            const element = document.createElement('a');
            element.href = URL.createObjectURL(new Blob([account.signingKeyHex], { type: 'text/plain;charset=utf-8' }));
            element.download = `${account.accountNumberHex}.txt`;
            document.body.appendChild(element);
            element.click();
            element.remove();
          }}
        >
          Download Keys
        </button>
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
