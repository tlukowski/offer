import React, { useState } from 'react';
import FormInput from './formInput';
import Button from '../button/button';

type DataItem = {
  question: string;
  modal?: {
    title: string;
    desc: string;
  };
};

const Form: React.FC<{
  data: DataItem[];
  index: number;
  formIndex: number;
  formsLength: number;
  onValidation: (isValid: boolean) => void;
}> = ({ data, index, onValidation, formIndex, formsLength }) => {
  // const [isFormValid, setFormValid] = useState(0);
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputs, setInputs] = useState(data.map(() => ({ isValid: false })));
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
  {
  }
  return (
    <div className={`${formIndex === index ? '' : 'hidden'} py-4 text-xl`}>
      {data.slice(0, activeIndex + 1).map((input, index) => (
        <FormInput
          key={index}
          question={input.question}
          modal={input.modal}
          onValidation={(isValid) => handleInputValidation(index, isValid)}
        />
      ))}
      {formsLength !== formIndex + 1 && activeIndex + 1 === data.length ? (
        <Button onClick={() => onValidation(true)}>Dalej</Button>
      ) : (
        formsLength === formIndex + 1 &&
        activeIndex + 1 === data.length && (
          <Button onClick={() => onValidation(true)}>Zatwierdź</Button>
        )
      )}
    </div>
  );
};

export default Form;