/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Placeholder from './Placeholder';

const PlaceholderContainer: React.FC<{ className?: string }> = ({ ...rest }) => {
  return <Placeholder {...rest} />;
};

export default PlaceholderContainer;
