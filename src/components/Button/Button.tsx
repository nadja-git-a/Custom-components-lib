import { type ButtonHTMLAttributes, forwardRef, PropsWithChildren, type ReactNode } from 'react';

import style from './Button.module.css';

type ButtonVariant = 'text' | 'contained' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'contained', size = 'medium', className, children, ...rest }, ref) => {
    const classes = [style.root, style[variant], style[size], className].filter(Boolean).join(' ');
    return (
      <button ref={ref} {...rest} className={classes}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
