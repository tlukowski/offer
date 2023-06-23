'use client';
import Form from '@/components/form/form';
import Header from '@/components/layout/Header';

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
            <div className="text-xl text-secondary">Podstawowe informacje</div>
          </div>
          <div className="form-wrapper border-blue border-l-2 px-4 py-9">
            <Form></Form>
          </div>
        </div>
      </main>
    </>
  );
}
