import React, { useState } from 'react';
import FormInput from './formInput';

const FormStep = ({
  name,
  active,
  index,
}: {
  name: string;
  active: number;
  index: number;
}) => {
  return (
    <div className={`${active >= index ? 'text-primary' : ''} py-4 text-xl`}>
      {name}
    </div>
  );
};

export default FormStep;
