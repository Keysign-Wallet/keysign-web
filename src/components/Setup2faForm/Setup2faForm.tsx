import React from 'react';
import { Link } from 'react-router-dom';
import { URLS } from '../../constants';

import Barcode from '../common/Barcode';

import './Setup2faForm.scss';

const Setup2faForm = () => {
  return (
    <div className="Setup2fa">
      <h1 className="heading text-keysign-dark">Google Authentication</h1>
      <p className="paragraph text-keysign-grey">
        1. Open Google and scan your QR code Don’t have Google Auth?{' '}
        <Link to={URLS.downloads} className="text-keysign-primary">
          Download
        </Link>
      </p>
      <div className="Setup2fa__barcode">
        <Barcode />
      </div>
      <p className="paragraph text-keysign-grey">2 Enter your 2FA code</p>
      <div className="Setup2fa__inputs-row text-keysign-dark">
        <input type="number" className="input" />
        <input type="number" className="input" />
        <input type="number" className="input" />
        <input type="number" className="input" />
        <input type="number" className="input" />
        <input type="number" className="input" />
      </div>
    </div>
  );
};

export default Setup2faForm;