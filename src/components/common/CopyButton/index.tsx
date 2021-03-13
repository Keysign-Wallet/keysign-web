import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotification } from '../../../redux/Dashboard/actionCreators';
import CopyButton from './CopyButton';

const CopyButtonContainer: React.FC<{ name?: string; inputRef: React.RefObject<HTMLInputElement> }> = ({
  name,
  inputRef,
}) => {
  const dispatch = useDispatch();
  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    inputRef.current!.style.display = 'inline-block';
    inputRef.current?.select();
    inputRef.current?.setSelectionRange(0, 99999);
    document.execCommand('copy');
    inputRef.current!.style.display = 'none';
    dispatch(addNotification(`Copied ${name ? `${name} ` : ''}to Clipboard.`));
  };
  return <CopyButton onClick={copyToClipboard} />;
};

export default CopyButtonContainer;
