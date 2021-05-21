import React from 'react';
import Loader from './Loader';

const LoaderContainer: React.FC = ({ children }) => {
  return <Loader>{children}</Loader>;
};

export default LoaderContainer;
