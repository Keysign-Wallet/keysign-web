import React from 'react';
import './KsLoginForm.scss';

const KsLoginForm: React.FC = () => (
  <div className="KsLoginForm">
    <h1 className="text-keysign-dark">Keysign Login</h1>
    <p>
      Here, goes the if statement to detect if keysign is active. If keysign if active show input and button else add
      text please install keysign extension.
    </p>
  </div>
);

export default KsLoginForm;
