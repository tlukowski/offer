import './globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Formularz wyceny',
  description: 'Formularz ułatwiający wycenę projeku',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} mx-auto max-w-3xl bg-blueDarker p-4 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
