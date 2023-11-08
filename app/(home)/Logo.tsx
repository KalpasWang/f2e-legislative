"use client";

import React from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {};

export default function Logo({}: Props) {
  const isMatch = useMediaQuery("(min-width: 600px)");
  const width = isMatch ? 199 : 118;
  const height = isMatch ? 69 : 41;
  return (
    <div>
      <Image
        src={"/Logo.svg"}
        alt="Logo"
        priority={true}
        width={width}
        height={height}
        sizes="118px, (min-width: 600px): 199px"
      />
    </div>
  );
}
