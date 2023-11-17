import React from "react";

type Props = {
  className?: string;
};

export default function RightTriangle({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 112 112"
      className={className}
    >
      <g>
        <path fill="#F9A828" d="M0,0 H112 V112 L0,0Z" />
      </g>
    </svg>
  );
}
