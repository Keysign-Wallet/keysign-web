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
        <button onClick={() => setActiveTab(title)} key={title}>
          {title}
        </button>
      ))}
      {tabs.find((tab) => tab.title === activeTab)!.div}
    </div>
  );
};

export default TabSwitch;
