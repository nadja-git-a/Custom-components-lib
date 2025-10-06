import { InputHTMLAttributes, ReactNode, useId } from 'react';

import style from './Checkbox.module.css';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children?: ReactNode;
}

export default function Checkbox({ className, children, id, ...rest }: CheckboxProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  const classes = [style.root, className].filter(Boolean).join(' ');

  return (
    <label className={classes} htmlFor={inputId}>
      <input id={inputId} type="checkbox" className={style.input} {...rest} />
      {children && <span className={style.label}>{children}</span>}
    </label>
  );
}
