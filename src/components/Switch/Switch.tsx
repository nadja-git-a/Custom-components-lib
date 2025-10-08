import {
  type ChangeEventHandler,
  forwardRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';

import style from './Switch.module.css';
import HelperText from '../HelperText/HelperText';

interface SwitchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'checked' | 'onChange' | 'disabled'
  > {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    { checked, defaultChecked = false, onChange, disabled = false, className, children, ...rest },
    ref,
  ) => {
    const isControlled = checked !== undefined;
    const classes = [style.root, className].join(' ');
    return (
      <label className={classes}>
        <input
          ref={ref}
          type="checkbox"
          {...(isControlled ? { checked } : { defaultChecked })}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <span></span>
        <HelperText text={children} />
      </label>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
