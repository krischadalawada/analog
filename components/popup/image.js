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
      <a href='https://astra.analogeducation.in/ofl-civils-prep-with-astra?utm_source=Analog_Website&utm_medium=Online&utm_campaign=Astra'>
        <img className="popup-image" src="assets/images/popup/popupimg.jpg" alt="Astra Popup Image" />
      </a>
      <p onClick={() => closeModal()} className='modal_close pointer'>Hide</p>
    </Modal>
  );
};

export default ImagePopup;