import React from 'react';
import CopyButton from './CopyButton';

const CopyButtonContainer: React.FC<{ text: string }> = () => {
  const copyToClipboard = () => {
    // add copy logic
  };
  return <CopyButton onClick={copyToClipboard} />;
};

export default CopyButtonContainer;
