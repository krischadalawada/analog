import React, { useState } from 'react';
import Modal from 'react-modal';

const ImagePopup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      
      <img className="popup-image" src="assets/images/popup/popupimg.png" alt="Astra Popup Image" />
              
      <p onClick={() => closeModal()} className='modal_close pointer'>Hide</p>
    </Modal>
  );
};

export default ImagePopup;