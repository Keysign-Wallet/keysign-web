import React from 'react';

import TabSwitch from './TabSwitch';

type TabSwitchContainerProps = {
  tabs: { div: JSX.Element; title: string }[];
};

const TabSwitchContainer: React.FC<TabSwitchContainerProps> = ({ tabs }) => {
  return <TabSwitch tabs={tabs} />;
};

export default TabSwitchContainer;
