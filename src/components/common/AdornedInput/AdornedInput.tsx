import React from 'react';

import './AdornedInput.scss';

interface AdornedTextProps {
  text?: string;
  value?: string | number;
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const AdornedInput = ({ text, value, callback, placeholder, type }: AdornedTextProps) => {
  return (
    <>
      <p className="adornment-text text-keysign-grey">{text}</p>
      <input className="input" type={type} placeholder={placeholder} value={value} onChange={callback} />
    </>
  );
};

export default AdornedInput;
