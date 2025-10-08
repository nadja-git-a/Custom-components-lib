import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import style from './HelperText.module.css';

interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: ReactNode;
  variant?: 'default' | 'error';
}

const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ text, variant = 'default', className, ...rest }, ref) => {
    const classes = [style.helperText, className].join('');
    if (!text) return null;

    return (
      <p
        ref={ref}
        className={classes}
        aria-live={variant === 'error' ? 'polite' : undefined}
        {...rest}
      >
        {text}
      </p>
    );
  },
);

HelperText.displayName = 'HelperText';
export default HelperText;
