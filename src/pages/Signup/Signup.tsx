import React from 'react';
import { Link } from 'react-router-dom';
import { URLS } from '../../constants';

import TabSwitch from '../../components/common/TabSwitch';
import SignupGenerateButton from '../../components/SignupGenerateButton';
import './Signup.scss';
import left from '../../assets/images/left-frame.png';
import right from '../../assets/images/right-frame.png';

const KeysignTab = <div className="Form_KeysignTab">Keysign Wallet Code Here</div>;

const Signup: React.FC = () => {
  return (
    <div className="Signup">
      <img src={left} alt="left" className="Signup__top-left" />
      <img src={right} alt="right" className="Signup__bottom-right" />
      <div className="Signup__wrapper border-keysign-offwhite-i">
        <h1 className="heading text-keysign-dark">Signup</h1>
        <p className="paragraph text-keysign-grey">Welcome To Keysign</p>
        <TabSwitch
          tabs={[
            { div: <SignupGenerateButton />, title: 'Generate Wallet' },
            { div: KeysignTab, title: 'Keysign Wallet' },
          ]}
        />
        <p className="paragraph text-keysign-grey Form_loginprompt">
          Already a member?{' '}
          <Link to={URLS.login} className="text-keysign-primary Form_loginprompt_link">
            Login To Your Wallet
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
