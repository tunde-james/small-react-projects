import React, { useState } from 'react';
import Dialog from './dialog';

const DialogParent: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="dialog-container">
      <button
        onClick={handleOpenDialog}
        className="open-dialog-button"
        aria-haspopup="dialog"
      >
        Open Dialog
      </button>

      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        body={<div>Customized body content</div>}
      />
    </div>
  );
};

export default DialogParent;
