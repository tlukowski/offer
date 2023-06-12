import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <Image
        src="/assets/images/logo.svg"
        alt="Vercel Logo"
        width={211}
        height={25}
        priority
      />
    </header>
  );
}
