import React from 'react';
import './Table.scss';

const Table: React.FC = () => (
  <div className="Table keysign-default-border">
    <div className="Table__header">
      <h2 className="Table__heading text-keysign-primary">Add Wallet</h2>
    </div>
    <div className="Table__col-headings text-keysign-grey border-keysign-offwhite-i">
      <div>name</div>
      <div>address</div>
      <div>tnbc</div>
      <div>power</div>
      <div>usd equivalent</div>
    </div>
    <div className="Table__row border-keysign-offwhite-i text-keysign-dark-i">
      <div>Wallet One</div>
      <div>KU3e...s0bhwe</div>
      <div>14,500</div>
      <div>15,799</div>
      <div>$234,878</div>
    </div>
    <div className="Table__row border-keysign-offwhite-i text-keysign-dark-i">
      <div>Wallet One</div>
      <div>KU3e...s0bhwe</div>
      <div>14,500</div>
      <div>15,799</div>
      <div>$234,878</div>
    </div>
    <div className="Table__row border-keysign-offwhite-i text-keysign-dark-i">
      <div>Wallet One</div>
      <div>KU3e...s0bhwe</div>
      <div>14,500</div>
      <div>15,799</div>
      <div>$234,878</div>
    </div>
  </div>
);

export default Table;
