import { InputHTMLAttributes, ReactNode, useId, useRef, useState } from 'react';
import React from 'react';

import style from './Checkbox.module.css';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  children?: ReactNode;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  checked,
  defaultChecked = false,
  className,
  children,
  onChange,
  id,
  ...rest
}: CheckboxProps) {
  const [clickChecked, setClickChecked] = useState(defaultChecked);

  const isControlledRef = useRef(checked !== undefined);
  const isControlled = isControlledRef.current;

  const autoId = useId();
  const inputId = id ?? autoId;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!isControlled) {
      setClickChecked(e.target.checked);
    }
    onChange?.(e);
  }

  const finalChecked = isControlled ? checked : clickChecked;

  const classes = [style.root, className].filter(Boolean).join(' ');

  return (
    <label className={classes} htmlFor={inputId}>
      <input
        id={inputId}
        type="checkbox"
        checked={finalChecked}
        onChange={handleChange}
        className={style.input}
        {...rest}
      />
      {children && <span className={style.label}>{children}</span>}
    </label>
  );
}
