import { forwardRef, LabelHTMLAttributes } from 'react';

import style from './Label.module.css';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  text?: string;
  disabled?: boolean;
  error?: boolean;
}
const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, text, children, disabled, error, className, ...rest }, ref) => {
    const classes = [style.root, className, disabled && style.disabled, error && style.error]
      .filter(Boolean)
      .join(' ');
    return (
      <label
        ref={ref}
        className={classes}
        htmlFor={htmlFor}
        aria-disabled={disabled || undefined}
        data-error={error ? 'true' : undefined}
        {...rest}
      >
        {text}
        {children}
      </label>
    );
  },
);
Label.displayName = 'Label';
export default Label;
