'use client';
import Form from '@/components/form/form';
import FormStep from '@/components/form/formStep';
import Header from '@/components/layout/Header';
import { useState, useEffect } from 'react';
import FormData from '@/types/formData';
import { FormThankYouPage } from '@/components/form/formThankYouPage';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FormData[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/data');
        if (response.ok) {
          const data = await response.json();
          setData(data);
          // Initialize the forms state based on data length
          setForms(data.map(() => ({ isValid: false })));
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [forms, setForms] = useState<{ isValid: boolean }[]>([]);
  const [showThankYouPage, setShowThankYouPage] = useState(false);
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
  const onSubmit = () => {
    setShowThankYouPage(true);
  };
  return (
    <>
      <Header />
      <main className="px-6">
        {showThankYouPage ? (
          <FormThankYouPage />
        ) : (
          <>
            <div className=" mt-8 ">
              <h2 className="mb-2.5 text-xl font-bold">
                Formularz wstępnej wyceny strony internetowej
              </h2>
              <p className="font-light">
                Informacje podane w poniższym formularzu, pozwolą nam
                przygotować dla Ciebie precyzyjną ofertę na wykonanie strony
                internetowej. Prosimy, aby wypełnić formularz starannie i
                uważnie - zaoszczędzi to czas potrzebny na dodatkowe
                konsultacje.
              </p>
            </div>
            <div
              className={`${
                loading ? 'opacity-0 ' : 'opacity-1 '
              }transition-opacity border-primary mt-6 border-t duration-500 lg:grid lg:grid-cols-3`}
            >
              <div className="steps relative flex w-full snap-x gap-12 overflow-x-hidden py-14 pb-14 pt-9 lg:block">
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
              <div className="form-wrapper relative col-span-2 lg:mt-0 lg:border-l lg:py-9 lg:pl-10">
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
                    onSubmit={onSubmit}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
