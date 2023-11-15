"use client";

import React, { useCallback } from "react";
import { Button, Input, useDisclosure } from "@nextui-org/react";
import DonateProject from "@/components/DonateProject";
import SectionTitle from "@/components/SectionTitle";
import LeftTriangle from "@/components/icons/LeftTriangle";
import RightTriangle from "@/components/icons/RightTriangle";
import { notoSansTC } from "../layout";
import DonateConfirmModal from "@/components/DonateConfirmModal";

type Props = {};

const donateItems = [
  {
    title: "喵星人之友",
    money: 600,
    imgUrl: "/donate1.webp",
  },
  {
    title: "喵星人大使",
    money: 6000,
    imgUrl: "/donate2.webp",
  },
  {
    title: "喵星人傳奇",
    money: 60000,
    imgUrl: "/donate3.webp",
  },
];

export default function Donate({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <section className="relative bg-primary overflow-visible pb-unit-32">
      <SectionTitle className="absolute top-0 left-28 -translate-y-full">
        小額捐款
      </SectionTitle>
      <LeftTriangle className="absolute top-0 left-0 -translate-y-full" />
      <RightTriangle className="absolute bottom-0 right-0 translate-y-full" />
      <div className="container">
        <div
          className={
            "grid grid-cols-2 items-center py-unit-60 " + notoSansTC.className
          }
        >
          <div className="text-center leading-normal">
            <p className="text-5xl font-bold">
              <span className="text-8xl">00</span>%
            </p>
            <p className="text-2xl">已有 2,395,732 人贊助</p>
          </div>
          <div className="text-center leading-normal">
            <p className="text-2xl">目前小額贊助總金額</p>
            <p className="text-5xl font-bold">$987,655,873</p>
          </div>
        </div>
        <div className="flex justify-between items-stretch gap-unit-5">
          {donateItems.map((item) => (
            <DonateProject
              key={item.title}
              title={item.title}
              money={item.money}
              imgUrl={item.imgUrl}
              onCardPress={() => {
                console.log("click!");
                onOpen();
              }}
            />
          ))}
        </div>
        <form
          className="pt-unit-14 w-2/3 mx-auto"
          onSubmit={(e) => onSubmit(e)}
        >
          <Input
            type="number"
            radius="lg"
            label="自訂金額"
            labelPlacement="outside"
            placeholder="NT$  請自行輸入金額"
            description="自訂支持金額，喵喵團結無價"
            classNames={{
              label: "text-large leading-normal",
              description: "text-sm leading-normal",
              input: "shadow-inner rounded-lg pl-3 text-focus",
            }}
          />
          <div className="grid grid-cols-2 pt-unit-2 gap-unit-4">
            <Button
              type="submit"
              color="default"
              fullWidth
              className="text-background text-xl"
              onPress={onOpen}
            >
              $ One-Time
            </Button>
            <Button
              type="submit"
              color="default"
              fullWidth
              className="text-background text-xl"
              onPress={onOpen}
            >
              Monthly
            </Button>
          </div>
        </form>
      </div>
      <DonateConfirmModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
}
