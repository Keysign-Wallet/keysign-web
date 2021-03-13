import React from 'react';

import './Footer.scss';

import logo from '../../assets/svgs/keysign-logo-white.svg';
import facebookIcon from '../../assets/svgs/facebook-icon.svg';
import instagramIcon from '../../assets/svgs/instagram-icon.svg';
import twitterIcon from '../../assets/svgs/twitter-icon.svg';
import youtubeIcon from '../../assets/svgs/youtube-icon.svg';
import sendPlaneIcon from '../../assets/svgs/sent-plane.svg';

const Footer: React.FC = () => {
  return (
    <div className="Footer background-keysign-primary">
      <div className="Footer__info">
        <img src={logo} alt="logo" />
        <h1 className="heading Footer__logo">Keysign</h1>
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
      <div className="Footer__col">
        <h1 className="heading Footer__col-heading">Keysign</h1>
        <ul>
          <li className="Footer__col__link">About Us</li>
          <li className="Footer__col__link">FAQ</li>
          <li className="Footer__col__link">Documentation</li>
        </ul>
      </div>
      <div className="Footer__col">
        <h1 className="heading Footer__col-heading">Legal</h1>
        <ul>
          <li className="Footer__col__link">Contact Us</li>
          <li className="Footer__col__link">Terms of Service</li>
          <li className="Footer__col__link">Privacy Policy</li>
        </ul>
      </div>
      <div className="Footer__contact">
        <h1 className="heading Footer__col-heading">Stay up to Date</h1>
        <input type="email" className="Footer__contact__input" placeholder="Your email address" />
        <button className="Footer__contact__submit">
          <img src={sendPlaneIcon} alt="submit icon" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
