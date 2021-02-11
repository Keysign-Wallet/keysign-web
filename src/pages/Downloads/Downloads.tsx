import React from 'react';

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
    </div>
  );
};

export default Downloads;
