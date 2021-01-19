import React from 'react';

import NormalSetupForm from '../../components/NormalSetupForm';
import Setup2faForm from '../../components/Setup2faForm';
import Expandable from '../../components/common/Expandable';

import './Setup.scss';

import left from '../../assets/images/left-frame.png';
import right from '../../assets/images/right-frame.png';

const Setup: React.FC<{ onToggle: () => void; show2fa: boolean }> = ({ onToggle, show2fa }) => {
  return (
    <div className="Setup">
      <img src={left} alt="left" className="Setup__top-left" />
      <img src={right} alt="right" className="Setup__bottom-right" />
      <div className="Setup__wrapper border-keysign-ash">
        <NormalSetupForm onToggle={onToggle} />
        <Expandable open={show2fa}>
          <Setup2faForm />
        </Expandable>
        <button className="button Setup__button">Complete Setup</button>
      </div>
    </div>
  );
};

export default Setup;
