import React, { Dispatch, SetStateAction } from 'react';

interface ModalButtonProps {
  onClick: Dispatch<SetStateAction<boolean>>;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick }) => {
  return (
    // Button for modal state changes - show modal/hide
    <button
      className="modal_button"
      onClick={() => onClick((prevState) => !prevState)}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="group"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_68_11892)">
          <path
            className="hover:fill-yellow"
            d="M7.3335 4.66634H8.66683V5.99967H7.3335V4.66634ZM7.3335 7.33301H8.66683V11.333H7.3335V7.33301ZM8.00016 1.33301C4.32016 1.33301 1.3335 4.31967 1.3335 7.99967C1.3335 11.6797 4.32016 14.6663 8.00016 14.6663C11.6802 14.6663 14.6668 11.6797 14.6668 7.99967C14.6668 4.31967 11.6802 1.33301 8.00016 1.33301ZM8.00016 13.333C5.06016 13.333 2.66683 10.9397 2.66683 7.99967C2.66683 5.05967 5.06016 2.66634 8.00016 2.66634C10.9402 2.66634 13.3335 5.05967 13.3335 7.99967C13.3335 10.9397 10.9402 13.333 8.00016 13.333Z"
            fill="#C4C4CC"
          />
        </g>
        <defs>
          <clipPath id="clip0_68_11892">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default ModalButton;
