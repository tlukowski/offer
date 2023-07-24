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
        className={`transition-color px-8 py-4 text-white transition-colors hover:bg-purple-900 ${
          isValid ? 'bg-primaryPurple' : 'bg-primaryPurple'
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default SubmitButton;
