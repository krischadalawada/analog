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
      <a href='https://analogeducation.in/webinar/index.html'>
      <img className="popup-image" src="assets/images/popup/popupimg.jpg" alt="Astra Popup Image" />
        </a>      
      <p onClick={() => closeModal()} className='modal_close pointer'>Hide</p>
    </Modal>
  );
};

export default ImagePopup;