import React, { useRef, useEffect } from 'react';
import './Dialog.css';

interface DialogProps {
  id?: string;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  id = 'dialog',
  header,
  body,
  footer,
  onClose,
  isOpen,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Save the currently focused element
    previouslyFocused.current = document.activeElement as HTMLElement;

    if (isOpen) {
      // Open the dialog
      if (dialogRef.current) {
        if (!dialogRef.current.open) {
          dialogRef.current.showModal();
        }
        // Focus the first focusable element inside the dialog
        const focusable = dialogRef.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;

        if (focusable) {
          focusable.focus();
        } else {
          // Focus the dialog itself if no focusable element is found
          dialogRef.current.focus();
        }
      }
    } else {
      // Close the dialog
      if (dialogRef.current?.open) {
        dialogRef.current.close();
      }
    }

    return () => {
      // Restore focus when component unmounts
      if (previouslyFocused.current) {
        previouslyFocused.current.focus();
      }
    };
  }, [isOpen]);

  // Handle click on backdrop (outside dialog content)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    // Only close if clicking directly on the dialog element (backdrop), not its children
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  // Handle the dialog close event (triggered by ESC key or form method="dialog")
  const handleDialogClose = () => {
    onClose();
  };

  return (
    <dialog
      id={id}
      ref={dialogRef}
      className="dialog"
      onClick={handleBackdropClick}
      onClose={handleDialogClose}
      aria-labelledby={`${id}-header`}
      aria-describedby={`${id}-body`}
    >
      <div className="dialog-content">
        <header className="dialog-header">
          <h2 id={`${id}-header`}>{header || 'Header'}</h2>
          <button
            onClick={onClose}
            className="close-dialog-button"
            aria-label="Close dialog"
            type="button"
          >
            &times;
          </button>
        </header>

        <div className="dialog-body" id={`${id}-body`}>
          {body || <p>This is our dialog body</p>}
        </div>

        <footer className="dialog-footer">
          {footer || (
            <div>
              <p>This is our dialog footer</p>
            </div>
          )}
        </footer>
      </div>
    </dialog>
  );
};

export default Dialog;
