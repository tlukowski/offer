import React, { useState } from 'react';
import FormInput from './formInput';
import Button from '../button/button';
import { FormStepper } from './formStepper';
import SubmitButton from '../button/submitButton';
interface CheckboxAnswer {
  answer: string;
}

type FormProps = {
  question: string;
  modal?: {
    title: string;
    desc: string;
  };
  formType: 'input' | 'checkbox' | 'textarea' | 'colorPicker' | 'fileUpload';
  checkboxAnswers?: CheckboxAnswer[] | undefined;
};

const Form: React.FC<{
  data: FormProps[];
  index: number;
  formIndex: number;
  formsLength: number;
  onValidation: (isValid: boolean) => void;
  onSubmit: (isValid: boolean) => void;
}> = ({ data, index, onValidation, formIndex, formsLength, onSubmit }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputs, setInputs] = useState(
    data.map(() => ({ isValid: false, value: '' }))
  );
  const handleInputValidation = (index: number, isValid: boolean) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index].isValid = isValid;
      if (index === activeIndex && isValid && activeIndex < data.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
      return newInputs;
    });
  };

  return (
    <>
      {formIndex === index ? (
        <div className="relative py-4 text-xl">
          <FormStepper stepCounter={data.length} activeIndex={activeIndex} />
          {data.slice(0, activeIndex + 1).map((input, index) => (
            <FormInput
              key={index}
              index={index}
              question={input.question}
              modal={input.modal}
              formType={input.formType}
              checkboxAnswers={input.checkboxAnswers}
              onValidation={(isValid) => handleInputValidation(index, isValid)}
            />
          ))}
          {formsLength !== formIndex + 1 && activeIndex + 1 === data.length && (
            <Button onClick={() => onValidation(true)}>Dalej</Button>
          )}
          {formsLength === formIndex + 1 && activeIndex + 1 === data.length && (
            <SubmitButton onClick={() => onSubmit(true)}>
              Zatwierdź
            </SubmitButton>
          )}
        </div>
      ) : null}
    </>
  );
};

export default Form;
