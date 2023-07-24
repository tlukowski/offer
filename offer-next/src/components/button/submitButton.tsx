import { type } from 'os';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface ModalButtonProps {
  children: React.ReactNode;
  onClick: Dispatch<SetStateAction<boolean>>;
}

const SubmitButton: React.FC<ModalButtonProps> = ({ children, onClick }) => {
  const [isValid, setValidForm] = useState(false);

  return (
    <div className="flex justify-end">
      <button
        type="submit"
        onClick={() => onClick((isValid) => !isValid)}
        className={`transition-color px-8 py-4 text-white ${
          isValid ? 'bg-primaryPurple' : 'bg-[#77777D]'
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default SubmitButton;
