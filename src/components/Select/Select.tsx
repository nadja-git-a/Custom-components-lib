import { SelectHTMLAttributes } from 'react';

import style from './Select.module.css';

interface Options {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Options[];
}

export default function Select({ className, options, ...rest }: SelectProps) {
  const classes = [style.root, className].filter(Boolean).join(' ');

  return (
    <select className={classes} {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
