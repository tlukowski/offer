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
    console.log(value.length);
  }

  return (
    <div className={`group ${inputIsValid === true ? 'active' : 'invalid'}`}>
      <div className="mb-4 flex">
        <p className="text-lg/6">{question}</p>
        {modal && <button>xd</button>}
      </div>
      <input
        className="w-full border-2 border-white bg-transparent p-2 focus:outline-none group-[.invalid]:border-red-500"
        onChange={(e) => isValid(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default FormInput;
