import {
  type ChangeEventHandler,
  forwardRef,
  type InputHTMLAttributes,
  PropsWithChildren,
  useId,
} from 'react';

import style from './Switch.module.css';
import HelperText from '../HelperText/HelperText';
import Label from '../Label/Label';

interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'disabled'>,
    PropsWithChildren {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
  label?: string;
  helperText?: string;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked,
      label,
      defaultChecked = false,
      onChange,
      disabled = false,
      className,
      id,
      helperText,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const isControlled = checked !== undefined;

    const classes = [style.root, className].join(' ');
    return (
      <div>
        <Label
          htmlFor={inputId}
          aria-disabled={disabled ? 'true' : undefined}
          text={label}
          className={classes}
        >
          <input
            className={style.root}
            ref={ref}
            id={inputId}
            type="checkbox"
            {...(isControlled ? { checked } : { defaultChecked })}
            onChange={onChange}
            disabled={disabled}
            {...rest}
          />
          <span></span>
        </Label>
        <HelperText data-disabled={disabled ? 'true' : undefined} text={helperText} />
      </div>
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
