import React, { useState } from 'react';

interface FormInputProps {
  question: string;
  modal?: {
    title: string;
    desc: string;
  };
}

const FormInput: React.FC<FormInputProps> = ({ question, modal }) => {
  let [inputIsValid, setIsValid] = useState(false);
  function isValid(value: string) {
    value.length >= 3 ? setIsValid(true) : setIsValid(false);
    console.log(inputIsValid);
  }

  return (
    <div className={inputIsValid === true ? 'active' : 'input_invalid'}>
      <p>{question}</p>
      {modal && <button>Siema</button>}

      <input onChange={(e) => isValid(e.target.value)} type="text" />
    </div>
  );
};

export default FormInput;
