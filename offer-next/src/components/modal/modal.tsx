import React from 'react';

interface ModalProps {
  show?: boolean;
  title: string;
  desc: string;
}

export default function Modal({ title, desc, show }: ModalProps) {
  console.log(show);
  return (
    <div
      className={`modal absolute h-40 w-40 bg-black ${
        show === true ? 'block' : 'hidden'
      }`}
    >
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  );
}
