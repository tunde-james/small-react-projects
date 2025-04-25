import { useState } from 'react';
import Modal from './modal';
import './styles.css';

const ModalParent = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          id={'custom-id'}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default ModalParent;
