import { NextApiRequest, NextApiResponse } from 'next';

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // For GET requests, return the data as JSON
    return res.status(200).json(data);
  } else {
    // For other request methods (POST, PUT, DELETE, etc.), return 405 Method Not Allowed
    return res.status(405).end();
  }
}
