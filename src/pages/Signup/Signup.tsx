import React from 'react';
import { Link } from 'react-router-dom';
import { URLS } from '../../constants';

import TabSwitch from '../../components/common/TabSwitch';
import SignupGenerateButton from '../../components/SignupGenerateButton';
import './Signup.scss';
import left from '../../assets/images/left-frame.png';
import right from '../../assets/images/right-frame.png';

const KeysignTab = (
  <div className="Signup_KeysignTab">
    <p className="heading text-keysign-dark Signup_KeysignTab_Heading">
      How to generate a wallet via our other products -
    </p>
    <p className="Signup_KeysignTab_Text paragraph text-keysign-grey">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam.
    </p>
    <p className="paragraph Signup_KeysignTab_List">
      {[
        { link: 'https://github.com/Keysign-Wallet/keysign', title: 'Keysign Extension Guide' },
        { link: 'https://github.com/Keysign-Wallet/keysign', title: 'Keysign App Guide' },
        { link: 'https://github.com/Keysign-Wallet/keysign', title: 'Keysign Client Guide' },
      ].map((item, index) => (
        <a href={item.link} key={index} className="Signup_KeysignTab_List-item text-keysign-primary">
          • {item.title} <br />
        </a>
      ))}
    </p>
  </div>
);

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
        <p className="paragraph text-keysign-grey Signup_loginprompt">
          Already a member?{' '}
          <Link to={URLS.login} className="text-keysign-primary Signup_loginprompt_link">
            Login To Your Wallet
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
