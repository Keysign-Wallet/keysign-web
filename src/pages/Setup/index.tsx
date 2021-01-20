import React, { useState } from 'react';
import Setup from './Setup';

const SetupContainer: React.FC = () => {
  const [show2fa, setShow2fa] = useState(false);
  return <Setup onToggle={() => setShow2fa(!show2fa)} show2fa={show2fa} />;

export default SetupContainer;
