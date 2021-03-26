import React from 'react';
import BrowserStorageService from '../../../services/browserStorageService';
import Transfer from './Transfer';

const TransferContainer: React.FC = () => {
  const transfer = (r: any) => {
    console.log(r);
  };
  let buttonText = 'Send';
  const keysign = BrowserStorageService.getItem('keysign');
  if (keysign && Boolean(keysign)) {
    buttonText = 'Send Via Keysign';
  }
  return <Transfer onClick={transfer} buttonText={buttonText} />;
};

export default TransferContainer;
