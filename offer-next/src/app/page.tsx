'use client';
import FormInput from '@/components/form/formInput';
import Header from '@/components/layout/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="border-b-1 mt-8 border-indigo-500">
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
        <div className="grid grid-cols-2">
          <div className="steps"></div>
          <div className="form-wrapper">
            <FormInput question="xd" modal={{ title: 'xd', desc: 'xd' }} />
            <FormInput question="xd2" />
          </div>
        </div>
      </main>
    </>
  );
}
