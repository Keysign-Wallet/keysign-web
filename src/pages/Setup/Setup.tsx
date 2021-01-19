import React from 'react';

import NormalSetupForm from '../../components/NormalSetupForm';
import Setup2faForm from '../../components/Setup2faForm';
import Expandable from '../../components/common/Expandable';

import './Setup.scss';

const Setup: React.FC<{ onToggle: () => void; show2fa: boolean }> = ({ onToggle, show2fa }) => {
  return (
    <div className="Setup">
      <div className="Setup__wrapper border-keysign-ash">
        <NormalSetupForm onToggle={onToggle} />
        <Expandable open={show2fa}>
          <Setup2faForm />
        </Expandable>
      </div>
    </div>
  );
};

export default Setup;
