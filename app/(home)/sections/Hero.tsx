"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@nextui-org/react";
import { notoSansTC } from "../layout";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="relative h-[calc(100vh-96px)] min-h-[700px] overflow-hidden">
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
      <div className="container relative h-full flex flex-row-reverse items-center">
        <div className="absolute -bottom-8 -left-1/4 w-full h-full">
          <Image
            src="/hero.webp"
            className="object-cover"
            width={1024}
            height={1024}
            priority
            alt="喵立翰"
          />
        </div>
        <div className={cn("relative", notoSansTC)}>
          <h1 className="text-2xl font-bold leading-normal tracking-[1px]">
            立法委員
            <span className="block leading-normal text-large tracking-[4.8px]">
              喵立翰
              <span className="block lg:inline-block pl-2 text-2xl leading-normal tracking-[2.4px]">
                Miao Li-Han
              </span>
            </span>
          </h1>
          <div className="text-justify text-last-justify leading-normal">
            <h2 className="text-8xl">
              從<span className="text-primary">喵</span>的眼中
              <span className="block leading-normal">看見台灣</span>
            </h2>
            <p className="text-2xl pt-6 px-2">台灣的明天，喵先鋪路</p>
          </div>
        </div>
      </div>
    </section>
  );
}
