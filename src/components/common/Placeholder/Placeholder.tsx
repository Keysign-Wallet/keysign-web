import React from 'react';
import { mergeClasses } from '../../../utils/helpers';
import './Placeholder.scss';

const Placeholder: React.FC<{ className?: string }> = ({ className }) => (
  <div className={mergeClasses(className || '', 'TablePlaceHolder')} />
);

export default Placeholder;
