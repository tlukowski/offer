import React, { Dispatch, SetStateAction } from 'react';
import { ColorPicker } from '../form/colorpicker';

interface ColorPickerModalProps {
  title: string;
  show?: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}

export default function ColorPickerModal({
  title,
  show,
  onClick,
}: ColorPickerModalProps) {
  return (
    <>
      {show && (
        <div className="modal">
          <div
            className="overlay"
            onClick={() => onClick((show) => !show)}
          ></div>
          <div className="modal-content !max-w-7xl">
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
            <div className="mt-8 flex items-center justify-between">
              <ColorPicker></ColorPicker>
              <ColorPicker></ColorPicker>
              <ColorPicker></ColorPicker>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => onClick((show) => !show)}
                className="btn border border-white px-4 py-2 text-xl transition-colors duration-300 hover:bg-primaryPurple"
              >
                Zatwierdź
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
