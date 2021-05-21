import React from 'react';
import { ReactComponent as Keysign } from '../../../assets/svgs/keysign.svg';
import './Loader.scss';

const Loader: React.FC = ({ children }) => (
  <div className="Loader">
    <div>
      <Keysign />
      <div className="Loader__caption">{children}</div>
    </div>
  </div>
);

export default Loader;
