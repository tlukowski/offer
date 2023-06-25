'use client';
import Form from '@/components/form/form';
import Header from '@/components/layout/Header';
// const data = [
//   {
//     steps: [
//       {
//         question:
//           'Jaki adres www będzie miała Twoja strona? Czy posiadasz już domenę?',
//         modal: {
//           title: 'Czy posiadasz swój hosting www? (serwer)',
//           desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
//         },
//       },
//       {
//         question: 'Jak nazywa się Twoja firma lub oferowana usługa/produkt??',
//       },
//       {
//         question:
//           'Czemu ma służyć Twoja strona? (przedstawienie oferty, portfolio, blog, wizytówka firmy, zdobycie kontaktu etc.)',
//         modal: { title: 'xd', desc: 'xd2' },
//       },
//       {
//         question:
//           'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
//       },
//       {
//         question:
//           'Jaki adres www będzie miała Twoja strona? Czy posiadasz już domenę?',
//         modal: {
//           title: 'Czy posiadasz swój hosting www? (serwer)',
//           desc: 'Hosting to inaczej miejsce w sieci, gdzie osadzona jest Twoja strona www, stale monitorowana, podłączona do internetu i domeny.',
//         },
//       },
//       {
//         question: 'Jak nazywa się Twoja firma lub oferowana usługa/produkt??',
//       },
//       {
//         question:
//           'Czemu ma służyć Twoja strona? (przedstawienie oferty, portfolio, blog, wizytówka firmy, zdobycie kontaktu etc.)',
//         modal: { title: 'xd', desc: 'xd2' },
//       },
//       {
//         question:
//           'Określ docelowych odbiorców, grupę wiekową i biznesową, np: branża prawnicza w przedziale wiekowym 20-30 lat.',
//       },
//     ],
//   },
// ];
export default function Home() {
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
            <div className="py-4 text-xl text-secondary">
              Podstawowe informacje
            </div>
            <div className="text-grey py-4 text-xl">Wygląd</div>
          </div>
          <div className="form-wrapper border-blue border-l-2 px-4 py-9">
            <Form></Form>
          </div>
        </div>
      </main>
    </>
  );
}
