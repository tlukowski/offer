import React from 'react';

interface CheckboxAnswer {
  answer: string;
}

type FormInputElementProps = {
  isValid: (value: string) => void;
  checkboxAnswers: CheckboxAnswer[] | undefined;
};

function FormInputRadio({ checkboxAnswers, isValid }: FormInputElementProps) {
  return (
    <>
      {checkboxAnswers?.map((item, index) => (
        <div className="mb-3 flex items-center bg-dark pl-10" key={index}>
          <input
            className="checked:border-primary checked:after:border-primary checked:after:bg-primary relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-secondary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[8px] checked:after:w-[8px] checked:after:rounded-full checked:after:bg-secondary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)]"
            type="radio"
            name="flexRadioDefault"
            id={`radioDefault${index}`}
          />
          <label
            className="mt-px inline-block w-full py-5 pl-2 text-base hover:cursor-pointer"
            htmlFor={`radioDefault${index}`}
          >
            {item.answer}
          </label>
        </div>
      ))}
    </>
  );
}

export { FormInputRadio };
