import React, { Dispatch, SetStateAction, useState } from 'react';

interface ModalButtonProps {
  onClick: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Button: React.FC<ModalButtonProps> = ({ onClick, children }) => {
  const [isValid, setValidForm] = useState(false);

  return (
    <div className="flex justify-end">
      <button
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

export default Button;
