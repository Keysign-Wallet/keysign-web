import React, { useState } from 'react';
import { FormikHelpers } from 'formik';
import BrowserStorageService from '../../../services/browserStorageService';
import useTransfer from './hooks/useTransfer';
import Transfer from './Transfer';
import { TranseferData } from './types';

const TransferContainer: React.FC = () => {
  const [message, setMessage] = useState<JSX.Element | null>(null);
  let buttonText = 'Send';
  const keysign = BrowserStorageService.getItem('keysign');
  if (keysign && keysign === 'true') {
    buttonText = 'Send Via Keysign';
  }
  const { transferCoins, requesting, success } = useTransfer();
  const onBlur = () => {
    if (message) {
      setMessage(null);
    }
  };
  const transfer = (data: TranseferData, helpers: FormikHelpers<TranseferData>) => {
    transferCoins(data.accountNumber, data.amount, keysign && keysign === 'true').then(() => {
      helpers.resetForm();
      if (!success) {
        setMessage(<p className="Transfer__message Transfer__failed">Failed to transfer coins</p>);
      } else {
        setMessage(<p className="Transfer__message Transfer__success">Successfully transfered coins</p>);
      }
      // clear err obj
    });
  };
  return <Transfer loading={requesting} onClick={transfer} buttonText={buttonText} message={message} onBlur={onBlur} />;
};

export default TransferContainer;
