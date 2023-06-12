import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
        className={`${inter.className} mx-auto max-w-3xl bg-slate-800 p-4 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
