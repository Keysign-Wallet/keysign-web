import React from 'react';
import CopyButton from '../common/CopyButton';
import { shortenString } from '../../utils/helpers';
import './AddressDisplay.scss';

const AddressDisplay: React.FC<{ address: string; inputRef: React.RefObject<HTMLInputElement> }> = ({
  address,
  inputRef,
}) => (
  <div className="AddressDisplay">
    <div>{shortenString(4, 6, address)}</div>
    <div className="strip-input">
      <input value={address} ref={inputRef} />
    </div>
    <div className="AddressDisplay__buttons">
      <CopyButton name="Address" inputRef={inputRef} />
    </div>
  </div>
);

export default AddressDisplay;
