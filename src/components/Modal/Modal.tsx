import {
  type DialogHTMLAttributes,
  forwardRef,
  type MouseEvent,
  type PropsWithChildren,
  useEffect,
  useRef,
} from 'react';

import style from './Modal.module.css';
import Button from '../Button/Button';

interface ModalProps
  extends Omit<DialogHTMLAttributes<HTMLDialogElement>, 'onClose' | 'open'>,
    PropsWithChildren {
  open: boolean;
  onClose: () => void;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      open,
      onClose,
      children,
      className,
      closeOnBackdropClick = true,
      closeOnEscape = true,
      showCloseButton = true,
      ...props
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const classes = [style.root, className].filter(Boolean).join(' ');

    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (open) {
        dialog.showModal();

        const focusableElements = dialog.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key !== 'Tab') return;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        };

        const handleEscape = (e: KeyboardEvent) => {
          if (closeOnEscape && e.key === 'Escape') {
            onClose();
          }
        };

        dialog.addEventListener('keydown', handleTabKey);
        document.addEventListener('keydown', handleEscape);

        firstElement?.focus();

        return () => {
          dialog.removeEventListener('keydown', handleTabKey);
          document.removeEventListener('keydown', handleEscape);
        };
      } else {
        dialog.close();
      }
    }, [open, onClose, closeOnEscape]);

    const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
      if (closeOnBackdropClick && e.target === dialogRef.current) {
        onClose();
      }
    };

    return (
      <dialog
        ref={ref || dialogRef}
        className={classes}
        onClick={handleBackdropClick}
        aria-modal="true"
        {...props}
      >
        <div className={style.content}>
          {children}
          {showCloseButton && (
            <Button
              size="small"
              variant="text"
              onClick={onClose}
              className={style.closeButton}
              aria-label="Close modal"
            >
              Close
            </Button>
          )}
        </div>
      </dialog>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
