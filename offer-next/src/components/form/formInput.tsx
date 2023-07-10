import React, { useState } from 'react';
import Modal from '../modal/modal';
import ModalButton from '../modal/modalButton';
import FormInputElement from './formInputElement';
import { FormInputRadio } from './formRadio';
import { FormTextarea } from './formTextarea';
import { ColorPicker } from './colorpicker';
import { ColorPickerButton } from '../button/ColorPickerButton';
import { HexColorInput } from 'react-colorful';
HexColorInput;
interface CheckboxAnswer {
  answer: string;
}
interface FormInputProps {
  question: string;
  modal?: {
    title: string;
    desc: string;
  };
  formType: string;
  checkboxAnswers: CheckboxAnswer[] | undefined;
  onValidation: (isValid: boolean) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  question,
  modal,
  onValidation,
  formType,
  checkboxAnswers,
}) => {
  // TODO - rewrite it
  const [inputIsValid, setIsValid] = useState(true);
  // state for modal toggle
  const [toggleModal, showModal] = useState(false);

  // if input has 3 or more letter/numbers set valid.
  function isValid(value: string) {
    const isValid = value.length >= 3;
    setIsValid(isValid);
    onValidation && onValidation(isValid);
  }
  const chooseInput = (formType: string) => {
    switch (formType) {
      case 'input':
        return <FormInputElement isValid={isValid} />;
      case 'checkbox':
        return (
          <FormInputRadio checkboxAnswers={checkboxAnswers} isValid={isValid} />
        );
      case 'textarea':
        return <FormTextarea isValid={isValid} />;
      case 'colorPicker':
        return (
          <>
            <ColorPickerButton isValid={isValid} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={`mb-6 ${inputIsValid ? '' : 'invalid'}`}>
        <div className="mb-4 flex justify-between">
          <p className="mr-4 text-lg/6">{question}</p>
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
        {chooseInput(formType)}
      </div>
    </>
  );
};

export default FormInput;
