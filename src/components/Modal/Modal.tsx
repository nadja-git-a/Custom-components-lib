import type { DialogHTMLAttributes, ReactNode } from 'react';

import style from './Modal.module.css';
import Button from '../Button/Button';

type ModalProps = Omit<DialogHTMLAttributes<HTMLDialogElement>, 'onClose' | 'open'> & {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ open, onClose, children, className, ...props }: ModalProps) {
  const classes = [style.root, className].filter(Boolean).join(' ');

  return open ? (
    <dialog className={classes} open onClose={onClose} role="dialog" aria-modal="true" {...props}>
      <div>
        {children}
        <Button size="small" variant="text" onClick={onClose}>
          Close
        </Button>
      </div>
    </dialog>
  ) : null;
}
