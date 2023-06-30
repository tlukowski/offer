'use client';
import Form from '@/components/form/form';
import FormStep from '@/components/form/formStep';
import Header from '@/components/layout/Header';
import { useState } from 'react';
const data = [
  {
    name: 'Podstawowe informacje',
    step: [
      {
        question:
          'Jaki adres www będzie miała Twoja strona? Czy posiadasz już domenę?',
        modal: {
          title: 'Czy posiadasz swój hosting www? (serwer)',
          desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
        },
        formType: 'input',
      },
      {
        question: 'Jak nazywa się Twoja firma lub oferowana usługa/produkt??',
        formType: 'input',
      },
      {
        question:
          'Czemu ma służyć Twoja strona? (przedstawienie oferty, portfolio, blog, wizytówka firmy, zdobycie kontaktu etc.)',
        modal: { title: 'xd', desc: 'xd2' },
        formType: 'input',
      },
      {
        question:
          'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
        formType: 'input',
      },
    ],
  },
  {
    name: 'Wygląd',
    step: [
      {
        question: 'Wygląd',
        modal: {
          title: 'Czy posiadasz swój hosting www? (serwer)',
          desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
        },
        formType: 'input',
      },
      {
        question: 'Jak nazywa się Twoja firma lub oferowana usługa/produkt??',
        formType: 'input',
      },
      {
        question:
          'Czemu ma służyć Twoja strona? (przedstawienie oferty, portfolio, blog, wizytówka firmy, zdobycie kontaktu etc.)',
        modal: { title: 'xd', desc: 'xd2' },
        formType: 'input',
      },
      {
        question:
          'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
        formType: 'input',
      },
    ],
  },
  {
    name: 'Architektura i treści',
    step: [
      {
        question: 'To moje pytanie',
        modal: {
          title: 'Czy posiadasz swój hosting www? (serwer)',
          desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
        },
        formType: 'input',
      },
      {
        question: 'Jak nazywa się Twoja firma lub oferowana usługa/produkt?',
        formType: 'input',
      },
      {
        question:
          'Czemu ma służyć Twoja strona? (przedstawienie oferty, portfolio, blog, wizytówka firmy, zdobycie kontaktu etc.)',
        modal: { title: 'xd', desc: 'xd2' },
        formType: 'input',
      },
      {
        question:
          'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
        formType: 'input',
      },
    ],
  },
  {
    name: 'Informacje dodatkowe',
    step: [
      {
        question: 'To moje pytanie',
        modal: {
          title: 'Czy posiadasz swój hosting www? (serwer)',
          desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
        },
        formType: 'input',
      },
      {
        question: 'Jak nazywa się Twoja firma lub oferowana usługa/produkt??',
        formType: 'input',
      },
      {
        question:
          'Czemu ma służyć Twoja strona? (przedstawienie oferty, portfolio, blog, wizytówka firmy, zdobycie kontaktu etc.)',
        modal: { title: 'xd', desc: 'xd2' },
        formType: 'input',
      },
      {
        question:
          'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
        formType: 'input',
      },
    ],
  },
  {
    name: 'Pozostałe',
    step: [
      {
        question: 'To moje pytanie pozostałe',
        modal: {
          title: 'Czy posiadasz swój hosting www? (serwer)',
          desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
        },
        formType: 'input',
      },
      {
        question: 'Jak nazywa się Twoja firma lub oferowana usługa/produkt??',
        formType: 'input',
      },
      {
        question:
          'Czemu ma służyć Twoja strona? (przedstawienie oferty, portfolio, blog, wizytówka firmy, zdobycie kontaktu etc.)',
        modal: { title: 'xd', desc: 'xd2' },
        formType: 'input',
      },
      {
        question:
          'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
        formType: 'input',
      },
      {
        question:
          'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
        formType: 'input',
      },
      {
        question:
          'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
        formType: 'input',
      },
    ],
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [forms, setForms] = useState(data.map(() => ({ isValid: false })));
  const handleInputValidation = (index: number, isValid: boolean) => {
    setForms((prevForm) => {
      const newForm = [...prevForm];
      newForm[index].isValid = isValid;
      if (index === activeIndex && isValid && activeIndex < data.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
      return newForm;
    });
  };
  return (
    <>
      <Header />
      <main>
        <div className="border-b-1 mt-8 ">
          <h2 className="mb-2.5 text-xl font-bold">
            Formularz wstępnej wyceny strony internetowej
          </h2>
          <p className="font-light">
            Informacje podane w poniższym formularzu, pozwolą nam przygotować
            dla Ciebie precyzyjną ofertę na wykonanie strony internetowej.
            Prosimy, aby wypełnić formularz starannie i uważnie - zaoszczędzi to
            czas potrzebny na dodatkowe konsultacje.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 border-t-2 border-primary">
          <div className="steps pt-9">
            {data.map((item, index) => (
              <FormStep
                key={index}
                name={item.name}
                active={activeIndex}
                index={index}
              ></FormStep>
            ))}
          </div>
          <div className="form-wrapper border-blue border-l-2 px-4 py-9">
            {data.slice(0, activeIndex + 1).map((item, index) => (
              <Form
                key={index}
                index={index}
                formIndex={activeIndex}
                data={item.step}
                formsLength={forms.length}
                onValidation={(isValid) =>
                  handleInputValidation(index, isValid)
                }
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
