import React from "react";

type Props = {
  className?: string;
};

export default function LeftTriangle({ className = "" }: Props) {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="112px"
      height="112px"
      viewBox="0 0 112 112"
      className={className}
    >
      <g>
        <path fill="#F9A828" d="M0,0 L112,112 H0 V0Z" />
      </g>
    </svg>
  );
}
