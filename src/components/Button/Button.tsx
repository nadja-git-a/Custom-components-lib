import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';

import style from './Button.module.css';

type ButtonVariant = 'text' | 'contained' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
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
