import Image from "next/image";
import React from "react";

type Props = {};

export default function Paw({}: Props) {
  return <Image src="/paw.svg" alt="paw" width={24} height={22.6} />;
}
