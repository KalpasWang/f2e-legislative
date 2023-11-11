"use client";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="relative h-screen min-h-[500px]">
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src="/gradient1.svg"
          className="w-full"
          width={1280}
          height={630}
          priority
          alt="background gradient"
        />
      </div>
      <div className="container relative h-full">
        <div className="flex flex-col-reverse w-1/2 h-full">
          <Image src="/hero.webp" width={1024} height={1024} alt="喵立翰" />
        </div>
      </div>
    </section>
  );
}
