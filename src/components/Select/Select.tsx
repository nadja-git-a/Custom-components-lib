import { forwardRef, PropsWithChildren, SelectHTMLAttributes, useId } from 'react';

import style from './Select.module.css';
import HelperText from '../HelperText/HelperText';
import Label from '../Label/Label';

type Variant = 'text' | 'contained' | 'outlined';

interface Options {
  label: string;
  value: string | number;
}

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'>,
    PropsWithChildren {
  options: Options[];
  variant?: Variant;
  label?: string;
  helperText?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, variant = 'text', id, label, helperText, ...rest }, ref) => {
    const classes = [style.root, style[variant], className].filter(Boolean).join(' ');
    const autoId = useId();
    const inputId = id ?? autoId;
    const isDisabled = !!rest.disabled;

    return (
      <Label aria-disabled={isDisabled ? 'true' : undefined} text={label} htmlFor={inputId}>
        <select ref={ref} className={classes} id={inputId} {...rest}>
          {options.map((option) => (
            <option key={String(option.value)} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <HelperText data-disabled={isDisabled ? 'true' : undefined} text={helperText}></HelperText>
      </Label>
    );
  },
);

Select.displayName = 'Select';

export default Select;
