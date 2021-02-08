import React from 'react';

import TabSwitch from '../../components/common/TabSwitch';

import './Signup.scss';

const Signup: React.FC = () => {
  return (
    <div className="Signup">
      Signup Component
      <TabSwitch
        tabs={[
          { div: <div className="generate">Generate Wallet Code Here</div>, title: 'Generate Wallet' },
          { div: <div className="keysign">Keysign Wallet Code Here</div>, title: 'Keysign Wallet' },
        ]}
      />
    </div>
  );
};

export default Signup;
