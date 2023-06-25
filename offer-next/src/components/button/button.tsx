import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-end">
      <button className="bg-black px-8 py-4 text-white transition-colors hover:bg-white hover:text-black">
        {children}
      </button>
    </div>
  );
};

export default Button;
