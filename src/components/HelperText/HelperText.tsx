import { forwardRef, type HTMLAttributes } from 'react';

import style from './HelperText.module.css';

interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  variant?: 'default' | 'error';
  disabled?: boolean;
  error?: boolean;
}

const HelperText = forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ text, variant = 'default', disabled, error, className, ...rest }, ref) => {
    const classes = [style.helperText, className, disabled && style.disabled, error && style.error]
      .filter(Boolean)
      .join(' ');
    if (!text) return null;

    return (
      <p
        ref={ref}
        className={classes}
        aria-live={variant === 'error' ? 'polite' : undefined}
        data-error={error ? 'true' : undefined}
        {...rest}
      >
        {text}
      </p>
    );
  },
);

HelperText.displayName = 'HelperText';
export default HelperText;
