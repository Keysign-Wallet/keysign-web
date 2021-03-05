import React, { useState } from 'react';
import './Account.scss';
import Settings from './subpages/Settings';

enum Page {
  SETTINGS,
  SECURITY,
  DELETE_ACCOUNT,
}

const renderSelectedPage = (page: Page) => {
  switch (page) {
    case Page.SETTINGS:
      return <Settings />
    case Page.SECURITY:
      return <p>security</p>;
    case Page.DELETE_ACCOUNT:
      return <p>delete account</p>;
    default:
      return <p>invalid page selected</p>;
  }
};

const Account: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState(Page.SETTINGS);

  return (
    <div className="Account">
      <div className="Account__column">
        <h1>Account</h1>
        <p className="paragraph">You can make changes to your account here.</p>
        <ul>
          <li onClick={() => setSelectedPage(Page.SETTINGS)}>Settings</li>
          <li onClick={() => setSelectedPage(Page.SECURITY)}>Security</li>
          <li onClick={() => setSelectedPage(Page.DELETE_ACCOUNT)}>Delete Account</li>
        </ul>
      </div>
      <div className="Account__content">{renderSelectedPage(selectedPage)}</div>
    </div>
  );
};

export default Account;
