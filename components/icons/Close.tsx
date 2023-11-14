import React from "react";

type Props = {};

export default function Close({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
    >
      <g transform="scale(2)">
        <circle fill="#F9A828" cx="8" cy="8" r="7" />
        <rect
          fill="#ffffff"
          width="2"
          height="10"
          x="-.98"
          y="-16.29"
          transform="rotate(135)"
        />
        <rect
          fill="#ffffff"
          width="2"
          height="10"
          x="-12.29"
          y="-5.01"
          transform="rotate(-135)"
        />
      </g>
    </svg>
  );
}
