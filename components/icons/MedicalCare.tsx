import React from "react";

type Props = {};

export default function MedicalCare({}: Props) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="medical_information">
        <path
          id="Vector"
          d="M100 35H75V20C75 14.5 70.5 10 65 10H55C49.5 10 45 14.5 45 20V35H20C14.5 35 10 39.5 10 45V100C10 105.5 14.5 110 20 110H100C105.5 110 110 105.5 110 100V45C110 39.5 105.5 35 100 35ZM55 20H65V45H55V20ZM100 100H20V45H45C45 50.5 49.5 55 55 55H65C70.5 55 75 50.5 75 45H100V100ZM55 80H45V90H35V80H25V70H35V60H45V70H55V80ZM65 72.5V65H95V72.5H65ZM65 87.5V80H85V87.5H65Z"
          fill="#F9A828"
        />
      </g>
    </svg>
  );
}
