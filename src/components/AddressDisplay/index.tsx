import React from 'react';
import AddressDisplay from './AddressDisplay';

const AddressDisplayContainer: React.FC<{ address: string }> = ({ address }) => {
  return <AddressDisplay address={address} />;
};

export default AddressDisplayContainer;
