import React from 'react';
import copyIcon from '../../../assets/images/copyIcon.png';
import './CopyButton.scss';

const CopyButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button className="CopyButton small-action-button" onClick={onClick}>
    <img src={copyIcon} alt="copy icon" />
  </button>
);

export default CopyButton;
