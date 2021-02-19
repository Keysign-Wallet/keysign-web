import React from 'react';
import Layout from './Layout';

const LayoutContainer: React.FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default LayoutContainer;
