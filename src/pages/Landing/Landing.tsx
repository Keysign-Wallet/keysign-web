/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import './Landing.scss';

import { getKeysign } from '../../utils/handshake';

const Landing: React.FC = () => {
  const [keysign, setKeysign] = useState({});
  useEffect(() => {
    window.addEventListener('load', () => {
      console.log(window);
      getKeysign(
              (res: any) => setKeysign(res),
              (err: any) => console.log(err)
      );
    });
    console.log(keysign);
  }, [keysign]);
  return <div className="Landing background-keysign-light text-keysign-primary">Landing Component</div>;
};

export default Landing;
