import React from 'react';
import BrowserStorageService from '../../../services/browserStorageService';
import useTransfer from './hooks/useTransfer';
import Transfer from './Transfer';
import { TranseferData } from './types';

const TransferContainer: React.FC = () => {
  let buttonText = 'Send';
  const keysign = BrowserStorageService.getItem('keysign');
  if (keysign && keysign === 'true') {
    buttonText = 'Send Via Keysign';
  }
  const { transferCoins, requesting } = useTransfer();
  const transfer = (data: TranseferData) => {
    transferCoins(data.accountNumber, data.amount, keysign && keysign === 'true');
  };
  return <Transfer loading={requesting} onClick={transfer} buttonText={buttonText} />;
};

export default TransferContainer;
