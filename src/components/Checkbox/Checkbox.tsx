import { forwardRef, InputHTMLAttributes, PropsWithChildren, useId } from 'react';
import React from 'react';

import style from './Checkbox.module.css';
import HelperText from '../HelperText/HelperText';
import Label from '../Label/Label';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    PropsWithChildren {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
  label?: string;
  helperText?: string;
  error?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked, defaultChecked = false, className, onChange, id, label, error, helperText, ...rest },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const isControlled = checked !== undefined;
    const isDisabled = !!rest.disabled;

    return (
      <div>
        <div className={style.root}>
          <Label
            aria-disabled={isDisabled ? 'true' : undefined}
            text={label}
            error={error}
            className={className}
            htmlFor={inputId}
          >
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              {...(isControlled ? { checked } : { defaultChecked })}
              aria-invalid={error || undefined}
              onChange={onChange}
              className={style.input}
              {...rest}
            />
          </Label>
          <label htmlFor={inputId} className={style.label} aria-hidden="true" />
        </div>
        <HelperText
          variant={error ? 'error' : 'default'}
          error={error}
          data-disabled={isDisabled ? 'true' : undefined}
          text={helperText}
        />
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
