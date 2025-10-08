import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import React from 'react';

import style from './Checkbox.module.css';
import HelperText from '../HelperText/HelperText';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  children?: ReactNode;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, defaultChecked = false, className, children, onChange, id, ...rest }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const isControlled = checked !== undefined;

    const classes = [style.root, className].filter(Boolean).join(' ');

    return (
      <>
        <label className={classes} htmlFor={inputId}>
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            {...(isControlled ? { checked } : { defaultChecked })}
            onChange={onChange}
            className={style.input}
            {...rest}
          />
          <span className={style.label} aria-hidden="true" />
          {children && <HelperText text={children} />}
        </label>
      </>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
