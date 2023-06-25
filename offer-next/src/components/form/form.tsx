import React, { useState } from 'react';
import FormInput from './formInput';
import Button from '../button/button';
const data = [
  {
    question:
      'Jaki adres www będzie miała Twoja strona? Czy posiadasz już domenę?',
    modal: {
      title: 'Czy posiadasz swój hosting www? (serwer)',
      desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
    },
  },
  {
    question: 'Jak nazywa się Twoja firma lub oferowana usługa/produkt??',
  },
  {
    question:
      'Czemu ma służyć Twoja strona? (przedstawienie oferty, portfolio, blog, wizytówka firmy, zdobycie kontaktu etc.)',
    modal: { title: 'xd', desc: 'xd2' },
  },
  {
    question:
      'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
  },
];

const Form: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputs, setInputs] = useState(data.map(() => ({ isValid: false })));

  const handleInputValidation = (index: number, isValid: boolean) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index].isValid = isValid;
      if (index === activeIndex && isValid && activeIndex < data.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
      return newInputs;
    });
  };

  return (
    <div>
      {data.slice(0, activeIndex + 1).map((input, index) => (
        <FormInput
          key={index}
          question={input.question}
          modal={input.modal}
          onValidation={(isValid) => handleInputValidation(index, isValid)}
        />
      ))}
      {activeIndex + 1 === data.length && <Button>Dalej</Button>}
    </div>
  );
};

export default Form;
