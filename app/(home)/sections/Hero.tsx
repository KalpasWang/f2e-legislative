"use client";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="relative h-[calc(100vh-64px)] min-h-[500px] lg:min-h-[700px] overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0">
        <Image
          src="/gradient1.svg"
          className="w-full hidden lg:block"
          width={1280}
          height={630}
          priority
          alt="background gradient"
        />
        <Image
          src="/gradient2.svg"
          className="w-full lg:hidden"
          width={393}
          height={313}
          priority
          alt="background gradient"
        />
      </div>
      <div className="container relative h-full flex flex-row-reverse items-end lg:items-center">
        <div className="absolute -bottom-8 -left-[28%] w-full h-full">
          <Image
            src="/hero.webp"
            className="object-cover object-top"
            width={1024}
            height={1024}
            priority
            alt="喵立翰"
          />
        </div>
        <div className="relative font-noToSansTC">
          <h1 className="text-tiny text-right lg:text-left lg:text-2xl font-bold leading-normal tracking-[1px]">
            立法委員
            <span className="block leading-normal text-xl lg:text-large tracking-[4.8px]">
              喵立翰
              <span className="block lg:inline-block pl-2 text-xl lg:text-2xl leading-normal tracking-[2.4px]">
                Miao Li-Han
              </span>
            </span>
          </h1>
          <div className="text-justify text-last-justify leading-normal pt-unit-10 lg:pt-0">
            <h2 className="text-large lg:text-8xl text-support lg:text-foreground">
              從<span className="lg:text-primary">喵</span>的眼中
              <span className="block leading-normal">看見台灣</span>
            </h2>
            <p className="text-base text-support lg:text-foreground lg:text-2xl leading-normal pt-0 lg:pt-6 px-2">
              台灣的明天，喵先鋪路
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
