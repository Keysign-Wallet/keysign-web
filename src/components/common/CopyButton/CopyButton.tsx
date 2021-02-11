import React from 'react';
import copyIcon from '../../../assets/images/copyIcon.png';
import './CopyButton.scss';

const CopyButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button className="Copy__button background-keysign-pale-blue" onClick={onClick}>
    <img src={copyIcon} alt="copy icon" />
  </button>
);

export default CopyButton;
