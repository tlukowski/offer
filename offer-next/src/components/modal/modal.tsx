import React, { Dispatch, SetStateAction } from 'react';
interface ModalProps {
  title: string;
  desc: string;
  show?: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ title, desc, show, onClick }: ModalProps) {
  return (
    // Get information about modal, disable modal by click close modal, overlay.
    <>
      {show && (
        <div className="modal">
          <div
            className="overlay"
            onClick={() => onClick((show) => !show)}
          ></div>
          <div className="modal-content">
            <div className="flex justify-between">
              <p className="text-xl text-yellow">{title}</p>
              <button
                className="close-modal"
                onClick={() => onClick((show) => !show)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                    fill="#FDFDFD"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-2 border-t border-gray-500 pt-2 text-sm">
              <p>{desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
