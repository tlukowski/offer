import React from 'react';
type FormTextareaProps = {
  isValid: (value: string) => void;
};

function FormTextarea({ isValid }: FormTextareaProps) {
  return (
    <textarea
      className="h-48 w-full resize-none border-2 border-white bg-transparent p-4 focus:outline-none group-[.invalid]:border-red-500"
      onChange={(e) => isValid(e.target.value)}
    />
  );
}

export { FormTextarea };
