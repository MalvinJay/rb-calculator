import React from "react";

const RotateIcon = ({ className = "" }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="m256 58 80 80-80 80"
      ></path>
    </svg>
  );
};

export default RotateIcon;
