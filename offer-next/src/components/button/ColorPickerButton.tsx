import React, { useState } from 'react';
import ColorPickerModal from '../modal/colorPickerModal';
type FormTextareaProps = {
  isValid: (value: string) => void;
};
const ColorPickerButton = ({ isValid }: FormTextareaProps) => {
  const [toggleModal, showModal] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleButtonClick = () => {
    showModal(true);
  };

  const handleColorSelection = (colors: string[]) => {
    setSelectedColors(colors);
    if (colors.length > 0) {
      isValid('valid');
    } else {
      isValid('');
    }
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
        elements={3}
        onColorSelection={handleColorSelection}
      ></ColorPickerModal>
      {selectedColors.length > 0 && (
        <div className="mt-8 text-center">
          Wybrane kolory:
          <div className="mt-4 flex justify-center gap-8">
            {selectedColors.map((color, index) => (
              <div
                key={index}
                className={`block h-16 w-16`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { ColorPickerButton };
