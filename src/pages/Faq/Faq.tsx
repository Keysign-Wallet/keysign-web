import React from 'react';
import './Faq.scss';

import faqSvg from '../../assets/svgs/faq.svg';

const Faq: React.FC = () => (
  <div className="Faq">
    <div className="Faq__column">
      <h1>FAQ</h1>
      <p className="paragraph">
        If you’re new to Keysign, this guide will help you learn more about the platform and it’s features
      </p>
      <ul>
        <li>
          <a href="#gettingstarted">Getting started with Keysign</a>
        </li>
        <li>
          <a href="#payments">Payments on Keysign</a>
        </li>
        <li>
          <a href="#howtolink">How to link wallet</a>
        </li>
        <li>
          <a href="#problems">Blockchain Problems?</a>
        </li>
      </ul>
    </div>
    <div className="Faq__column">
      <img src={faqSvg} alt="faq-illustration" />
      <div className="Faq__content">
        <h3 id="gettingstarted">Getting started with Keysign</h3>
        <p>
          Putting Wallet keys directly into websites is not safe or secure. On some blockchains, you never have to enter
          your wallet keys into a website at all, you can just use a browser extension, which websites can interface
          with to securely store your keys and broadcast transactions to the blockchain. Keysign aims to bring security
          and ease-of-use to thenewboston platform.
        </p>
        <h3 id="payments">Payments on Keysign</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <h3 id="howtolink">How to link wallet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <h3 id="problems">Blockchain Problems?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  </div>
);

export default Faq;
