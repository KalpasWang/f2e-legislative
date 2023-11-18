"use client";

import NextImage from "next/image";
import React from "react";
import { Image } from "@nextui-org/react";
import GradientDesktop from "@/components/GradientDesktop";
import GradientMobile from "@/components/GradientMobile";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-64px)] min-h-[500px] lg:min-h-[700px] overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0">
        <GradientDesktop className="w-full hidden lg:block" />
        <GradientMobile className="w-full lg:hidden" />
      </div>
      <div className="container relative h-full flex flex-row flex-nowrap justify-end items-end lg:items-center">
        <div className="absolute left-0 top-0">
          <Image
            as={NextImage}
            src="/hero.webp"
            className="object-cover object-top w-80 lg:w-auto h-full"
            width={582}
            height={939}
            priority
            alt="喵立翰"
          />
        </div>
        <div className="relative z-20 h-full font-noToSansTC flex flex-col justify-end lg:justify-center">
          <div className="bg-primary bg-opacity-75 lg:bg-transparent rounded-sm">
            <h2 className="text-tiny text-right lg:text-left lg:text-2xl font-bold leading-normal tracking-[1px]">
              立法委員
            </h2>
            <h1 className="text-right lg:text-left font-bold lg:py-2 leading-normal text-xl lg:text-large tracking-[4.8px]">
              喵立翰
              <span className="block lg:inline-block pl-2 text-xl lg:text-2xl leading-normal tracking-[2.4px]">
                Miao Li-Han
              </span>
            </h1>
          </div>
          <div className="text-justify text-last-justify leading-normal pt-10 lg:pt-4">
            <h2 className="text-large font-bold lg:text-7xl xl:text-8xl text-support lg:text-foreground">
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
