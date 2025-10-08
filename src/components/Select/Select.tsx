import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';

import style from './Select.module.css';
import HelperText from '../HelperText/HelperText';

type Variant = 'text' | 'contained' | 'outlined';

interface Options {
  label: string;
  value: string | number;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  options: Options[];
  variant?: Variant;
  children?: ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, variant = 'text', children, ...rest }, ref) => {
    const classes = [style.root, style[variant], className].filter(Boolean).join(' ');

    return (
      <div>
        <HelperText text={children}></HelperText>
        <select ref={ref} className={classes} {...rest}>
          {options.map((option) => (
            <option key={String(option.value)} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

Select.displayName = 'Select';

export default Select;
