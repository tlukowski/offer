import React, { useState } from 'react';
import FormInput from './formInput';

const FormStep = ({
  name,
  subtitle,
  active,
  index,
}: {
  name: string;
  subtitle: string;
  active: number;
  index: number;
}) => {
  return (
    <div
      className={`${
        active >= index ? 'border-yellow text-white' : 'text-gray-600'
      } mt-4 border-l-4 border-primaryPurple py-4 pl-4 text-sm font-bold`}
    >
      {name}
      <span className="block w-full text-xs font-light">{subtitle}</span>
    </div>
  );
};

export default FormStep;
