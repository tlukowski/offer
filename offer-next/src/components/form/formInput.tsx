import React, { useState } from 'react';
import Modal from '../modal/modal';
import ModalButton from '../modal/modalButton';
interface FormInputProps {
  question: string;
  modal?: {
    title: string;
    desc: string;
  };
  show?: boolean;
  onValidation: (isValid: boolean) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  question,
  modal,
  onValidation,
}) => {
  const [inputIsValid, setIsValid] = useState(true);
  const [toggleModal, showModal] = useState(false);
  function isValid(value: string) {
    const isValid = value.length >= 3;
    setIsValid(isValid);
    if (onValidation) {
      onValidation(isValid);
    }
  }
  return (
    <>
      <div className={`group mb-4 ${inputIsValid ? '' : 'invalid'}`}>
        <div className="mb-4 flex justify-between">
          <p className="text-lg/6">{question}</p>
          {modal && (
            <>
              <ModalButton onClick={showModal}></ModalButton>
              <Modal
                title={modal.title}
                desc={modal.desc}
                show={toggleModal}
                onClick={showModal}
              ></Modal>
            </>
          )}
        </div>
        <input
          className="w-full border-2 border-white bg-transparent p-2 focus:outline-none group-[.invalid]:border-red-500"
          onChange={(e) => isValid(e.target.value)}
          type="text"
        />
      </div>
    </>
  );
};

export default FormInput;
