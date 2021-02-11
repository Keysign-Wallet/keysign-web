import React from 'react';
import CopyButton from '../common/CopyButton';
import { shortenString } from '../../utils/helpers';
import './AddressDisplay.scss';

const AddressDisplay: React.FC<{ address: string }> = ({ address }) => (
  <div className="AddressDisplay">
    <div>{shortenString(4, 6, address)}</div>
    <div className="AddressDisplay__buttons">
      <CopyButton text={address} />
    </div>
  </div>
);

export default AddressDisplay;
