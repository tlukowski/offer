import React, { useState } from 'react';
import ColorPickerModal from '../modal/colorPickerModal';

const ColorPickerButton = () => {
  const [toggleModal, showModal] = useState(false);
  const handleButtonClick = () => {
    showModal(true);
  };
  return (
    <>
      <div className="text-center">
        <button
          onClick={handleButtonClick}
          className="btn border border-white px-4 py-2 text-sm transition-colors duration-300 hover:bg-primaryPurple"
        >
          Paleta kolorów
        </button>
      </div>
      <ColorPickerModal
        title={'Wybierz 3 kolory dla twojej strony'}
        show={toggleModal}
        onClick={showModal}
      ></ColorPickerModal>
    </>
  );
};

export { ColorPickerButton };
