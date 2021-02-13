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
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SignupGenerateButton_Expandable_keyswarning_svg"
          >
            <path
              d="M17.666 14.7188L9.54102 0.65625C9.41993 0.447266 9.21094 0.34375 9.00001 0.34375C8.78907 0.34375 8.57813 0.447266 8.45899 0.65625L0.333991 14.7188C0.0937567 15.1367 0.394538 15.6562 0.875006 15.6562H17.125C17.6055 15.6562 17.9063 15.1367 17.666 14.7188ZM8.37501 6.125C8.37501 6.03906 8.44532 5.96875 8.53126 5.96875H9.46876C9.55469 5.96875 9.62501 6.03906 9.62501 6.125V9.71875C9.62501 9.80469 9.55469 9.875 9.46876 9.875H8.53126C8.44532 9.875 8.37501 9.80469 8.37501 9.71875V6.125ZM9.00001 13C8.75468 12.995 8.52109 12.894 8.34936 12.7188C8.17763 12.5435 8.08145 12.3079 8.08145 12.0625C8.08145 11.8171 8.17763 11.5815 8.34936 11.4062C8.52109 11.231 8.75468 11.13 9.00001 11.125C9.24533 11.13 9.47892 11.231 9.65065 11.4062C9.82238 11.5815 9.91856 11.8171 9.91856 12.0625C9.91856 12.3079 9.82238 12.5435 9.65065 12.7188C9.47892 12.894 9.24533 12.995 9.00001 13Z"
              fill="#C51E26"
            />
          </svg>
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
          <svg
            className="SignupGenerateButton_Expandable_DownloadButton_svg"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 8.25H13.75V0.75H6.25V8.25H1.25L10 18.25L18.75 8.25ZM0 20.75H20V23.25H0V20.75Z"
              fill="white"
            />
          </svg>
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
