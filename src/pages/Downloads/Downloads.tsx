import React from 'react';

import logo from '../../assets/images/logo-LARGE.png';

import { ReactComponent as Phone } from '../../assets/svgs/phone1.svg';
import { ReactComponent as AppStoreBtn } from '../../assets/svgs/app-store.svg';
import { ReactComponent as PlayStoreBtn } from '../../assets/svgs/play-store.svg';

import './Downloads.scss';

const Downloads: React.FC = () => {
  return (
    <div className="Downloads">
      <section className="Downloads__section Downloads__mobile">
        <div>
          <h1 className="title text-keysign-dark-grey">Download the Keysign Mobile App for a whole new experience.</h1>
          <div className="Downloads__mobile-icons">
            <a href="/downloads">
              <AppStoreBtn />
            </a>
            <a href="/downloads">
              <PlayStoreBtn />
            </a>
          </div>
        </div>
        <Phone />
      </section>

      <section className="Downloads__section Downloads__extension">
        <div>
          <h1 className="title text-keysign-dark-grey">Browser Extension For Transaction Signing</h1>
          <span className="subtitle text-keysign-grey">
            Keysign aims to bring security and ease-of-use of Metamask to the blockchain platform, through the use of
            secure keysign browser extension, available on Chrome and Firefox.
          </span>
          <button className="button">Get Started</button>
        </div>
        <img alt="Keysign Logo" className="img" src={logo} />
      </section>
    </div>
  );
};

export default Downloads;
