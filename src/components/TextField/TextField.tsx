import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import style from './TextField.module.css';
import HelperText from '../HelperText/HelperText';

type Variant = 'text' | 'contained' | 'outlined';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: Variant;
  children?: ReactNode;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error = false, variant = 'outlined', children, className, ...rest }, ref) => {
    const classes = [style.root, style[variant], className, error ? style.error : null]
      .filter(Boolean)
      .join(' ');
    return (
      <div>
        <HelperText text={children}></HelperText>
        <input ref={ref} className={classes} aria-invalid={error || undefined} {...rest} />
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
