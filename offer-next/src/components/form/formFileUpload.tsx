import React from 'react';
type FormTextareaProps = {
  isValid: (value: string) => void;
};

function FormFileUpload({ isValid }: FormTextareaProps) {
  return (
    <input
      type="file"
      multiple
      className="w-full resize-none  bg-transparent p-4 focus:outline-none group-[.invalid]:border-red-500"
      onChange={(e) => isValid(e.target.value)}
    />
  );
}

export { FormFileUpload };
