import React from 'react';

import logo from '../../assets/images/logo-LARGE.png';
import laptop from '../../assets/images/laptop.png';
import unityUnrealPlugin from '../../assets/images/unity-unreal-plugin.png';

import { ReactComponent as Phone } from '../../assets/svgs/phone1.svg';
import { ReactComponent as AppStoreBtn } from '../../assets/svgs/app-store.svg';
import { ReactComponent as PlayStoreBtn } from '../../assets/svgs/play-store.svg';
import { ReactComponent as WindowsLogo } from '../../assets/svgs/windows-logo.svg';
import { ReactComponent as AppleLogo } from '../../assets/svgs/apple-logo.svg';

import './Downloads.scss';

const Downloads: React.FC = React.memo(() => (
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

    <section className="Downloads__section Downloads__desktop">
      <div className="Downloads__desktop-1">
        <div className="Downloads__desktop-windows">
          <WindowsLogo />
          <div className="Downloads__desktop-text">
            <h2 className="text-keysign-dark-grey">Download Desktop version</h2>
            <span className="text-keysign-grey">click here...</span>
          </div>
        </div>
        <div className="Downloads__desktop-apple">
          <AppleLogo />
          <div className="Downloads__desktop-text">
            <h2 className="text-keysign-dark-grey">Download Mac version</h2>
            <span className="text-keysign-grey">click here...</span>
          </div>
        </div>
      </div>
      <img alt="Laptop computer" className="img" src={laptop} />
    </section>

    <section className="Downloads__section Downloads__plugin">
      <img alt="Unity Unreal Plugin" className="" src={unityUnrealPlugin} />
      <div>
        <h1 className="title text-keysign-dark-grey">Unity / Unreal Plugin</h1>
        <span className="subtitle text-keysign-grey">
          Keysign plugin acts as an add-on to the browser and gives the browser additional functionality. Keysign
          plugins can allow the browser to display additional content it was not originally designed to display.
        </span>
        <button className="button">Download</button>
      </div>
    </section>
  </div>
));

export default Downloads;
