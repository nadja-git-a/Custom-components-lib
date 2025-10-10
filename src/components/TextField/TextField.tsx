import { forwardRef, InputHTMLAttributes, PropsWithChildren, useId } from 'react';

import style from './TextField.module.css';
import HelperText from '../HelperText/HelperText';
import Label from '../Label/Label';

type Variant = 'text' | 'contained' | 'outlined';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>, PropsWithChildren {
  error?: boolean;
  variant?: Variant;
  label?: string;
  helperText?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ error = false, variant = 'outlined', helperText, className, label, id, ...rest }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const isDisabled = !!rest.disabled;

    const classes = [style.root, style[variant], className, error ? style.error : null]
      .filter(Boolean)
      .join(' ');
    return (
      <Label
        aria-disabled={isDisabled ? 'true' : undefined}
        error={error}
        text={label}
        htmlFor={inputId}
      >
        <input
          ref={ref}
          className={classes}
          id={inputId}
          aria-invalid={error || undefined}
          {...rest}
        />
        <HelperText
          data-disabled={isDisabled ? 'true' : undefined}
          error={error}
          text={helperText}
        ></HelperText>
      </Label>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
