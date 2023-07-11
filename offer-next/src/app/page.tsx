'use client';
import Form from '@/components/form/form';
import FormStep from '@/components/form/formStep';
import Header from '@/components/layout/Header';
import { useState } from 'react';
const data = [
  {
    name: 'Podstawowe informacje',
    subtitle: 'Wprowadź niezbędne dane',
    step: [
      {
        question:
          'Jaki adres www będzie miała Twoja strona? Czy posiadasz już domenę?',
        modal: {
          title:
            'Jaki adres www będzie miała Twoja strona? Czy posiadasz już domenę?',
          desc: 'Domena to inaczej nazwa Twojej strony. Możesz podejrzeć ją w górnej części przeglądarki, na pasku wyszukiwania. Przykładowo, domeną strony, na której obecnie się znajdujesz jest oferta.gloo.pl.',
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
        formType: 'textarea',
      },
      {
        question:
          'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
        formType: 'input',
      },
      {
        question: 'Czy posiadasz swój hosting www? (serwer)',
        modal: {
          title: 'Czy posiadasz swój hosting www? (serwer)',
          desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
        },
        formType: 'checkbox',
        checkboxAnswers: [
          {
            answer: 'Tak',
          },
          {
            answer: 'Nie',
          },
        ],
      },
    ],
  },
  {
    name: 'Wygląd',
    subtitle: 'Personalizuj wygląd',
    step: [
      {
        question:
          'Czy twoja strona powinna być utrzymana w jakiejś konkretnej kolorystyce?',

        formType: 'colorPicker',
      },
      {
        question:
          'Prześlij swoje logo jeśli posiadasz. Najlepiej w formacie otwartym, np. svg, cdr, pdf.',
        formType: 'fileUpload',
      },
      {
        question: 'Linki do stron konkurencji, które Ci się podobają.',
        formType: 'textarea',
      },
    ],
  },
  {
    name: 'Architektura i treści',
    subtitle: 'Zdefiniuj układ i treść',
    step: [
      {
        question: 'Wybierz zakładki jakie chcesz mieć na stronie.',
        modal: {
          title: 'Wybierz zakładki jakie chcesz mieć na stronie.',
          desc: 'Zakładki na stronie internetowej to hiperłącza umieszczone w górnej części strony lub w menu nawigacyjnym, które pozwalają użytkownikom szybko przemieszczać się między różnymi sekcjami lub podstronami strony. Zakładki umożliwiają intuicyjne nawigowanie po stronie i łatwe znalezienie poszukiwanych inform',
        },
        formType: 'input',
      },
      {
        question: 'Czy przewidujesz więcej zakładek? (wymień ich nazwy)',
        formType: 'textarea',
      },
      {
        question:
          'Opisz co chciałbyś, aby znajdowało się na zakładkach Twojej strony.',
        modal: {
          title:
            'Opisz co chciałbyś, aby znajdowało się na zakładkach Twojej strony.',
          desc: 'Dla lepszego zrozumienia tego punktu, wyobraź sobie, że właśnie budujesz własną stronę. Na pewno przychodzą Ci do głowy elementy, które chciałbyś na niej umieścić.',
        },
        formType: 'textarea',
      },
      {
        question:
          'Czy potrzebujesz, abyśmy napisali dla Ciebie treści na stronę?',
        formType: 'checkbox',
        checkboxAnswers: [
          {
            answer: 'Tak',
          },
          {
            answer: 'Nie',
          },
        ],
      },
    ],
  },
  {
    name: 'Informacje dodatkowe',
    subtitle: 'Dodatkowe szczegóły',
    step: [
      {
        question: 'Czy masz konto na Google Analytics?',
        modal: {
          title: 'Czy masz konto na Google Analytics?',
          desc: 'Konto Google Analytics jest przeznaczone dla osób, którym zależy na śledzeniu osiągnięć własnej strony, mierzeniu ruchu użytkowników i badaniu ich zachowań. Konto możesz założyć pod tym linkiem: https://analytics.google.com/ lub poprosić nas o wsparcie w tym temacie, w ostatnim kroku tego formularza.',
        },
        formType: 'checkbox',
        checkboxAnswers: [
          {
            answer: 'Tak',
          },
          {
            answer: 'Nie',
          },
        ],
      },
      {
        question: 'Czy planujesz reklamować swoją stronę w internecie?',
        formType: 'checkbox',
        checkboxAnswers: [
          {
            answer: 'Tak',
          },
          {
            answer: 'Nie',
          },
        ],
      },
      {
        question: 'Dodatkowe oczekiwania wobec strony.',
        formType: 'textarea',
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
    subtitle: 'Dodatkowe uwagi',
    step: [
      {
        question: 'Wybierz dodatkowe formy wsparcia.',
        formType: 'input',
      },
      {
        question: 'Jakich specjalistów potrzebujesz?',
        formType: 'input',
      },
      {
        question:
          'Czy jest coś, o czym chciałbyś/chciałabyś nam powiedzieć, a nie znalazło się to w powyższym briefie?',
        formType: 'textarea',
      },
      {
        question: 'Jak masz na imię?',
        formType: 'input',
      },
      {
        question: 'Podaj swój adres email.',
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
        <div className="border-primary mt-6 grid grid-cols-3 border-t">
          <div className="steps pr- pt-9">
            {data.map((item, index) => (
              <FormStep
                key={index}
                name={item.name}
                subtitle={item.subtitle}
                active={activeIndex}
                index={index}
              ></FormStep>
            ))}
          </div>
          <div className="form-wrapper border-blue col-span-2 border-l py-9 pl-10">
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
