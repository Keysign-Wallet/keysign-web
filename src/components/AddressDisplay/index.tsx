import React, { useRef } from 'react';
import AddressDisplay from './AddressDisplay';

const AddressDisplayContainer: React.FC<{ address: string }> = ({ address }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return <AddressDisplay address={address} inputRef={inputRef} />;
};

export default AddressDisplayContainer;
