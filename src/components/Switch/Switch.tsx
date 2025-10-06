import type { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react';

import style from './Switch.module.css';

interface SwitchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'checked' | 'onChange' | 'disabled'
  > {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

export default function Switch({
  checked = false,
  onChange,
  disabled = false,
  className,
  children,
  ...rest
}: SwitchProps) {
  const classes = [style.root, className].join(' ');
  return (
    <label className={classes}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest} />
      <span>{children}</span>
    </label>
  );
}
