import type { ButtonHTMLAttributes, ReactNode } from 'react';

import style from './Button.module.css';

type ButtonVariant = 'text' | 'contained' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
}

export default function Button({
  variant = 'contained',
  size = 'medium',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [style.root, style[variant], style[size], className].filter(Boolean).join(' ');

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
