import React from 'react';
import { Link } from 'react-router-dom';
import { URLS } from '../../constants';

import TabSwitch from '../common/TabSwitch';

import './SignupForm.scss';

const GenerateTab = (
  <div className="SignupForm_GenerateTab">
    <button className="button SignupForm_GenerateTab_button">Generate Wallet</button>
  </div>
);
const KeysignTab = <div className="SignupForm_KeysignTab">Keysign Wallet Code Here</div>;

const SignupForm: React.FC = () => {
  return (
    <div className="SignupForm">
      <h1 className="heading text-keysign-dark">Signup</h1>
      <p className="paragraph text-keysign-grey">Welcome To Keysign</p>
      <TabSwitch
        tabs={[
          { div: GenerateTab, title: 'Generate Wallet' },
          { div: KeysignTab, title: 'Keysign Wallet' },
        ]}
      />
      <p className="paragraph text-keysign-grey">
        Already a member?{' '}
        <Link to={URLS.login} className="text-keysign-primary">
          Login To Your Wallet
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
