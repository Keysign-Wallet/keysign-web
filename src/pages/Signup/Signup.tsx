import React from 'react';

import SignupForm from '../../components/SignupForm';

import './Signup.scss';

import left from '../../assets/images/left-frame.png';
import right from '../../assets/images/right-frame.png';

const Signup: React.FC = () => {
  return (
    <div className="Signup">
      <img src={left} alt="left" className="Signup__top-left" />
      <img src={right} alt="right" className="Signup__bottom-right" />
      <div className="Signup__wrapper border-keysign-offwhite-i">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
