import React from 'react';

import './Barcode.scss';

import barcode from '../../../assets/images/barcode.png';

const Barcode = () => {
  return (
    <div className="Barcode">
      <img src={barcode} alt="barcode" />
    </div>
  );
};

export default Barcode;