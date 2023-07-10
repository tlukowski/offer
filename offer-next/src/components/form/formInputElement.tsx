import React from 'react';
type FormInputElementProps = {
  isValid: (value: string) => void;
};

function FormInputElement({ isValid }: FormInputElementProps) {
  return (
    <input
      className="w-full border-2 border-white bg-transparent px-4 py-4 focus:outline-none group-[.invalid]:border-red-500"
      onChange={(e) => isValid(e.target.value)}
      type="text"
    />
  );
}

export default FormInputElement;
