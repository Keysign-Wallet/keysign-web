import React from 'react';
import './Faq.scss';

import { ReactComponent as FaqSvg } from '../../assets/svgs/faq.svg';

const Faq: React.FC = () => (
  <div className="Faq">
    <h1 className="faq-title">FAQ</h1>
    <p className="faq-description">
      If you’re new to Keysign, this guide will help you learn more about the platform and it’s features
    </p>
    <div className="faq-nav">
      <p>If you’re new to Keysign, this guide will help you learn more about the platform and it’s features.</p>
      <ul>
        <li>
          <h2>
            <a href="#gettingstarted">Getting started with Keysign</a>
          </h2>
        </li>
        <li>
          <h2>
            <a href="#payments">Payments on Keysign</a>
          </h2>
        </li>
        <li>
          <h2>
            <a href="#howtolink">How to link wallet</a>
          </h2>
        </li>
        <li>
          <h2>
            <a href="#problems">Blockchain Problems?</a>
          </h2>
        </li>
      </ul>
    </div>
    <FaqSvg className="faq-svg" />
    <div className="faq-content">
      <h3 id="gettingstarted">Getting started with Keysign</h3>
      <p>
        Putting Wallet keys directly into websites is not safe or secure. On some blockchains, you never have to enter
        your wallet keys into a website at all, you can just use a browser extension, which websites can interface with
        to securely store your keys and broadcast transactions to the blockchain. Keysign aims to bring security and
        ease-of-use to thenewboston platform.
      </p>
      <h3 id="payments">Payments on Keysign</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <h3 id="howtolink">How to link wallet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <h3 id="problems">Blockchain Problems?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </div>
  </div>
);

export default Faq;
