import React from 'react';

import NormalSetupForm from './NormalSetupForm';

const NormalSetupFormContainer: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  return <NormalSetupForm onToggle={onToggle} />;
};

export default NormalSetupFormContainer;
