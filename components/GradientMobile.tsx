import React from "react";

type Props = {
  className?: string;
};

export default function GradientMobile({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 393 313"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L177 80.8103L393 180V313H0V0Z"
        fill="url(#paint0_diamond_184_2444)"
      />
      <defs>
        <radialGradient
          id="paint0_diamond_184_2444"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(393 298.084) rotate(-140.419) scale(635.993 2172.07)"
        >
          <stop offset="0.317452" stop-color="#FFA921" />
          <stop offset="0.795871" stop-color="#FFE79A" />
          <stop offset="1" stop-color="#FFDF70" />
        </radialGradient>
      </defs>
    </svg>
  );
}
