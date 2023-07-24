import React, { useEffect, useRef } from 'react';

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
  const formStepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active === index && formStepRef.current) {
      const options: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      };

      formStepRef.current.scrollIntoView(options);
    }
  }, [active, index]);

  return (
    <div
      ref={formStepRef}
      className={`${
        active >= index ? 'border-yellow text-white' : 'text-gray-600'
      } mt-4 w-full shrink-0 snap-start border-l-4 border-primaryPurple py-4 pl-4 text-sm font-bold`}
    >
      {name}
      <span className="block w-full text-xs font-light">{subtitle}</span>
    </div>
  );
};

export default FormStep;
