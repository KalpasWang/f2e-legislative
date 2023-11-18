"use client";

import React, { useCallback } from "react";
import { Button, Input, cn, useDisclosure } from "@nextui-org/react";
import DonateProject from "@/components/DonateProject";
import SectionTitle from "@/components/SectionTitle";
import LeftTriangle from "@/components/icons/LeftTriangle";
import RightTriangle from "@/components/icons/RightTriangle";
import DonateConfirmModal from "@/components/DonateConfirmModal";
import Counter from "@/components/Counter";

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
    <section
      id="donate"
      className="relative bg-primary overflow-visible pb-unit-32"
    >
      <SectionTitle className="absolute top-0 left-6 lg:left-28 -translate-y-full">
        小額捐款
      </SectionTitle>
      <LeftTriangle className="absolute top-0 left-0 -translate-y-full w-6 h-6 lg:w-28 lg:h-28" />
      <RightTriangle className="absolute bottom-0 right-0 translate-y-full w-6 h-6 lg:w-28 lg:h-28" />
      <div className="container">
        <div className="font-noToSansTC grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center py-unit-8 lg:py-unit-60">
          <div className="text-center leading-normal">
            <p className="text-5xl font-bold">
              <span className="text-8xl">
                <Counter value={99} />
              </span>
              %
            </p>
            <p className="text-2xl">
              <Counter value={2395732} damping={390} /> 人贊助
            </p>
          </div>
          <div className="text-center leading-normal">
            <p className="text-2xl">目前小額贊助總金額</p>
            <p className="text-large lg:text-5xl font-bold">
              $<Counter value={987655873} damping={500} />
            </p>
          </div>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="flex flex-col lg:flex-row justify-between lg:items-stretch gap-unit-5 w-full py-unit-14">
            {donateItems.map((item) => (
              <DonateProject
                key={item.title}
                title={item.title}
                money={item.money}
                imgUrl={item.imgUrl}
                onCardPress={() => onOpen()}
              />
            ))}
          </div>

          <div className="lg:w-2/3 mx-auto">
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
                input: "shadow-inner rounded-lg pl-3 text-focus bg-background",
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
          </div>
        </form>
      </div>
      <DonateConfirmModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
}
