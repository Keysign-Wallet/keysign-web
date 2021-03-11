import React from 'react';

import './Footer.scss';

import logo from '../../assets/svgs/keysign-logo-white.svg';
import facebookIcon from '../../assets/svgs/facebook-icon.svg';
import instagramIcon from '../../assets/svgs/instagram-icon.svg';
import twitterIcon from '../../assets/svgs/twitter-icon.svg';
import youtubeIcon from '../../assets/svgs/youtube-icon.svg';

const Footer: React.FC = () => {
  return (
    <div className="Footer background-keysign-primary">
      <div className="Footer__row-1">
        <img src={logo} alt="logo" className="Footer__logo" />
        <h1 className="heading Footer__heading">Keysign</h1>
        <p className="Footer__copyright">
          Copyright © 2021 Keysign
          <br />
          <br />
          All rights reserved
        </p>
        <div className="Footer__icons">
          <img src={facebookIcon} alt="Facebook Icon" className="Footer__icons-icon" />
          <img src={instagramIcon} alt="Instagram Icon" className="Footer__icons-icon" />
          <img src={twitterIcon} alt="Twitter Icon" className="Footer__icons-icon" />
          <img src={youtubeIcon} alt="Youtube Icon" className="Footer__icons-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
