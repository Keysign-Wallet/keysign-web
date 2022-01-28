import React from 'react';
import { ReactComponent as Loader } from '../../../assets/svgs/loader.svg';
import { mergeClasses } from '../../../utils/helpers';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, loading, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <button className={mergeClasses(className || '', 'button')} disabled={loading} {...rest}>
    {loading ? <Loader /> : children}
  </button>
);

export default Button;
