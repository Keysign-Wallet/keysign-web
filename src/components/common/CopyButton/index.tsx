import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotification } from '../../../redux/Dashboard/actionCreators';
import CopyButton from './CopyButton';

const CopyButtonContainer: React.FC<{ text: string; name?: string }> = ({ name }) => {
  const dispatch = useDispatch();
  const copyToClipboard = (e: React.MouseEvent) => {
    // add copy logic
    e.preventDefault();
    e.stopPropagation();
    dispatch(addNotification(`Copied ${name ? `${name} ` : ''}to Clipboard.`));
  };
  return <CopyButton onClick={copyToClipboard} />;
};

export default CopyButtonContainer;
