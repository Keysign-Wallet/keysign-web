import React, { useState } from 'react';

import './TabSwitch.scss';

type TabSwitchProps = {
  tabs: { div: JSX.Element; title: string }[];
};

const TabSwitch: React.FC<TabSwitchProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  return (
    <div className="TabSwitch">
      {tabs.map(({ title }) => (
        <p
          onClick={() => setActiveTab(title)}
          key={title}
          className={`${activeTab === title ? 'active-tab-btn tab-btn' : 'tab-btn'}`}
        >
          {title}
        </p>
      ))}
      {tabs.find((tab) => tab.title === activeTab)!.div}
    </div>
  );
};

export default TabSwitch;
