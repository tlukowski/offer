import React, { Dispatch, SetStateAction } from 'react';

interface ModalButtonProps {
  onClick: Dispatch<SetStateAction<boolean>>;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick }) => {
  return (
    <button
      className="modal_button"
      onClick={() => onClick((prevState) => !prevState)}
    >
      <svg
        className="modal_question"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="19"
          height="19"
          rx="1.5"
          stroke="#ED673C"
        ></rect>
        <path
          className="pathColor"
          d="M8.42086 14.347H8.89519V10.921H8.42086C8.15889 10.921 7.94653 10.7086 7.94653 10.4466V9.31367C7.94653 9.0517 8.15889 8.83934 8.42086 8.83934H11.0771C11.3391 8.83934 11.5514 9.0517 11.5514 9.31367V14.347H12.0258C12.2877 14.347 12.5001 14.5594 12.5001 14.8213V15.9543C12.5001 16.2163 12.2877 16.4286 12.0258 16.4286H8.42086C8.15889 16.4286 7.94653 16.2163 7.94653 15.9543V14.8213C7.94653 14.5594 8.15889 14.347 8.42086 14.347ZM10.2233 4.28577C9.28023 4.28577 8.51573 5.05027 8.51573 5.99336C8.51573 6.93644 9.28023 7.70095 10.2233 7.70095C11.1664 7.70095 11.9309 6.93644 11.9309 5.99336C11.9309 5.05027 11.1664 4.28577 10.2233 4.28577Z"
          fill="#ED673C"
        ></path>
      </svg>
    </button>
  );
};

export default ModalButton;
