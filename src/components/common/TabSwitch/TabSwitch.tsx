import React, { useState } from 'react';

import './TabSwitch.scss';

type TabSwitchProps = {
  tabs: { div: JSX.Element; title: string }[];
};

const TabSwitch: React.FC<TabSwitchProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  return (
    <div className="TabSwitch">
      <div className="TabSwitch_tabs">
        {tabs.map(({ title }) => (
          <h1
            onClick={() => setActiveTab(title)}
            key={title}
            className={`${
              activeTab === title
                ? 'TabSwitch_active-tab-btn TabSwitch_tab-btn heading text-keysign-dark border-keysign-primary'
                : 'TabSwitch_tab-btn heading text-keysign-dark border-keysign-offwhite'
            }`}
          >
            {title}
          </h1>
        ))}
      </div>
      {tabs.find((tab) => tab.title === activeTab)!.div}
    </div>
  );
};

export default TabSwitch;
