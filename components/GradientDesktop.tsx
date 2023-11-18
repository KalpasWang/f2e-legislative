import React from "react";

type Props = {
  className?: string;
};

export default function GradientDesktop({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 1280 630"
      fill="none"
    >
      <path
        d="M0 0.5L458 201L1280 531V630H0V0.5Z"
        fill="url(#paint0_diamond_30_209)"
      />
      <defs>
        <radialGradient
          id="paint0_diamond_30_209"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1280 600) rotate(-152.956) scale(1792.49 5048.21)"
        >
          <stop offset="0.317452" stop-color="#FFA921" />
          <stop offset="0.795871" stop-color="#FFE79A" />
          <stop offset="1" stop-color="#FFDF70" />
        </radialGradient>
      </defs>
    </svg>
  );
}
