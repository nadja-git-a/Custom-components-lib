import { InputHTMLAttributes } from 'react';

import style from './TextField.module.css';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  helperText: string;
  error?: boolean;
}

export default function TextField({
  error = false,
  helperText,
  className,
  ...rest
}: TextFieldProps) {
  const classes = [style.root, className, error ? style.error : null].filter(Boolean).join(' ');
  return (
    <div>
      {helperText && (
        <span className={error ? style.error : style.helper}>{error ? 'Error' : helperText}</span>
      )}
      <input className={classes} aria-invalid={error || undefined} {...rest} />
    </div>
  );
}
