import React, { useEffect, useRef } from "react";
import "./style.css"; // Add styles as necessary

interface AccessibleAlertProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const AlertModal: React.FC<AccessibleAlertProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap: when the modal is open, focus remains inside the dialog
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  // Handle ESC key to close the modal
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="modal-content" ref={dialogRef}>
        <h2 id="modal-title">{title}</h2>
        <p id="modal-description">{message}</p>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close alert dialog"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
